import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, ScrollView, Modal, TouchableOpacity, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'


const Transition = ({ navigation, route }) => {

    const id = route.params;
    const [load, setLoad] = useState(true)
    const [data, setData] = useState('')
    useEffect(() => {
        getbook()
    }, [])

    const getbook = async () => {
        let data = await fetch(`https://easy-ser.vercel.app/roombooking/userbookinglist/${id}`);
        data = await data.json();
        setData(data);
        setLoad(false)
    }


    return (
        <View style={{
            flex: 1
        }}>
            <ImageBackground style={{
                height: "100%",
                width: "100%"
            }} source={require('../assets/bac1.png')}>
                <View style={{
                    flexDirection: "row", marginTop: 30,
                    marginLeft: 30
                }}>
                    <Text style={{ marginTop: 7 }}><Icon onPress={() => navigation.goBack()} name="close" size={30} color="black" /></Text>
                    <Text style={{ fontSize: 30, marginLeft: 20 }}>Transition</Text>
                </View>
                {
                    load ? <ActivityIndicator style={{
                        marginTop: "50%"
                    }} size={"large"} /> : <ScrollView>
                        <View style={{
                            padding: 10,
                            marginBottom: 200
                        }}>
                            {
                                data && data.length > 0 ?
                                    data.slice(0).map((item,index) => (
                                        <View style={{
                                            borderWidth: 1,
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            padding: 10,
                                            marginTop: 5
                                        }} key={index}>
                                            <View>
                                                <Text>{item.roomname}, {item.state}, {item.district}</Text>
                                                <Text>Booking id : <Text style={{
                                                    fontWeight: "bold",
                                                    fontSize: 12
                                                }}>{item._id}</Text></Text>
                                                <Text>Owner id : {item.sellerId}</Text>
                                                <View style={{
                                                    width: 200,
                                                    marginTop: 10
                                                }}>
                                                    <TouchableOpacity style={{
                                                        width: 200,
                                                        backgroundColor: "red",
                                                        padding: 10,
                                                        borderRadius: 10
                                                    }}>
                                                        <Text style={{
                                                            color: "#fff",
                                                            fontWeight: "bold",
                                                            textAlign: "center"
                                                        }}>{item.transitionId[0]}</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View>
                                                <Text>date :  {new Date(item.date).getDate()}/{new Date(item.date).getMonth() + 1}/{new Date(item.date).getFullYear()} </Text>
                                                <Text>Amount : {item.price}</Text>
                                                <Text>Status : <Text style={{ color: "red" }}>{item.status}</Text></Text>
                                            </View>
                                        </View>

                                    )) : <Text>No Transition history</Text>
                            }



                        </View>



                    </ScrollView>

                }

            </ImageBackground>

        </View>
    )
}

export default Transition;





