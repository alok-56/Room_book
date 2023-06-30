import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, ScrollView, Modal, Image, TouchableOpacity, ActivityIndicator } from "react-native";
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
                }}>Transaction</Text>
            </View>

            <View style={{ width: "85%", height: 5, alignSelf: "center", backgroundColor: "rgba(255, 186, 171, 1)", borderRadius: 10 }}>
            </View>

            {
                load ? <ActivityIndicator style={{
                    marginTop: "50%"
                }} size={"large"} /> : <ScrollView>
                    <View style={{
                        padding: 10,
                        marginBottom: 100
                    }}>
                        {

                            data && data.length > 0 ?
                                data.slice(0).map((item, index) => (
                                    <View key={index} style={{
                                        width: "90%",
                                        backgroundColor: "#fff",
                                        elevation: 20,
                                        alignSelf: "center",
                                        padding: 8,
                                        marginTop: 10,
                                        borderRadius: 7,
                                        padding: 10
                                    }}>
                                        <View style={{
                                            flexDirection: "row",
                                            justifyContent: "space-evenly"
                                        }}>
                                            <Text style={{ fontSize: 15, fontWeight: "600" }}>Name</Text>
                                            <Text style={{ marginLeft: 30, fontSize: 15, fontWeight: "800" }}>{item.name}</Text>
                                        </View>
                                        <View style={{ width: "95%", alignSelf: "center", height: 1, backgroundColor: "rgba(168, 168, 168, 1)", marginTop: 8 }}>
                                        </View>

                                        <View style={{
                                            flexDirection: "row",
                                            justifyContent: "space-evenly"
                                        }}>
                                            <Text style={{ fontSize: 15, fontWeight: "600" }}>Transaction id</Text>
                                            <Text style={{ marginLeft: 30, fontSize: 12, fontWeight: "800" }}>{item.transitionId[0]}</Text>
                                        </View>
                                        <View style={{ width: "95%", alignSelf: "center", height: 1, backgroundColor: "rgba(168, 168, 168, 1)", marginTop: 8 }}>
                                        </View>

                                        <View style={{
                                            flexDirection: "row",
                                            justifyContent: "space-evenly"
                                        }}>
                                            <Text style={{ fontSize: 12, fontWeight: "600" }}>Booking id</Text>
                                            <Text style={{ marginLeft: 30, fontSize: 10, fontWeight: "800" }}>{item._id}</Text>
                                        </View>
                                        <View style={{ width: "95%", alignSelf: "center", height: 1, backgroundColor: "rgba(168, 168, 168, 1)", marginTop: 8 }}>
                                        </View>
                                        <View style={{
                                            flexDirection: "row",
                                            justifyContent: "space-evenly"
                                        }}>
                                            <Text style={{ fontSize: 12, fontWeight: "600" }}>Owner Id</Text>
                                            <Text style={{ marginLeft: 30, fontSize: 10, fontWeight: "800" }}>{item.sellerId}</Text>
                                        </View>
                                        <View style={{ width: "95%", alignSelf: "center", height: 1, backgroundColor: "rgba(168, 168, 168, 1)", marginTop: 8 }}>
                                        </View>
                                        <View style={{
                                            flexDirection: "row",
                                            justifyContent: "space-evenly"
                                        }}>
                                            <Text style={{ fontSize: 15, fontWeight: "600" }}>Date</Text>
                                            <Text style={{ marginLeft: 30, fontSize: 15, fontWeight: "800" }}>{new Date(item.date).getDate()}/{new Date(item.date).getMonth() + 1}/{new Date(item.date).getFullYear()}</Text>
                                        </View>
                                        <View style={{ width: "95%", alignSelf: "center", height: 1, backgroundColor: "rgba(168, 168, 168, 1)", marginTop: 8 }}>
                                        </View>
                                        <View style={{
                                            flexDirection: "row",
                                            justifyContent: "space-evenly"
                                        }}>
                                            <Text style={{ fontSize: 15, fontWeight: "600" }}>Amount</Text>
                                            <Text style={{ marginLeft: 30, fontSize: 15, color: "rgba(4, 223, 0, 1)", fontWeight: "800" }}>{item.price}</Text>
                                        </View>
                                        <View style={{ width: "95%", alignSelf: "center", height: 1, backgroundColor: "rgba(168, 168, 168, 1)", marginTop: 8 }}>
                                        </View>

                                        <TouchableOpacity style={{
                                            width: 130,
                                            backgroundColor: "rgba(45, 142, 254, 1)",
                                            padding: 5,
                                            borderRadius: 7,
                                            alignSelf: "center",
                                            marginTop: 10
                                        }}>
                                            <Text style={{
                                                textAlign: "center",
                                                color: "#fff",
                                                fontSize: 20,
                                                fontWeight: "500"
                                            }}>Paid</Text>
                                        </TouchableOpacity>
                                    </View>
                                )) : <Text>No Transition history</Text>

                        }

                    </View>
                </ScrollView>

            }




        </View >
    )
}

export default Transition;








// {
//     load ? <ActivityIndicator style={{
//         marginTop: "50%"
//     }} size={"large"} /> : <ScrollView>
//         <View style={{
//             padding: 10,
//             marginBottom: 200
//         }}>
//             {
//                 data && data.length > 0 ?
//                     data.slice(0).map((item, index) => (
//                         <View style={{
//                             borderWidth: 1,
//                             flexDirection: "row",
//                             justifyContent: "space-between",
//                             padding: 10,
//                             marginTop: 5
//                         }} key={index}>
//                             <View>
//                                 <Text>{item.roomname}, {item.state}, {item.district}</Text>
//                                 <Text>Booking id : <Text style={{
//                                     fontWeight: "bold",
//                                     fontSize: 12
//                                 }}>{item._id}</Text></Text>
//                                 <Text>Owner id : {item.sellerId}</Text>
//                                 <View style={{
//                                     width: 200,
//                                     marginTop: 10
//                                 }}>
//                                     <TouchableOpacity style={{
//                                         width: 200,
//                                         backgroundColor: "red",
//                                         padding: 10,
//                                         borderRadius: 10
//                                     }}>
//                                         <Text style={{
//                                             color: "#fff",
//                                             fontWeight: "bold",
//                                             textAlign: "center"
//                                         }}>{item.transitionId[0]}</Text>
//                                     </TouchableOpacity>
//                                 </View>
//                             </View>
//                             <View>
//                                 <Text>date :  {new Date(item.date).getDate()}/{new Date(item.date).getMonth() + 1}/{new Date(item.date).getFullYear()} </Text>
//                                 <Text>Amount : {item.price}</Text>
//                                 <Text>Status : <Text style={{ color: "red" }}>{item.status}</Text></Text>
//                             </View>
//                         </View>

//                     )) : <Text>No Transition history</Text>
//             }



//         </View>



//     </ScrollView>

// }








