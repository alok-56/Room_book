import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, ActivityIndicator, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
const Ownerinfo = ({ navigation, route }) => {

    const [ownername, SetOwnername] = useState('');
    const [ownerEmai, setOwnerEmail] = useState('')
    const [ownerNumber, setOwnerNumber] = useState('');
    const [address, setAddress] = useState('');
    const [ownerId, setOwnerId] = useState('');
    const [bookingId, setBookingId] = useState('')
    const [roomid, setRoomid] = useState('')
    const [load, setLoad] = useState(true)

    const { id } = route.params
    useEffect(() => {
        Owenerinfo();
    }, [])

    const Owenerinfo = async () => {
        let data = await fetch(`https://easy-ser.vercel.app/roombooking/bookinglist/${id}`);
        data = await data.json();
        if (data) {
            SetOwnername(data.ownername);
            setOwnerEmail(data.ownerEmail);
            setOwnerNumber(data.ownerNumber);
            setAddress(data.add);
            setOwnerId(data.sellerId);
            setBookingId(data._id);
            setRoomid(data.productId)
            setLoad(false)
        }
    }
    return (
        <View style={{
            flex: 1
        }}>
            {
                load ? <ActivityIndicator style={{
                    marginTop: 200
                }} size={'large'}></ActivityIndicator> :
                    <View>
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
                        <ScrollView>
                            <View style={{ marginBottom: 200 }}>
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
                                    }}>Owner Info</Text>
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: "400" }}>Name</Text>
                                    <Text style={{ marginLeft: 20, fontSize: 18, marginTop: 5, fontWeight: "bold" }}>{ownername}</Text>
                                    <View style={{ width: "90%", height: 1, alignSelf: "center", backgroundColor: "rgba(168, 168, 168, 1)", marginTop: 10 }}>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: "400" }}>Email id</Text>
                                    <Text style={{ marginLeft: 20, fontSize: 18, marginTop: 5, fontWeight: "bold" }}>{ownerEmai}</Text>
                                    <View style={{ width: "90%", height: 1, alignSelf: "center", backgroundColor: "rgba(168, 168, 168, 1)", marginTop: 10 }}>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: "400" }}>Number</Text>
                                    <Text style={{ marginLeft: 20, fontSize: 18, marginTop: 5, fontWeight: "bold" }}>{ownerNumber}</Text>
                                    <View style={{ width: "90%", height: 1, alignSelf: "center", backgroundColor: "rgba(168, 168, 168, 1)", marginTop: 10 }}>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: "400" }}>Address</Text>
                                    <Text style={{ marginLeft: 20, fontSize: 18, marginTop: 5, fontWeight: "bold" }}>{address}</Text>
                                    <View style={{ width: "90%", height: 1, alignSelf: "center", backgroundColor: "rgba(168, 168, 168, 1)", marginTop: 10 }}>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: "400" }}>Owner Id</Text>
                                    <Text style={{ marginLeft: 20, fontSize: 18, marginTop: 5, fontWeight: "bold" }}>{ownerId}</Text>
                                    <View style={{ width: "90%", height: 1, alignSelf: "center", backgroundColor: "rgba(168, 168, 168, 1)", marginTop: 10 }}>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: "400" }}>Room Id</Text>
                                    <Text style={{ marginLeft: 20, fontSize: 18, marginTop: 5, fontWeight: "bold" }}>{roomid}</Text>
                                    <View style={{ width: "90%", height: 1, alignSelf: "center", backgroundColor: "rgba(168, 168, 168, 1)", marginTop: 10 }}>
                                    </View>
                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: "400" }}>Booking Id</Text>
                                    <Text style={{ marginLeft: 20, fontSize: 18, marginTop: 5, fontWeight: "bold" }}>{bookingId}</Text>
                                    <View style={{ width: "90%", height: 1, alignSelf: "center", backgroundColor: "rgba(168, 168, 168, 1)", marginTop: 10 }}>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
            }
            <View style={{ position: "absolute", bottom: 85, flexDirection: "row", alignSelf: "center", }}>

                <TouchableOpacity style={{
                    width: 300,
                    backgroundColor: "rgba(255, 46, 0, 1)",
                    padding: 5,
                    borderRadius: 10,
                    marginLeft: 5
                }} onPress={() => navigation.navigate('map')}>
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 20, fontWeight: "500" }}>Track Location</Text>
                </TouchableOpacity>


            </View>

        </View>
    )
}

export default Ownerinfo




// {
//     load ? <ActivityIndicator style={{
//         marginTop: 200
//     }} size={'large'}></ActivityIndicator> : <View>
//         <View>
//             <Text style={{
//                 textAlign: "center",
//                 fontSize: 40,
//                 marginTop: 100,
//                 color: "red"
//             }}>Owner Info</Text>
//         </View>

//         <View style={{
//             padding: 10
//         }}>
//             <View style={{
//                 flexDirection: "row",
//                 justifyContent: "space-around",
//                 marginTop: 30,
//                 backgroundColor: "#fff",
//                 elevation: 20,
//                 padding: 20,
//             }}>
//                 <View>
//                     <Text>Name</Text>
//                     <Text>Email</Text>
//                     <Text style={{ fontWeight: "bold" }}>Number</Text>
//                     <Text>address</Text>
//                     <Text>Owner id</Text>
//                     <Text>Room id</Text>
//                     <Text style={{
//                         fontWeight: "bold"
//                     }}>Booking id</Text>
//                 </View>
//                 <View>
//                     <View>
//                         <Text>{ownername}</Text>
//                     </View>
//                     <View>
//                         <Text>{ownerEmai}</Text>
//                     </View>
//                     <View>
//                         <Text style={{
//                             fontWeight: "bold"
//                         }}>{ownerNumber}</Text>
//                     </View>
//                     <View>
//                         <Text>{address}</Text>
//                     </View>
//                     <View>
//                         <Text>{ownerId}</Text>
//                     </View>
//                     <View>
//                         <Text>{roomid}</Text>
//                     </View>
//                     <View>
//                         <Text style={{
//                             fontWeight: "bold"
//                         }}>{bookingId}</Text>
//                     </View>


//                 </View>



//             </View>
//         </View>
//         <View style={{
//             flexDirection: "row",
//             justifyContent: "center",
//             marginTop: 30

//         }}>
//             <TouchableOpacity style={{
//                 width: 200,
//                 backgroundColor: "red",
//                 padding: 10,
//                 borderRadius: 10
//             }}><Text style={{
//                 textAlign: "center",
//                 fontWeight: "bold",
//                 color: "#fff"
//             }}>Track Location</Text></TouchableOpacity>


//         </View>

//     </View>
// }
