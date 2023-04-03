import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, ToastAndroid } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ImageBackground, Image } from "react-native";

const Mybooking = ({ navigation, route }) => {
    const [data, SetData] = useState('')
    const [status, setStatus] = useState("cancelled")
    const [load, setLoad] = useState(true);
    const [email, setEmail] = useState('');
    const [book, setBook] = useState('')
    const [loads, setLoads] = useState(true)

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

    const cancel = async (id, statuss, email, time, price, payment) => {
        if (statuss === 'cancelled') {
            ToastAndroid.show('Your Booking is already cancelled', ToastAndroid.SHORT);
            // toast("Your Booking is already cancelled")
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
                        cancelRefund(id, email)
                    }
                }
                else {
                    setLoads(false)
                    ToastAndroid.show('refund process declined due to exceed of time', ToastAndroid.SHORT);
                    // toast("refund process declined due to exceed of time");
                    cancelRefund(id)

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
                if (data.acknowledged === true) {
                    ownerCancelemail(id, email);
                    getbook();
                    ToastAndroid.show('your booking is cancelled succesfully', ToastAndroid.SHORT);
                    // toast("your booking is cancelled succesfully");

                }
            }

        }
    }

    const cancelRefund = async (id, email) => {
        var canceldate = new Date();
        let data = await fetch(`https://easy-ser.vercel.app/roombooking/updatebooking`, {
            method: "put",
            body: JSON.stringify({ id, status, canceldate, }),
            headers: {
                'content-Type': 'application/json'
            }
        })
        data = await data.json();
        if (data.acknowledged === true) {
            getbook();
            ToastAndroid.show('your booking is cancelled succesfully', ToastAndroid.SHORT);
            // toast("your booking is cancelled succesfully");
            ownerCancelemail(id, email);
        }
    }


    const ownerCancelemail = async (id, email) => {
        console.log(email)
        let data = await fetch(`https://easy-ser.vercel.app/roombooking/book/cancelowner`, {
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
            <ImageBackground style={{
                width: "100%",
                height: "100%"
            }} source={require('../assets/bac1.png')}>

                <View style={{
                    flexDirection: "row", marginTop: 50,
                    marginLeft: 20
                }}>
                    <Text style={{ marginTop: 2, fontWeight: "bold" }}><Icon onPress={() => navigation.goBack()} name="close" size={30} color="black" /></Text>
                    <Text style={{ fontSize: 25, marginLeft: 10 }}>My booking</Text>
                </View>
                <ScrollView>
                    {
                        loads ? <View style={{
                            marginTop: 200
                        }}>
                            <ActivityIndicator size={'large'}></ActivityIndicator>
                        </View> :

                            <View style={{ padding: 10, marginBottom: 100 }}>
                                {
                                    data && data.length > 0 ?
                                        data.slice(0).reverse().map((item, index) => (
                                            <View style={{ marginTop: 5, borderWidth: 1, padding: 5 }} key={index}>
                                                <View style={{ flexDirection: "row", justifyContent: "space-around" }} >
                                                    <View>
                                                        <Image style={{
                                                            height: 100,
                                                            width: 100
                                                        }} source={require('../assets/cat1.png')}></Image>
                                                    </View>
                                                    <View style={{ marginTop: 10 }}>
                                                        <Text style={{
                                                            fontSize: 12
                                                        }}>{item.roomname}, {item.address}, {item.district}</Text>
                                                        <Text style={{
                                                            fontSize: 10
                                                        }}>Booking id : {item._id}</Text>
                                                        <Text style={{
                                                            fontSize: 12
                                                        }}>Booked on : {new Date(item.date).getDate()}/{new Date(item.date).getMonth() + 1}/{new Date(item.date).getFullYear()} </Text>
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                                    <View style={{
                                                        marginTop: 10
                                                    }}>
                                                        <Text style={{
                                                            textAlign: "center"
                                                        }}><Text style={{ color: "red", fontWeight: "bold" }}>Rs :</Text> {item.price}</Text>
                                                        <Text>Status : <Text style={{ color: "red", fontWeight: "800" }}>{item.status}</Text></Text>
                                                    </View>
                                                    <View>
                                                        <TouchableOpacity style={{
                                                            borderWidth: 1,
                                                            padding: 5,
                                                            borderRadius: 5,
                                                            borderColor: "red"
                                                        }}>{
                                                                item.refundstatus ? <Text style={{ color: "red" }} onPress={() => navigation.navigate('refund', {
                                                                    id: item._id
                                                                })}>Refund Status</Text> : <Text style={{ color: "red" }} onPress={() => cancel(item._id, item.status, item.ownerEmail, item.time, item.price, item.transitionId)}>Cancel Booking</Text>
                                                            }
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{
                                                            borderWidth: 1,
                                                            padding: 5,
                                                            marginTop: 5,
                                                            borderRadius: 5,
                                                            borderColor: "red"
                                                        }}><Text style={{ textAlign: "center", color: "red" }} onPress={() => navigation.navigate('owner', {
                                                            id: item._id
                                                        })}>Owner info</Text></TouchableOpacity>

                                                    </View>
                                                </View>

                                            </View>


                                        )) : <Text>No booking </Text>
                                }
                            </View>




                    }
                </ScrollView>


            </ImageBackground>
        </View>
    )
}

export default Mybooking;