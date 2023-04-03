import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native';
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
            <View style={{
                flex: 1,
                marginTop: "30%",
                padding: 10
            }}>
                <Text style={{
                    fontSize: 30,
                    color: "red",
                    marginBottom: 30,
                    fontWeight: "bold"
                }}>Refund Status</Text>
                {
                    load ? <ActivityIndicator style={{
                        marginTop: 100
                    }} size={"large"}></ActivityIndicator> : <View style={{
                        backgroundColor: "#fff",
                        elevation: 20,
                        width: "100%",
                        padding: 30,
                    }}>
                        <View>
                            <Text style={{


                            }}>Refund id : {refundid}</Text>
                            <Text>Payment id : {paymentid}</Text>
                            <Text>Booking id : {id}</Text>
                        </View>
                        <View>
                            <Text>Amount : {price}</Text>
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 20
                            }}>Status : <Text style={{
                                color: "red"
                            }}>{status}</Text></Text>
                        </View>
                    </View>
                }

            </View>
        </View>

    )
}

export default Refund;