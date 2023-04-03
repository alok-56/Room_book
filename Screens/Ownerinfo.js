import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
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
                    marginTop:200
                }} size={'large'}></ActivityIndicator> : <View>
                    <View>
                        <Text style={{
                            textAlign: "center",
                            fontSize: 40,
                            marginTop: 100,
                            color: "red"
                        }}>Owner Info</Text>
                    </View>

                    <View style={{
                        padding: 10
                    }}>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                            marginTop: 30,
                            backgroundColor: "#fff",
                            elevation: 20,
                            padding: 20,
                        }}>
                            <View>
                                <Text>Name</Text>
                                <Text>Email</Text>
                                <Text style={{ fontWeight: "bold" }}>Number</Text>
                                <Text>address</Text>
                                <Text>Owner id</Text>
                                <Text>Room id</Text>
                                <Text style={{
                                    fontWeight: "bold"
                                }}>Booking id</Text>
                            </View>
                            <View>
                                <View>
                                    <Text>{ownername}</Text>
                                </View>
                                <View>
                                    <Text>{ownerEmai}</Text>
                                </View>
                                <View>
                                    <Text style={{
                                        fontWeight: "bold"
                                    }}>{ownerNumber}</Text>
                                </View>
                                <View>
                                    <Text>{address}</Text>
                                </View>
                                <View>
                                    <Text>{ownerId}</Text>
                                </View>
                                <View>
                                    <Text>{roomid}</Text>
                                </View>
                                <View>
                                    <Text style={{
                                        fontWeight: "bold"
                                    }}>{bookingId}</Text>
                                </View>


                            </View>



                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        marginTop: 30

                    }}>
                        <TouchableOpacity style={{
                            width: 200,
                            backgroundColor: "red",
                            padding: 10,
                            borderRadius: 10
                        }}><Text style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            color: "#fff"
                        }}>Track Location</Text></TouchableOpacity>


                    </View>

                </View>
            }


        </View>
    )
}

export default Ownerinfo