import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, ToastAndroid } from "react-native";
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

    const Id = route.params;

    useEffect(() => {
        user()
        Payment();
    })
    const user = async () => {
        let emails = await AsyncStorage.getItem('users')
        emails = await JSON.parse(emails).email;
        setEmail(emails)
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
            if (Difference_In_Days > 30) {
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
                    if (Difference_In_Days > 35) {
                        let id = data[i]._id;
                        let update = await fetch(`https://easy-ser.vercel.app/roombooking/updatebooking`, {
                            method: "put",
                            body: JSON.stringify({ id, status, pay }),
                            headers: {
                                'content-type': 'application/json'
                            }
                        })
                        update = await update.json();
                        if (update.matchedCount > 0) {
                            setBookid(data[i]._id)
                            sendCancelemail();
                            ownerCancelemail();
                        }
                    }
                }
            }
        }
    }

    const sendCancelemail = async () => {
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

    const ownerCancelemail = async () => {
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

    const handlerazarpay = async (data, id, book) => {
        setLoads(false)
        const options = {
            key: 'rzp_test_MtraH0q566XjUb',
            amount: data.price,
            currency: data.currency,
            name: "Easy Peasy",
            order_id: data.id,

        }
        RazorpayCheckout.open(options).then((response) => {
            check(response, id, book)
        }).catch((err) => {
            console.log("error", err)
        })
    }

    const check = async (response, id, book) => {
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
            update(book);
        }
    }




    const update = async (id) => {
        let pay = "paid";
        let data = await fetch(`https://easy-ser.vercel.app/roombooking/updatebooking`, {
            method: "put",
            body: JSON.stringify({ id, pay }),
            headers: {
                'content-Type': 'application/json'
            }
        })
        data = await data.json();
        if (data) {
            Payment()
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

    const Paynow = async (price, id, status, book, iid) => {
        setLoads(true)
        if (status === "cancelled") {
            ToastAndroid.show('REBOOK ROOM YOUR BOOKING IS CANCELLED', ToastAndroid.SHORT);
            setLoads(false)
        }
        else {
            ToastAndroid.show('REDIRECTING TO PAYMENT GATWAY', ToastAndroid.SHORT);
            let result = await fetch(`https://easy-ser.vercel.app/payment/orders`, {
                method: "post",
                body: JSON.stringify({ price }),
                headers: {
                    'content-type': 'application/json'
                }
            });

            result = await result.json();
            if (result.code === 200) {
                handlerazarpay(result.data, id, book)
            }


        }


    }



    return (
        <View style={{
            flex: 1
        }}>
            <ImageBackground style={{
                width: "100%",
                height: "100%"
            }} source={require('../assets/bac1.png')}>

                <View style={{
                    flexDirection: "row", marginTop: 50,
                    marginLeft: 20,

                }}>
                    <Text style={{ marginTop: 2, fontWeight: "bold" }}><Icon name="close" onPress={() => navigation.goBack()} size={30} color="black" /></Text>
                    <Text style={{ fontSize: 25, marginLeft: 10 }}>Paymnet</Text>
                </View>
                <View style={{
                    marginBottom: 170
                }}>
                    {
                        loads ? <ActivityIndicator size={"large"} /> : <ScrollView>
                            {
                                date && date.length > 0 ?
                                    date.slice(0).reverse().map((item, index) => (
                                        <View style={{ padding: 10 }} key={index}>
                                            <View style={{ marginTop: 5, borderWidth: 1, padding: 5 }}>
                                                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                                    <View>
                                                        <Image style={{
                                                            height: 100,
                                                            width: 100
                                                        }} source={require('../assets/cat1.png')}></Image>
                                                    </View>
                                                    <View style={{ marginTop: 10 }}>
                                                        <Text style={{
                                                            fontSize: 12
                                                        }}>{item.name}, {item.address}, {item.district}</Text>
                                                        <Text style={{
                                                            fontSize: 10
                                                        }}>Booking id : {item._id}</Text>
                                                        <Text style={{
                                                            fontSize: 10
                                                        }}>Owner id : {item.sellerId}</Text>
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                                    <View style={{
                                                        marginTop: 15
                                                    }}>
                                                        <Text style={{
                                                            textAlign: "center"
                                                        }}><Text style={{ color: "red", fontWeight: "bold" }}>Paid Total :</Text> {item.price}</Text>
                                                        <Text>Last date : <Text style={{ color: "red", fontWeight: "800" }}>3 July</Text></Text>
                                                    </View>
                                                    <View>
                                                        <Text>Status : <Text style={{ color: "red", fontWeight: "800" }}>{item.pay}</Text></Text>
                                                        <TouchableOpacity style={{
                                                            borderWidth: 1,
                                                            padding: 10,
                                                            marginTop: 5,
                                                            borderRadius: 5,
                                                            borderColor: "red"
                                                        }}><Text style={{ textAlign: "center", color: "red", fontWeight: "bold" }} onPress={() => Paynow(item.price, item._id, item.status, item._id, item.productId)}>Pay now</Text></TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    )) : null
                            }



                        </ScrollView>

                    }
                </View>



            </ImageBackground>
        </View>
    )
}

export default Payment;