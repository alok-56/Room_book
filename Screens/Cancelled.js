import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { ScrollView, ActivityIndicator } from "react-native";
import { ImageBackground, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

const Cancelled = ({ navigation, route }) => {
    const [cancel, SetCancel] = useState('')
    const [status, setStatus] = useState()
    const [loads, setLoads] = useState(true);
    const id = route.params;
    useEffect(() => {
        CancelBook();
    }, [])
    const CancelBook = async () => {
        let data = await fetch(`https://easy-ser.vercel.app/roombooking/cancelbooking/${id}`)
        data = await data.json();
        SetCancel(data.data)
        setLoads(false)
        console.log(data)

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
                    <Text style={{ marginTop: 1, fontWeight: "bold" }}><Icon onPress={()=>navigation.goBack()} name="close" size={40} color="black" /></Text>
                    <Text style={{ fontSize: 25, marginLeft: 10 }}>Cancelled Rooms</Text>
                </View>
                <ScrollView>

                    {
                        loads ? <View style={{
                            marginTop: 200
                        }}><ActivityIndicator size={"large"}></ActivityIndicator></View> :
                            <View style={{ padding: 10, marginBottom: 100 }}>
                                {
                                    cancel && cancel.length > 0 ?
                                        cancel.slice(0).reverse().map((item,index) => (
                                            <View style={{ marginTop: 5, borderWidth: 1, padding: 5 }} key={index}>
                                                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                                    <View>
                                                        <Image style={{
                                                            height: 100,
                                                            width: 100
                                                        }} source={require('../assets/cat1.png')}></Image>
                                                    </View>
                                                    <View style={{ marginTop: 1 }}>
                                                        <Text style={{
                                                            fontSize: 12
                                                        }}>{item.name}, {item.address}, {item.district}</Text>
                                                        <Text style={{
                                                            fontSize: 10
                                                        }}>Booking id : {item._id}</Text>
                                                        <Text style={{
                                                            fontSize: 12
                                                        }}>Cancelled on : {new Date(item.canceldate).getDate()}/{new Date(item.canceldate).getMonth() + 1}/{new Date(item.canceldate).getFullYear()} </Text>
                                                        <Text><Text style={{ color: "red", fontWeight: "bold" }}>Paid total :</Text> {item.price}</Text>
                                                        <Text>Status : <Text style={{ color: "red", fontWeight: "800" }}>{item.status}</Text></Text>
                                                    </View>
                                                </View>
                                            </View>
                                        )) : <Text>Not yet cancelled</Text>
                                }


                            </View>
                    }

                </ScrollView>


            </ImageBackground>
        </View>
    )
}

export default Cancelled;