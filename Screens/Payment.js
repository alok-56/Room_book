import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, ToastAndroid, Alert } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ImageBackground, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RazorpayCheckout from 'react-native-razorpay'

const Payment = ({ navigation, route }) => {

    const [date, setDate] = useState('')
    const [pay, setPay] = useState("Due");
    const [status, setStatus] = useState("cancelled");
    const [id, setBookid] = useState();
    const [email, setEmail] = useState();
    const [loads, setLoads] = useState(true)
    const [name, setName] = useState()

    const Id = route.params;

    useEffect(() => {
        user()
        Payment();
    })
    const user = async () => {
        let emails = await AsyncStorage.getItem('users')
        emails = await JSON.parse(emails).email;
        setEmail(emails)
        let names = await AsyncStorage.getItem('users')
        names = await JSON.parse(names).name;
        setName(name)
    }

    const Payment = async () => {
        let data = await fetch(`https://easy-ser.vercel.app/roombooking/userbookinglist/${Id}`);
        data = await data.json();
        setDate(data);
        setLoads(false)
        setBookid(data._id)
        for (var i = 0; i < date.length; i++) {
            var date1 = data[i].time;
            var date2 = new Date();
            var Difference_In_Time = date2.getTime() - date1;
            var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            console.log(Difference_In_Days)
            if (Difference_In_Days > 30 + data[i].extendpay) {
                if (data[i].status != 'cancelled') {
                    let id = data[i]._id;
                    let update = await fetch(`https://easy-ser.vercel.app/roombooking/updatebooking`, {
                        method: "put",
                        body: JSON.stringify({ id, pay }),
                        headers: {
                            'content-type': 'application/json'
                        }
                    })
                    update = await update.json();
                    if (update.modifiedCount > 0) {
                        datenotify(data[i].email, data[i]._id)
                    }
                    if (Difference_In_Days > 35 + data[i].extendpay) {
                        let id = data[i]._id;
                        let update = await fetch(`https://easy-ser.vercel.app/roombooking/updatebooking`, {
                            method: "put",
                            body: JSON.stringify({ id, status, pay }),
                            headers: {
                                'content-type': 'application/json'
                            }
                        })
                        update = await update.json();
                        if (update.modifiedCount > 0) {
                            setBookid(data[i]._id)
                            sendCancelemail(data[i].email, data[i]._id);
                            ownerCancelemail(data[i].owner, data[i]._id);
                            getproduct(data[i].productId)
                        }
                    }
                }
            }
        }
    }

    const datenotify = async (email, id) => {
        let data = await fetch(`https://easy-ser.vercel.app/roombooking/datenotify`, {
            method: "post",
            body: JSON.stringify({ email, id }),
            headers: {
                'content-type': 'application/json'
            }
        });

        data = await data.json();
        if (data) {
            console.log("date notify to user send")
        }
    }



    const getproduct = async (id) => {
        let data = await fetch(`https://easy-ser.vercel.app/room/roomlist/${id}`);
        data = await data.json();
        console.log(data)
        if (data) {
            updateroom(id, data.remainingbed)
        }

    }

    const updateroom = async (id, remaining) => {
        let remainingbed = remaining + 1;
        let data = await fetch(`https://easy-ser.vercel.app/room/update/${id}`, {
            method: "put",
            body: JSON.stringify({ remainingbed }),
            headers: {
                'content-type': 'application/json'
            }
        })

        data = await data.json();
        if (data) {
            console.log("updated", data)
        }
    }


    const sendCancelemail = async (email, id) => {
        let data = await fetch(`https://easy-ser.vercel.app/roombooking/book/cancel`, {
            method: "post",
            body: JSON.stringify({ email, id }),
            headers: {
                'content-type': 'application/json'
            }
        });

        data = await data.json();
        if (data) {
            console.log("send")

        }
    }

    const ownerCancelemail = async (email, id) => {
        let data = await fetch(`https://easy-ser.vercel.app/roombooking/book//cancelowner`, {
            method: "post",
            body: JSON.stringify({ email, id }),
            headers: {
                'content-type': 'application/json'
            }
        });

        data = await data.json();
        if (data) {
            console.log("send")
        }
    }

    const handlerazarpay = async (data, id, book, date, last, owner, user) => {
        setLoads(false)
        const options = {
            key: 'rzp_test_MtraH0q566XjUb',
            amount: data.price,
            currency: data.currency,
            name: "Easy Peasy",
            order_id: data.id,

        }
        RazorpayCheckout.open(options).then((response) => {
            check(response, id, book, date, last, owner, user)
        }).catch((err) => {
            console.log("error", err)
        })
    }

    const check = async (response, id, book, date, last, owner, user) => {
        console.log(response)
        let data = await fetch('https://easy-ser.vercel.app/payment/verify', {
            method: "post",
            body: JSON.stringify({ response }),
            headers: {
                "content-type": "application/json"
            }
        });
        data = await data.json();
        if (data.code === 200) {
            postbooking(data, id);
            update(book, date, last);
            ownerRepayemail(owner, id);
            userRepayemail(user, id);
        }
    }

    const update = async (id, da, last) => {
        const date = new Date(da)
        date.setDate(date.getDate() + 30)
        const time = date.getTime()
        const lastdate = new Date(last)
        lastdate.setDate(date.getDate() + 30)
        let extendpay = 0;
        let pay = "paid";
        let data = await fetch(`https://easy-ser.vercel.app/roombooking/updatebooking`, {
            method: "put",
            body: JSON.stringify({ id, pay, date, time, lastdate, extendpay }),
            headers: {
                'content-Type': 'application/json'
            }
        })
        data = await data.json();
        if (data) {
            Payment()
        }
    }


    const ownerRepayemail = async (email, book) => {
        console.log("owner email", email)
        let data = await fetch(`https://easy-ser.vercel.app/roombooking/repayowner`, {
            method: "post",
            body: JSON.stringify({ email, book, name }),
            headers: {
                'content-type': 'application/json'
            }
        });
        data = await data.json();
        if (data) {
            console.log("Repay email send to owner")
        }
    }

    const userRepayemail = async (email, book) => {
        let data = await fetch(`https://easy-ser.vercel.app/roombooking/repayuser`, {
            method: "post",
            body: JSON.stringify({ email, book }),
            headers: {
                'content-type': 'application/json'
            }
        });

        data = await data.json();
        if (data) {
            console.log("Repay email send to user")
        }
    }


    const postbooking = async (db, id) => {
        let transitionId = db.data.payment_id;
        let orderId = db.data.order_id;
        let data = await fetch(`https://easy-ser.vercel.app/roombooking/updatebooking/update`, {
            method: "put",
            body: JSON.stringify({
                id, transitionId, orderId
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
        data = await data.json();
        if (data) {
            Payment()
        }
    }

    const Paynow = async (price, id, status, book, iid, date, last, owner, user) => {
        setLoads(true)
        if (status === "cancelled") {
            Alert.alert('REBOOK ROOM YOUR BOOKING IS CANCELLED')
            setLoads(false)
        }
        else {
            Alert.alert('REDIRECTING TO PAYMENT GATWAY')
            let result = await fetch(`https://easy-ser.vercel.app/payment/orders`, {
                method: "post",
                body: JSON.stringify({ price }),
                headers: {
                    'content-type': 'application/json'
                }
            });

            result = await result.json();
            if (result.code === 200) {
                handlerazarpay(result.data, id, book, date, last, owner, user)
            }


        }


    }
    return (
        <View style={{
            flex: 1
        }}>

            <View style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <Image style={{
                }} source={require('../assets/org1.png')}></Image>
                <Image style={{
                    marginTop: 30,
                    height: 35,
                    width: 35

                }} source={require('../assets/org2.png')}></Image>
                <Image style={{
                    marginTop: 10,
                }} source={require('../assets/org3.png')}></Image>
            </View>
            <View style={{
                alignSelf: "center",
                flexDirection: "row",
                justifyContent: "center"
            }}>
                <View style={{
                    position: "relative",
                    right: 60,
                }}>
                    <Icon onPress={() => navigation.goBack()} name={"arrow-left"} size={44} color="#000"></Icon>
                </View>
                <Text style={{
                    fontSize: 25,
                    color: "#000",
                    fontWeight: "600",
                }}>My Booking</Text>
            </View>
            <View style={{ width: "85%", height: 5, alignSelf: "center", backgroundColor: "rgba(255, 186, 171, 1)", borderRadius: 10 }}>
            </View>
            {
                loads ? <View style={{
                    marginTop: 200
                }}>
                    <ActivityIndicator size={'large'}></ActivityIndicator>
                </View> :

                    <View style={{
                        marginBottom: 210
                    }}>
                        <ScrollView>
                            {
                                date && date.length > 0 ?
                                    date.slice(0).reverse().map((item, index) => (
                                        <View key={index} style={{
                                            width: "90%",
                                            backgroundColor: "#fff",
                                            elevation: 20,
                                            alignSelf: "center",
                                            padding: 8,
                                            marginTop: 10,
                                            borderRadius: 7,
                                        }}>
                                            <View>
                                                <Image style={{
                                                    width: "100%",
                                                    height: 150
                                                }} source={require('../assets/roms.png')}></Image>
                                            </View>
                                            <View>
                                                <Text style={{
                                                    fontSize: 20,
                                                    color: "#000",
                                                    fontWeight: "500"
                                                }}>{item.roomname} //</Text>
                                                <Text style={{
                                                    fontSize: 16,
                                                    color: "#000",
                                                    fontWeight: "400"
                                                }} >{item.address},{item.district}</Text>
                                                <Text style={{
                                                    fontSize: 13
                                                }}>Booking id : {item._id}</Text>
                                                <Text style={{
                                                    fontSize: 15
                                                }}>Last Payment Date : {new Date(item.lastdate).getDate()}/{new Date(item.lastdate).getMonth() + 1}/{new Date(item.lastdate).getFullYear()}  </Text>
                                                <View style={{
                                                    flexDirection: "row",
                                                    justifyContent: "space-between",
                                                    padding: 2
                                                }}>
                                                    <Text style={{
                                                        fontSize: 15
                                                    }}>Owner id : {item.sellerId}  </Text>
                                                    <Text style={{
                                                        fontSize: 15,
                                                        color: "rgba(0, 118, 255, 1)",
                                                        fontWeight: "600"
                                                    }}>Price : {item.price}</Text>

                                                </View>
                                                <Text style={{
                                                    fontSize: 20
                                                }}>Status : <Text style={{
                                                    color: "rgba(0, 118, 255, 1)",
                                                    fontWeight: "800"
                                                }}>{item.pay}</Text></Text>

                                            </View>
                                            <View style={{ width: "85%", marginTop: 5, height: 5, alignSelf: "center", backgroundColor: "rgba(255, 186, 171, 1)", borderRadius: 10 }}>
                                            </View>

                                            <TouchableOpacity style={{
                                                width: 200,
                                                backgroundColor: "rgba(255, 46, 0, 1)",
                                                alignSelf: "center",
                                                padding: 5,
                                                elevation: 20,
                                                borderRadius: 7,
                                                marginTop: 10
                                            }}><Text
                                                style={{
                                                    fontSize: 20,
                                                    color: "#fff",
                                                    fontWeight: "700",
                                                    textAlign: "center"
                                                }}
                                                onPress={() => Paynow(item.price, item._id, item.status, item._id, item.productId, item.date, item.lastdate, item.ownerEmail, item.email)}>Pay now</Text></TouchableOpacity>

                                        </View>

                                    )) : <Text>No book</Text>
                            }

                        </ScrollView>





                    </View>
            }

        </View>
    )
}

export default Payment;




// <ImageBackground style={{
//                 width: "100%",
//                 height: "100%"
//             }} source={require('../assets/bac1.png')}>

//                 <View style={{
//                     flexDirection: "row", marginTop: 50,
//                     marginLeft: 20,

//                 }}>
//                     <Text style={{ marginTop: 2, fontWeight: "bold" }}><Icon name="close" onPress={() => navigation.goBack()} size={30} color="black" /></Text>
//                     <Text style={{ fontSize: 25, marginLeft: 10 }}>Paymnet</Text>
//                 </View>
//                 <View style={{
//                     marginBottom: 170
//                 }}>
//                     {
//                         loads ? <ActivityIndicator size={"large"} /> : <ScrollView>
//                             {
//                                 date && date.length > 0 ?
//                                     date.slice(0).reverse().map((item, index) => (
//                                         <View style={{ padding: 10 }} key={index}>
//                                             <View style={{ marginTop: 5, borderWidth: 1, padding: 5 }}>
//                                                 <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
//                                                     <View>
//                                                         <Image style={{
//                                                             height: 100,
//                                                             width: 100
//                                                         }} source={require('../assets/cat1.png')}></Image>
//                                                     </View>
//                                                     <View style={{ marginTop: 10 }}>
//                                                         <Text style={{
//                                                             fontSize: 12
//                                                         }}>{item.name}, {item.address}, {item.district}</Text>
//                                                         <Text style={{
//                                                             fontSize: 10
//                                                         }}>Booking id : {item._id}</Text>
//                                                         <Text style={{
//                                                             fontSize: 10
//                                                         }}>Owner id : {item.sellerId}</Text>
//                                                     </View>
//                                                 </View>
//                                                 <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
//                                                     <View style={{
//                                                         marginTop: 15
//                                                     }}>
//                                                         <Text style={{
//                                                             textAlign: "center"
//                                                         }}><Text style={{ color: "red", fontWeight: "bold" }}>Paid Total :</Text> {item.price}</Text>
//                                                         <Text>Last date : <Text style={{ color: "red", fontWeight: "800" }}>3 July</Text></Text>
//                                                     </View>
//                                                     <View>
//                                                         <Text>Status : <Text style={{ color: "red", fontWeight: "800" }}>{item.pay}</Text></Text>
//                                                         <TouchableOpacity style={{
//                                                             borderWidth: 1,
//                                                             padding: 10,
//                                                             marginTop: 5,
//                                                             borderRadius: 5,
//                                                             borderColor: "red"
//                                                         }}><Text style={{ textAlign: "center", color: "red", fontWeight: "bold" }} onPress={() => Paynow(item.price, item._id, item.status, item._id, item.productId)}>Pay now</Text></TouchableOpacity>
//                                                     </View>
//                                                 </View>
//                                             </View>
//                                         </View>
//                                     )) : null
//                             }



//                         </ScrollView>

//                     }
//                 </View>



//             </ImageBackground>