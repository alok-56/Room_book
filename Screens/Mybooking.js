import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, ToastAndroid } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ImageBackground, Image } from "react-native";
import Modal from 'react-native-modal'

const Mybooking = ({ navigation, route }) => {
    const [data, SetData] = useState('')
    const [status, setStatus] = useState("cancelled")
    const [load, setLoad] = useState(true);
    const [email, setEmail] = useState('');
    const [book, setBook] = useState('')
    const [loads, setLoads] = useState(true)
    const [cancelbook, setCancelbook] = useState(false)
    const [conform, setconform] = useState(false)

    const id = route.params;
    useEffect(() => {
        getbook();
    }, [])
    const getbook = async () => {

        let data = await fetch(`https://easy-ser.vercel.app/roombooking/userbookinglist/${id}`);
        data = await data.json();
        SetData(data);
        setLoads(false)
    }

    function set() {
        setCancelbook(false)
        setconform(true)
    }

    const cancel = async (id, statuss, email, time, price, payment, product, useremail) => {
        setCancelbook(true)
        if (conform) {
            if (statuss === 'cancelled') {
                ToastAndroid.show('Your Booking is already cancelled', ToastAndroid.SHORT);
                // toast("Your Booking is already cancelled")
                setconform(false)
            }
            else {
                var canceldate = new Date();
                var Difference_In_Time = canceldate.getTime() - time;
                var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                console.log(Difference_In_Days)
                if (Difference_In_Days <= 1) {
                    setLoads(true)
                    let data = await fetch(`https://easy-ser.vercel.app/payment/refund`, {
                        method: "post",
                        body: JSON.stringify({ price, payment }),
                        headers: {
                            'content-Type': 'application/json'
                        }
                    })
                    data = await data.json();
                    if (data.status && data.id) {
                        let refundid = data.id;
                        let refundstatus = data.status;
                        let refund = await fetch(`https://easy-ser.vercel.app/roombooking/updatebooking`, {
                            method: "put",
                            body: JSON.stringify({ id, refundid, refundstatus }),
                            headers: {
                                'content-Type': 'application/json'
                            }
                        })
                        refund = await refund.json();
                        if (refund.modifiedCount > 0) {
                            setLoads(false)
                            ToastAndroid.show('refund process started', ToastAndroid.SHORT);
                            // toast("refund process started");
                            getbook();
                            cancelRefund(id,)
                            getproduct(product)
                            ownerCancelemail(id, email);
                            userCancelemail(id, useremail)
                            setconform(false)
                        }
                    }
                    else {
                        setLoads(false)
                        ToastAndroid.show('refund process declined due to exceed of time', ToastAndroid.SHORT);
                        cancelRefund(id)
                        setconform(false)

                    }
                }
                else {
                    let data = await fetch(`https://easy-ser.vercel.app/roombooking/updatebooking`, {
                        method: "put",
                        body: JSON.stringify({ id, status, canceldate, }),
                        headers: {
                            'content-Type': 'application/json'
                        }
                    })
                    data = await data.json();
                    if (data.matchedCount > 0) {
                        ownerCancelemail(id, email);
                        userCancelemail(id, useremail)
                        getbook();
                        ToastAndroid.show('your booking is cancelled succesfully', ToastAndroid.SHORT);
                        getproduct(product)
                        setconform(false)
                    }
                }

            }

        }

    }


    const getproduct = async (id) => {
        let data = await fetch(`https://easy-ser.vercel.app/room/roomlist/${id}`);
        data = await data.json();
        console.log(data)
        if (data) {
            update(id, data.remainingbed)
        }

    }

    const update = async (id, bed) => {
        let remainingbed = bed + 1;
        let data = await fetch(`https://easy-ser.vercel.app/room/update/${id}`, {
            method: "put",
            body: JSON.stringify({ remainingbed }),
            headers: {
                'content-type': 'application/json'
            }
        })

        data = await data.json();
        if (data) {
            console.log(data)
        }
    }

    const cancelRefund = async (id) => {
        var canceldate = new Date();
        let data = await fetch(`https://easy-ser.vercel.app/roombooking/updatebooking`, {
            method: "put",
            body: JSON.stringify({ id, status, canceldate, }),
            headers: {
                'content-Type': 'application/json'
            }
        })
        data = await data.json();
        if (data.matchedCount > 0) {
            getbook();
            ToastAndroid.show('your booking is cancelled succesfully', ToastAndroid.SHORT);
        }
    }


    const ownerCancelemail = async (id, email) => {
        console.log(email)
        let data = await fetch(`https://easy-ser.vercel.app/roombooking/book/cancelowner`, {
            method: "post",
            body: JSON.stringify({ id, email }),
            headers: {
                'content-Type': 'application/json'
            }
        });

        data = await data.json();
        if (data) {
            console.log("send")
        }
    }

    const userCancelemail = async (id, email) => {
        console.log(email)
        let data = await fetch(`https://easy-ser.vercel.app/roombooking/book/cancel`, {
            method: "post",
            body: JSON.stringify({ id, email }),
            headers: {
                'content-type': 'application/json'
            }
        });

        data = await data.json();
        if (data) {
            console.log("send")
        }
    }

    return (
        <View style={{
            flex: 1
        }}>

            <Modal isVisible={cancelbook}>
                <View style={{ height: 200, backgroundColor: "#fff", borderRadius: 10 }}>
                    <Text style={{ marginTop: 30, textAlign: "center", fontSize: 20, fontWeight: "bold", color: "red" }}>Are You sure to Cancel Booking</Text>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        marginTop: 20
                    }}>
                        <TouchableOpacity style={{
                            width: 130,
                            backgroundColor: "#000",
                            borderRadius: 7,
                            padding: 5
                        }} onPress={() => set()}>
                            <Text style={{
                                color: "#fff",
                                textAlign: "center",
                                fontSize: 15,
                                fontWeight: "600",
                            }}>Yes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            width: 130,
                            backgroundColor: "#000",
                            borderRadius: 7,
                            padding: 5
                        }} onPress={() => setCancelbook(false)}>
                            <Text style={{
                                color: "#fff",
                                textAlign: "center",
                                fontSize: 15,
                                fontWeight: "600"
                            }}>No</Text>
                        </TouchableOpacity>


                    </View>

                </View>
            </Modal>

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
                                data && data.length > 0 ?
                                    data.slice(0).reverse().map((item, index) => (
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
                                                <View style={{
                                                    flexDirection: "row",
                                                    justifyContent: "space-between",
                                                    padding: 2
                                                }}>
                                                    <Text style={{
                                                        fontSize: 15
                                                    }}>Booked on :  {new Date(item.date).getDate()}/{new Date(item.date).getMonth() + 1}/{new Date(item.date).getFullYear()}</Text>
                                                    <Text style={{
                                                        fontSize: 15,
                                                        color: "rgba(0, 118, 255, 1)",
                                                        fontWeight: "600"
                                                    }}>Rs : {item.price}</Text>

                                                </View>
                                                <Text style={{
                                                    fontSize: 20
                                                }}>Status : <Text style={{
                                                    color: "rgba(0, 118, 255, 1)",
                                                    fontWeight: "800"
                                                }}>{item.status}</Text></Text>

                                            </View>
                                            <View style={{ width: "85%", marginTop: 5, height: 5, alignSelf: "center", backgroundColor: "rgba(255, 186, 171, 1)", borderRadius: 10 }}>
                                            </View>
                                            <TouchableOpacity style={{
                                                width: 200,
                                                backgroundColor: "rgba(45, 142, 254, 1)",
                                                alignSelf: "center",
                                                padding: 5,
                                                elevation: 20,
                                                borderRadius: 7,
                                                marginTop: 10
                                            }}>{
                                                    item.refundstatus ? <Text style={{
                                                        fontSize: 20,
                                                        color: "#fff",
                                                        fontWeight: "700",
                                                        textAlign: "center"
                                                    }} onPress={() => navigation.navigate('refund', {
                                                        id: item._id
                                                    })}>Refund Status</Text> : <Text style={{
                                                        fontSize: 20,
                                                        color: "#fff",
                                                        fontWeight: "700",
                                                        textAlign: "center"
                                                    }} onPress={() => cancel(item._id, item.status, item.ownerEmail, item.time, item.price, item.transitionId, item.productId, item.email)}>Cancel Booking</Text>
                                                }
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={{
                                                    width: 200,
                                                    backgroundColor: "rgba(255, 46, 0, 1)",
                                                    alignSelf: "center",
                                                    padding: 5,
                                                    elevation: 20,
                                                    borderRadius: 7,
                                                    marginTop: 10
                                                }}
                                            ><Text style={{
                                                fontSize: 20,
                                                color: "#fff",
                                                fontWeight: "700",
                                                textAlign: "center"
                                            }} onPress={() => navigation.navigate('owner', {
                                                id: item._id
                                            })}>Owner info</Text></TouchableOpacity>


                                        </View>

                                    )) : <Text>No room Booking</Text>
                            }

                        </ScrollView>





                    </View>
            }



        </View>
    )
}

