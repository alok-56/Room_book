import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, Image, ScrollView, TextInput } from "react-native";
// import { TextInput } from "react-native";
// import { EvilIcons } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity, ActivityIndicator } from "react-native";

const Roomlist = ({ navigation }) => {
    const [room, SetRoom] = useState('')
    const [data, setData] = useState('')
    const [load, setLoad] = useState(true)
    useEffect(() => {
        AllRoom();
    }, [])
    const AllRoom = async () => {
        let data = await fetch(`https://easy-ser.vercel.app/room/roomlist`);
        data = await data.json();
        SetRoom(data);
        setLoad(false)
    }
    const search = async () => {
        setLoad(true)
        let dat = data;
        dat = dat.toLowerCase();
        if (data) {
            let result = await fetch(`https://easy-ser.vercel.app/room/searchroom/${dat}`);
            result = await result.json();
            if (result) {
                SetRoom(result)
                setLoad(false)
                setData('')
            }
        }
        else {
            AllRoom()
        }
    }
    return (
        <View style={{
            flex: 1,
        }}>
            <ImageBackground style={{
                width: "100%",
                height: "100%"
            }} source={require('../assets/bac1.png')}>
                <View style={{
                    marginTop: 50,
                    backgroundColor: "#fff",
                    padding: 5,
                    margin: 10,
                    borderRadius: 10,
                    flexDirection: "row",
                }}>
                    <TextInput style={{
                        width: "88%",
                        marginLeft: 5

                    }} value={data} onChangeText={(text) => setData(text)} placeholder="Search Pg Near you"></TextInput>
                    <Icon style={{
                        marginTop: 8,
                        backgroundColor: "red",
                        borderRadius: 10,
                        marginBottom: 5,
                        padding: 3
                    }} onPress={search} name="search" size={34} color="#fff" />
                </View>
                {
                    load ?
                        <View style={{
                            flex: 1, justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <ActivityIndicator size={"large"} />
                        </View> : <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{
                                marginBottom: 100
                            }}>
                                {
                                    room && room.length > 0 ?
                                        room.slice(0).reverse().map((item, index) => (
                                            <View key={index}>
                                                <View style={{
                                                    height: 250,
                                                    margin: 4,
                                                    // borderWidth: 2,
                                                    borderRadius: 10,
                                                }} >

                                                    <Image style={{
                                                        height: "100%",
                                                        width: "100%",
                                                    }} source={require('../assets/rooms.jpg')}></Image>
                                                </View>
                                                <View style={{ flexDirection: "row", justifyContent: "space-between", margin: "2%" }}>
                                                    <Text style={{ fontSize: 14, color: "red" }}>Rs {item.Fullroomprice} <Text style={{ fontSize: 10, color: "black" }}>onwards</Text></Text>
                                                    <Text style={{ backgroundColor: "red", padding: 4, borderRadius: 5, fontSize: 10, fontWeight: "bold", color: "#fff" }}>{item.Preferred}</Text>
                                                </View>
                                                <Text style={{ fontWeight: "bold", marginTop: -10, marginLeft: 7 }}>{item.roomname} / <Text style={{ color: "red", fontWeight: "400" }}>{item.address}</Text></Text>
                                                <Text style={{ marginLeft: 7, fontWeight: "500" }}>{item.district}<Text style={{ fontWeight: "400" }}> {item.state}</Text></Text>
                                                <Text style={{ width: 390, height: 1, color: "black", borderWidth: 0.5, marginLeft: 8, marginTop: 10 }}></Text>
                                                <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 8, }}>
                                                    <View >
                                                        <Text>Single room</Text>
                                                        <Text style={{ fontWeight: "600" }}>{item.Fullroomprice}</Text>
                                                    </View>
                                                    <View style={{ marginLeft: "10%" }}>
                                                        <Text>Single bed</Text>
                                                        <Text style={{ fontWeight: "600" }}>{item.Siglebedprice}</Text>
                                                    </View>
                                                </View>
                                                <Text style={{ width: 390, height: 1, color: "black", borderWidth: 0.5, marginLeft: 8, marginTop: 10 }}></Text>
                                                <TouchableOpacity style={{
                                                    width: 120,
                                                    backgroundColor: "red",
                                                    marginLeft: 10,
                                                    padding: 8,
                                                    marginTop: 10,
                                                    borderRadius: 5,
                                                    marginBottom: "10%"
                                                }} onPress={() => navigation.navigate('Singleroom', {
                                                    iid: item._id
                                                })}><Text style={{ color: "#fff" }}>View details</Text></TouchableOpacity>

                                            </View>

                                        )) : <View style={{
                                            marginLeft: 40
                                        }}>
                                            <Text style={{
                                                fontSize: 20,
                                                fontWeight: "bold"
                                            }}>No Room Found</Text>
                                        </View>
                                }

                            </View>

                        </ScrollView>
                }







            </ImageBackground>

        </View>
    )
}

export default Roomlist;