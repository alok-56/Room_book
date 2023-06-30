import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator, Image, ScrollView } from 'react-native';
const Refund = ({ navigation, route }) => {

    const { id } = route.params;
    const [refundid, setRefundid] = useState('')
    const [paymentid, setPaymentid] = useState('')
    const [price, setPrice] = useState('')
    const [status, setStatus] = useState('');
    const [load, setLoad] = useState(true)

    useEffect(() => {
        getBook();
    }, [])

    const getBook = async () => {
        let data = await fetch(`https://easy-ser.vercel.app/roombooking/bookinglist/${id}`)
        data = await data.json()
        if (data) {
            refundStatus(data.refundid, data.transitionId[data.transitionId.length - 1])
        }

    }
    const refundStatus = async (id, pay) => {
        let data = await fetch(`https://easy-ser.vercel.app/payment/fetchrefund`, {
            method: "post",
            body: JSON.stringify({ id, pay }),
            headers: {
                "content-type": "application/json"
            }
        })
        data = await data.json();
        if (data) {
            setRefundid(data.id);
            setPaymentid(data.payment_id)
            setPrice(data.amount);
            setStatus(data.status);
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

                        <View>
                            <Text style={{ fontSize: 20, fontWeight: "500", marginLeft: 20, color: "rgba(0, 118, 255, 1)" }}>Refund Details</Text>
                            <View style={{ width: "90%", height: 5, alignSelf: "center", backgroundColor: "rgba(255, 46, 0, 1)", marginTop: 8 }}>
                            </View>
                            <View style={{ marginTop: 15 }}>
                                <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: "400" }}>Refund Id</Text>
                                <Text style={{ marginLeft: 20, fontSize: 18, marginTop: 5, fontWeight: "bold" }}>{refundid}</Text>
                                <View style={{ width: "90%", height: 1, alignSelf: "center", backgroundColor: "rgba(168, 168, 168, 1)", marginTop: 10 }}>
                                </View>
                            </View>

                            <View style={{ marginTop: 5 }}>
                                <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: "400" }}>Payment Id</Text>
                                <Text style={{ marginLeft: 20, fontSize: 18, marginTop: 5, fontWeight: "bold" }}>{paymentid}</Text>
                                <View style={{ width: "90%", height: 1, alignSelf: "center", backgroundColor: "rgba(168, 168, 168, 1)", marginTop: 10 }}>
                                </View>
                            </View>

                            <View style={{ marginTop: 5 }}>
                                <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: "400" }}>Booking Id</Text>
                                <Text style={{ marginLeft: 20, fontSize: 18, marginTop: 5, fontWeight: "bold" }}>{id}</Text>
                                <View style={{ width: "90%", height: 1, alignSelf: "center", backgroundColor: "rgba(168, 168, 168, 1)", marginTop: 10 }}>
                                </View>
                            </View>

                            <View style={{ marginTop: 5 }}>
                                <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: "400" }}>price</Text>
                                <Text style={{ marginLeft: 20, fontSize: 18, marginTop: 5, fontWeight: "bold" }}>{price}</Text>
                                <View style={{ width: "90%", height: 1, alignSelf: "center", backgroundColor: "rgba(168, 168, 168, 1)", marginTop: 10 }}>
                                </View>
                            </View>


                            <View style={{ marginTop: 5 }}>
                                <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: "400" }}>Status</Text>
                                <Text style={{ marginLeft: 20, fontSize: 18, marginTop: 5, fontWeight: "bold", color: "red" }}>{status}</Text>
                                <View style={{ width: "90%", height: 1, alignSelf: "center", backgroundColor: "rgba(168, 168, 168, 1)", marginTop: 10 }}>
                                </View>
                            </View>
                        </View>


                    </View>
            }

        </View>

    )
}

export default Refund;




// <View style={{
//     flex: 1,
//     marginTop: "30%",
//     padding: 10
// }}>
//     <Text style={{
//         fontSize: 30,
//         color: "red",
//         marginBottom: 30,
//         fontWeight: "bold"
//     }}>Refund Status</Text>
//     {
//         load ? <ActivityIndicator style={{
//             marginTop: 100
//         }} size={"large"}></ActivityIndicator> : <View style={{
//             backgroundColor: "#fff",
//             elevation: 20,
//             width: "100%",
//             padding: 30,
//         }}>
//             <View>
//                 <Text style={{


//                 }}>Refund id : {refundid}</Text>
//                 <Text>Payment id : {paymentid}</Text>
//                 <Text>Booking id : {id}</Text>
//             </View>
//             <View>
//                 <Text>Amount : {price}</Text>
//                 <Text style={{
//                     fontWeight: "bold",
//                     fontSize: 20
//                 }}>Status : <Text style={{
//                     color: "red"
//                 }}>{status}</Text></Text>
//             </View>
//         </View>
//     }

// </View>