export default Mybooking;





// <ImageBackground style={{
//     width: "100%",
//     height: "100%"
// }} source={require('../assets/bac1.png')}>

//     <View style={{
//         flexDirection: "row", marginTop: 50,
//         marginLeft: 20
//     }}>
//         <Text style={{ marginTop: 2, fontWeight: "bold" }}><Icon onPress={() => navigation.goBack()} name="close" size={30} color="black" /></Text>
//         <Text style={{ fontSize: 25, marginLeft: 10 }}>My booking</Text>
//     </View>
//     <ScrollView>
//         {
//             loads ? <View style={{
//                 marginTop: 200
//             }}>
//                 <ActivityIndicator size={'large'}></ActivityIndicator>
//             </View> :

//                 <View style={{ padding: 10, marginBottom: 100 }}>
//                     {
//                         data && data.length > 0 ?
//                             data.slice(0).reverse().map((item, index) => (
//                                 <View style={{ marginTop: 5, borderWidth: 1, padding: 5 }} key={index}>
//                                     <View style={{ flexDirection: "row", justifyContent: "space-around" }} >
//                                         <View>
//                                             <Image style={{
//                                                 height: 100,
//                                                 width: 100
//                                             }} source={require('../assets/cat1.png')}></Image>
//                                         </View>
//                                         <View style={{ marginTop: 10 }}>
//                                             <Text style={{
//                                                 fontSize: 12
//                                             }}>{item.roomname}, {item.address}, {item.district}</Text>
//                                             <Text style={{
//                                                 fontSize: 10
//                                             }}>Booking id : {item._id}</Text>
//                                             <Text style={{
//                                                 fontSize: 12
//                                             }}>Booked on : {new Date(item.date).getDate()}/{new Date(item.date).getMonth() + 1}/{new Date(item.date).getFullYear()} </Text>
//                                         </View>
//                                     </View>
//                                     <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
//                                         <View style={{
//                                             marginTop: 10
//                                         }}>
//                                             <Text style={{
//                                                 textAlign: "center"
//                                             }}><Text style={{ color: "red", fontWeight: "bold" }}>Rs :</Text> {item.price}</Text>
//                                             <Text>Status : <Text style={{ color: "red", fontWeight: "800" }}>{item.status}</Text></Text>
//                                         </View>
//                                         <View>
//                                             <TouchableOpacity style={{
//                                                 borderWidth: 1,
//                                                 padding: 5,
//                                                 borderRadius: 5,
//                                                 borderColor: "red"
//                                             }}>{
//                                                     item.refundstatus ? <Text style={{ color: "red" }} onPress={() => navigation.navigate('refund', {
//                                                         id: item._id
//                                                     })}>Refund Status</Text> : <Text style={{ color: "red" }} onPress={() => cancel(item._id, item.status, item.ownerEmail, item.time, item.price, item.transitionId)}>Cancel Booking</Text>
//                                                 }
//                                             </TouchableOpacity>
//                                             <TouchableOpacity style={{
//                                                 borderWidth: 1,
//                                                 padding: 5,
//                                                 marginTop: 5,
//                                                 borderRadius: 5,
//                                                 borderColor: "red"
//                                             }}><Text style={{ textAlign: "center", color: "red" }} onPress={() => navigation.navigate('owner', {
//                                                 id: item._id
//                                             })}>Owner info</Text></TouchableOpacity>

//                                         </View>
//                                     </View>

//                                 </View>


//                             )) : <Text>No booking </Text>
//                     }
//                 </View>




//         }
//     </ScrollView>


// </ImageBackground>