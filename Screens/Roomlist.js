import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, Image, ScrollView, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity, ActivityIndicator } from "react-native";
import Recomdation from "../components/Topsearch";
import Toproom from "../components/toproom";

const Roomlist = ({ navigation }) => {
    const [room, SetRoom] = useState('')
    const [data, setData] = useState('')
    const [load, setLoad] = useState(null);
    const [show, setShow] = useState(true)
    useEffect(() => {
        AllRoom();
    }, [])
    const AllRoom = async () => {
        let data = await fetch(`https://easy-ser.vercel.app/room/roomlist`);
        data = await data.json();
        SetRoom(data);
        setLoad(false)
    }

    function searching(text) {
        if (text) {
            setData(text)
            setLoad('')
            setShow(false)
        }
        else {
            setShow(true)
        }

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
            setShow(true)
        }
    }
    return (
        <View style={{
            flex: 1,
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
                width: "90%",
                alignSelf: "center",
                backgroundColor: "#fff",
                borderRadius: 10,
                flexDirection: "row",
                marginTop: 10,
                elevation: 20
            }}>
                <TextInput style={{
                    width: "88%",
                    marginLeft: 5,
                }} value={data} onChangeText={(text) => searching(text)} placeholder="Search Pg Near you"></TextInput>
                <View style={{
                    position: "relative",
                    top: 5,
                    right: 10,
                    height: "100%"
                }}>
                    <Icon style={{
                        borderRadius: 10,
                        backgroundColor: "rgba(255, 46, 0, 1)",
                        paddingLeft: 5,
                    }} onPress={search} name="search" size={34} color="#000" />

                </View>
            </View>
            <ScrollView>

                <View>
                    {
                        show ?
                            <>
                                <Recomdation></Recomdation>
                                <Toproom></Toproom>
                            </>
                            : <View>
                                {
                                    load ?
                                        <View style={{
                                            flex: 1, justifyContent: "center",
                                            alignItems: "center",
                                            marginTop: 200
                                        }}>
                                            <ActivityIndicator size={"large"} />
                                        </View> : <ScrollView showsVerticalScrollIndicator={false}>
                                            <View style={{
                                                marginBottom: 100
                                            }}>
                                                {
                                                    room && room.length > 0 ?
                                                        room.slice(0).reverse().map((item, index) => (
                                                            <TouchableOpacity key={index} onPress={() => navigation.navigate('Singleroom', {
                                                                iid: item._id
                                                            })}>

                                                                <View style={{
                                                                    width: "97%",
                                                                    alignSelf: "center",
                                                                    flexDirection: "row",
                                                                    marginTop: 10,
                                                                    backgroundColor: "#fff",
                                                                    padding: 5,
                                                                    alignItems: "center",
                                                                    elevation: 20,
                                                                    borderRadius: 8,
                                                                }} >


                                                                    <View>
                                                                        <Image style={{
                                                                            height: 100,
                                                                            borderRadius: 5
                                                                        }} source={require('../assets/roms4.png')}></Image>

                                                                    </View>

                                                                    <View >
                                                                        <Text style={{ fontSize: 15, color: "black", fontWeight: "500", alignSelf: "center", marginLeft: 5 }}>{item.roomname}..</Text>
                                                                        <Text style={{ fontSize: 12, textAlign: "center" }}>{item.district},{item.state}</Text>
                                                                        <View style={{ flexDirection: "row", alignSelf: "center", marginLeft: 5 }}>
                                                                            <View style={{
                                                                                width: 60,
                                                                                height: 30,
                                                                                backgroundColor: "rgba(217, 217, 217, 1)",
                                                                                flexDirection: "row",
                                                                                alignItems: "center",
                                                                                justifyContent: "center",
                                                                                borderRadius: 5
                                                                            }}>
                                                                                <Icon name={"house"} size={23} color="black"></Icon>
                                                                                <Text style={{ fontSize: 19, marginLeft: 5, color: "black" }}>3</Text>
                                                                            </View>
                                                                            <View style={{
                                                                                width: 65,
                                                                                height: 30,
                                                                                backgroundColor: "rgba(217, 217, 217, 1)",
                                                                                marginLeft: 5,
                                                                                alignItems: "center",
                                                                                justifyContent: "center",
                                                                                borderRadius: 5,
                                                                                padding: 2
                                                                            }}>
                                                                                <Text style={{
                                                                                    fontWeight: "700"
                                                                                }}>Parking</Text>
                                                                            </View>
                                                                            <View style={{
                                                                                width: 60,
                                                                                height: 30,
                                                                                backgroundColor: "rgba(217, 217, 217, 1)",
                                                                                marginLeft: 5,
                                                                                alignItems: "center",
                                                                                justifyContent: "center",
                                                                                borderRadius: 5,
                                                                            }}>
                                                                                <Text style={{
                                                                                    fontWeight: "700"
                                                                                }}>Girls</Text>
                                                                            </View>
                                                                        </View>
                                                                        <Text style={{
                                                                            marginTop: 5,
                                                                            fontWeight: "500",
                                                                            color: "rgba(49, 49, 49, 1)",
                                                                            fontSize: 18,
                                                                            marginLeft: 7
                                                                        }}>Rs <Text style={{ color: "rgba(248, 89, 53, 1)" }}>{item.Fullroomprice}</Text>/Month</Text>

                                                                    </View>


                                                                </View>
                                                            </TouchableOpacity>

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

                            </View>
                    }


                </View>
            </ScrollView>





        </View>
    )
}

export default Roomlist;


// <View key={index}>
//                                                                 <View style={{
//                                                                     height: 250,
//                                                                     margin: 4,
//                                                                     // borderWidth: 2,
//                                                                     borderRadius: 10,
//                                                                 }} >

//                                                                     <Image style={{
//                                                                         height: "100%",
//                                                                         width: "100%",
//                                                                     }} source={require('../assets/rooms.jpg')}></Image>
//                                                                 </View>
//                                                                 <View style={{ flexDirection: "row", justifyContent: "space-between", margin: "2%" }}>
//                                                                     <Text style={{ fontSize: 14, color: "red" }}>Rs {item.Fullroomprice} <Text style={{ fontSize: 10, color: "black" }}>onwards</Text></Text>
//                                                                     <Text style={{ backgroundColor: "red", padding: 4, borderRadius: 5, fontSize: 10, fontWeight: "bold", color: "#fff" }}>{item.Preferred}</Text>
//                                                                 </View>
//                                                                 <Text style={{ fontWeight: "bold", marginTop: -10, marginLeft: 7 }}>{item.roomname} / <Text style={{ color: "red", fontWeight: "400" }}>{item.address}</Text></Text>
//                                                                 <Text style={{ marginLeft: 7, fontWeight: "500" }}>{item.district}<Text style={{ fontWeight: "400" }}> {item.state}</Text></Text>
//                                                                 <Text style={{ width: 390, height: 1, color: "black", borderWidth: 0.5, marginLeft: 8, marginTop: 10 }}></Text>
//                                                                 <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 8, }}>
//                                                                     <View >
//                                                                         <Text>Single room</Text>
//                                                                         <Text style={{ fontWeight: "600" }}>{item.Fullroomprice}</Text>
//                                                                     </View>
//                                                                     <View style={{ marginLeft: "10%" }}>
//                                                                         <Text>Single bed</Text>
//                                                                         <Text style={{ fontWeight: "600" }}>{item.Siglebedprice}</Text>
//                                                                     </View>
//                                                                 </View>
//                                                                 <Text style={{ width: 390, height: 1, color: "black", borderWidth: 0.5, marginLeft: 8, marginTop: 10 }}></Text>
//                                                                 <TouchableOpacity style={{
//                                                                     width: 120,
//                                                                     backgroundColor: "red",
//                                                                     marginLeft: 10,
//                                                                     padding: 8,
//                                                                     marginTop: 10,
//                                                                     borderRadius: 5,
//                                                                     marginBottom: "10%"
//                                                                 }} onPress={() => navigation.navigate('Singleroom', {
//                                                                     iid: item._id
//                                                                 })}><Text style={{ color: "#fff" }}>View details</Text></TouchableOpacity>

//                                                             </View>
