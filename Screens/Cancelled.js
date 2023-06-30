import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { ScrollView, ActivityIndicator } from "react-native";
import { ImageBackground, Image, TouchableOpacity } from "react-native";
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
                }} >
                    <Icon onPress={() => navigation.goBack()} name={"arrow-left"} size={44} color="#000"></Icon>
                </View>
                <Text style={{
                    fontSize: 25,
                    color: "#000",
                    fontWeight: "600",
                }}>Cancelled</Text>
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
                                cancel && cancel.length > 0 ?
                                    cancel.slice(0).reverse().map((item, index) => (
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
                                                    }}>Cancelled on :  {new Date(item.canceldate).getDate()}/{new Date(item.canceldate).getMonth() + 1}/{new Date(item.canceldate).getFullYear()}</Text>
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
                                        </View>

                                    )) : <Text>Not yet cancelled</Text>
                            }

                        </ScrollView>





                    </View>
            }





        </View>
    )
}

export default Cancelled;




// <View style={{
//     flexDirection: "row", marginTop: 50,
//     marginLeft: 20
// }}>
//     <Text style={{ marginTop: 1, fontWeight: "bold" }}><Icon onPress={() => navigation.goBack()} name="close" size={40} color="black" /></Text>
//     <Text style={{ fontSize: 25, marginLeft: 10 }}>Cancelled Rooms</Text>
// </View>
// <ScrollView>

//     {
//         loads ? <View style={{
//             marginTop: 200
//         }}><ActivityIndicator size={"large"}></ActivityIndicator></View> :
//             <View style={{ padding: 10, marginBottom: 100 }}>
//                 {
//                     cancel && cancel.length > 0 ?
//                         cancel.slice(0).reverse().map((item, index) => (
//                             <View style={{ marginTop: 5, borderWidth: 1, padding: 5 }} key={index}>
//                                 <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
//                                     <View>
//                                         <Image style={{
//                                             height: 100,
//                                             width: 100
//                                         }} source={require('../assets/cat1.png')}></Image>
//                                     </View>
//                                     <View style={{ marginTop: 1 }}>
//                                         <Text style={{
//                                             fontSize: 12
//                                         }}>{item.name}, {item.address}, {item.district}</Text>
//                                         <Text style={{
//                                             fontSize: 10
//                                         }}>Booking id : {item._id}</Text>
//                                         <Text style={{
//                                             fontSize: 12
//                                         }}>Cancelled on : {new Date(item.canceldate).getDate()}/{new Date(item.canceldate).getMonth() + 1}/{new Date(item.canceldate).getFullYear()} </Text>
//                                         <Text><Text style={{ color: "red", fontWeight: "bold" }}>Paid total :</Text> {item.price}</Text>
//                                         <Text>Status : <Text style={{ color: "red", fontWeight: "800" }}>{item.status}</Text></Text>
//                                     </View>
//                                 </View>
//                             </View>
//                         )) : <Text>Not yet cancelled</Text>
//                 }


//             </View>
//     }

// </ScrollView>