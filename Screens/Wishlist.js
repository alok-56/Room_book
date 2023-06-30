import React, { useState } from "react";
import { View, Text, ImageBackground, ScrollView, Image, Alert, TouchableOpacity, ActivityIndicator, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Modal from 'react-native-modal'
const Wishlist = ({ navigation }) => {

    const [ans, setAns] = useState(false)
    const [answer, setAnswer] = useState()
    const [com, setCom] = useState(false)
    const [sucess, setSucess] = useState(false)
    const [load, setLoad] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [bookingid, setBookingid] = useState('')
    const [complain, setComplain] = useState('')
    const [contact, setContact] = useState(false)

    const complainuser = async () => {
        setLoad(true)
        if (name, email, number, bookingid, complain) {
            let data = await fetch('https://easy-ser.vercel.app/roombooking/complain', {
                method: "post",
                body: JSON.stringify({ email, name, number, bookingid, complain }),
                headers: {
                    'content-type': 'application/json'
                }
            })
            data = await data.json()
            if (data) {
                setLoad(false)
                setAns(false)
                setSucess(true)
                setName('');
                setEmail('');
                setNumber('');
                setBookingid('');
                setComplain('');
            }
            else {
                setLoad(false)
            }
        }
        else {
            Alert.alert("Empty details");
            setLoad(false)
        }

    }

    const contactus = async () => {
        setLoad(true)
        if (name, email, complain) {
            let data = await fetch('https://easy-ser.vercel.app/roombooking/contact', {
                method: "post",
                body: JSON.stringify({ email, name, complain }),
                headers: {
                    'content-type': 'application/json'
                }
            })
            data = await data.json()
            if (data) {
                Alert.alert("Send sucessfully")
                setLoad(false)
                setContact(false)
                setName('');
                setEmail('');
                setComplain('');
            }
            else {
                setLoad(false)
            }
        }
        else {
            Alert.alert("Empty details");
            setLoad(false)
        }

    }


    function set(abb) {
        setAns(true)
        setAnswer(abb)
    }

    function manage() {
        setSucess(false)
        setAns(false)
    }

    const data = [
        {
            question: "Q: Can We get refund after cancellation?",
            answer: "Yes!! You will get rufund of full amount of payment if you cancel your booking within 24 hours."
        },
        {
            question: "Q: Can We get refund after cancellation?",
            answer: "Yes!! You will get rufund of full amount of payment if you cancel your booking within 24 hours."
        },
        {
            question: "Q: Can We get refund after cancellation?",
            answer: "Yes!! You will get rufund of full amount of payment if you cancel your booking within 24 hours."
        },
        {
            question: "Q: Can We get refund after cancellation?",
            answer: "Yes!! You will get rufund of full amount of payment if you cancel your booking within 24 hours."
        },
        {
            question: "Q: Can We get refund after cancellation?",
            answer: "Yes!! You will get rufund of full amount of payment if you cancel your booking within 24 hours."
        },
    ]
    return (
        <View style={{
            flex: 1,
            height: "100%"
        }}>

            <Modal isVisible={sucess}>
                <View style={{ flex: 1, backgroundColor: "#fff", borderRadius: 10 }}>
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
                        <Text style={{
                            fontSize: 25,
                            color: "#000",
                            fontWeight: "600",
                        }}>Success</Text>
                    </View>
                    <View style={{ width: "85%", height: 5, alignSelf: "center", backgroundColor: "rgba(255, 186, 171, 1)", borderRadius: 10 }}>
                    </View>
                    <View style={{
                        height: 200,
                    }}>
                        <ImageBackground style={{ height: "100%", width: "100%", alignSelf: "center" }} source={require('../assets/complain.png')}></ImageBackground>
                        <Text style={{ textAlign: "center", fontSize: 20, marginTop: 50, fontWeight: "600", color: "#000" }}>Your complain has been sent to our team!!!</Text>
                        <Text style={{ fontSize: 13, textAlign: "center", width: "95%", alignSelf: "center" }}>Our team will try to solve your problem ASAP! our team will reach to you soon</Text>

                        <TouchableOpacity style={{
                            width: 200,
                            backgroundColor: "#000",
                            alignSelf: "center",
                            marginTop: 25,
                            padding: 10,
                            borderRadius: 7
                        }} onPress={manage}>
                            <Text style={{
                                color: "#fff",
                                textAlign: "center",
                                fontSize: 15,
                                fontWeight: "500"
                            }}>Done</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </Modal>






            <Modal isVisible={ans}>
                <View style={{ height: 200, backgroundColor: "#fff", borderRadius: 10 }}>
                    <Text style={{
                        fontSize: 17,
                        padding: 5,
                        color: "#000",
                        textAlign: "center",
                        marginTop: 15
                    }}>
                        {answer}
                    </Text>
                    <TouchableOpacity style={{
                        width: 150,
                        backgroundColor: 'red',
                        alignSelf: "center",
                        padding: 5,
                        borderRadius: 7,
                        marginTop: 20
                    }} onPress={() => setAns(false)}>
                        <Text style={{ textAlign: "center", color: "#fff", fontSize: 15 }}>Close</Text>
                    </TouchableOpacity>
                </View>

            </Modal>

            <Modal isVisible={com}>
                <ScrollView>
                    <View style={{ flex: 1, backgroundColor: "#fff", borderRadius: 10, padding: 5 }}>
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
                                right: 30,
                            }}>
                                <Icon onPress={() => setCom(false)} name={"arrow-left"} size={44} color="#000"></Icon>
                            </View>
                            <Text style={{
                                fontSize: 25,
                                color: "#000",
                                fontWeight: "600",
                            }}>Complain Form</Text>
                        </View>
                        <View style={{ width: "85%", height: 5, alignSelf: "center", backgroundColor: "rgba(255, 186, 171, 1)", borderRadius: 10 }}>
                        </View>

                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontSize: 18, marginLeft: 20, fontWeight: "500", color: "#000" }}>
                                Fill your complain form here
                            </Text>
                            <Text style={{ color: "#000", marginTop: 3, marginLeft: 20, fontSize: 12 }}>Our team will try to solve your problem ASAP! our team will reach to you soon</Text>

                            <View>
                                <TextInput style={{
                                    marginLeft: 5,
                                    width: 280,
                                    backgroundColor: "#E0DEDE",
                                    marginTop: 10,
                                    paddingLeft: 15,
                                    fontSize: 15,
                                    borderRadius: 7,
                                    alignSelf: "center"
                                }} placeholder="Full Name" value={name} onChangeText={(text) => setName(text)}></TextInput>
                                <TextInput style={{
                                    marginLeft: 5,
                                    width: 280,
                                    backgroundColor: "#E0DEDE",
                                    marginTop: 10,
                                    paddingLeft: 15,
                                    fontSize: 15,
                                    borderRadius: 7,
                                    alignSelf: "center"
                                }} placeholder="Phone Number " value={number} onChangeText={(text) => setNumber(text)}></TextInput>
                                <TextInput style={{
                                    marginLeft: 5,
                                    width: 280,
                                    backgroundColor: "#E0DEDE",
                                    marginTop: 10,
                                    paddingLeft: 15,
                                    fontSize: 15,
                                    borderRadius: 7,
                                    alignSelf: "center"
                                }} placeholder="Email Id" value={email} onChangeText={(text) => setEmail(text)}></TextInput>
                                <TextInput style={{
                                    marginLeft: 5,
                                    width: 280,
                                    backgroundColor: "#E0DEDE",
                                    marginTop: 10,
                                    paddingLeft: 15,
                                    fontSize: 15,
                                    borderRadius: 7,
                                    alignSelf: "center"
                                }} placeholder="Booking Id" value={bookingid} onChangeText={(text) => setBookingid(text)}></TextInput>
                                <TextInput style={{
                                    marginLeft: 5,
                                    width: 280,
                                    height: 140,
                                    backgroundColor: "#E0DEDE",
                                    marginTop: 10,
                                    paddingLeft: 15,
                                    fontSize: 15,
                                    borderRadius: 7,
                                    alignSelf: "center"
                                }} placeholder="Reason of Complain" value={complain} onChangeText={(text) => setComplain(text)}></TextInput>
                                <TouchableOpacity style={{
                                    width: "80%",
                                    padding: 7,
                                    backgroundColor: "#000",
                                    alignSelf: "center",
                                    marginTop: 10,
                                    borderRadius: 7
                                }} onPress={() => complainuser()}>
                                    {
                                        load ? <ActivityIndicator size={35}></ActivityIndicator> : <Text style={{
                                            color: "#fff",
                                            textAlign: "center",
                                            fontSize: 20,
                                            fontWeight: "bold"
                                        }}>Send Complain</Text>
                                    }

                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </Modal>


            <Modal isVisible={contact}>
                <ScrollView>
                    <View style={{ flex: 1, backgroundColor: "#fff", borderRadius: 10, padding: 5 }}>
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
                                right: 30,
                            }}>
                                <Icon onPress={() => setContact(false)} name={"arrow-left"} size={44} color="#000"></Icon>
                            </View>
                            <Text style={{
                                fontSize: 25,
                                color: "#000",
                                fontWeight: "600",
                            }}>Contact Form</Text>
                        </View>
                        <View style={{ width: "85%", height: 5, alignSelf: "center", backgroundColor: "rgba(255, 186, 171, 1)", borderRadius: 10 }}>
                        </View>

                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontSize: 18, marginLeft: 15, fontWeight: "500", color: "#000" }}>
                                Our teams are here to help you
                            </Text>
                            <Text style={{ color: "#000", marginTop: 3, marginLeft: 15, fontSize: 12 }}>Our team will back to you ASAP!</Text>

                            <View >
                                <TextInput style={{
                                    marginLeft: 5,
                                    width: 280,
                                    backgroundColor: "#E0DEDE",
                                    marginTop: 10,
                                    paddingLeft: 15,
                                    fontSize: 15,
                                    borderRadius: 7,
                                    alignSelf: "center"
                                }} placeholder="Full Name" value={name} onChangeText={(text) => setName(text)}></TextInput>

                                <TextInput style={{
                                    marginLeft: 5,
                                    width: 280,
                                    backgroundColor: "#E0DEDE",
                                    marginTop: 10,
                                    paddingLeft: 15,
                                    fontSize: 15,
                                    borderRadius: 7,
                                    alignSelf: "center"
                                }} placeholder="Email Id" value={email} onChangeText={(text) => setEmail(text)}></TextInput>

                                <TextInput style={{
                                    marginLeft: 5,
                                    width: 280,
                                    height: 140,
                                    backgroundColor: "#E0DEDE",
                                    marginTop: 10,
                                    paddingLeft: 15,
                                    fontSize: 15,
                                    borderRadius: 7,
                                    alignSelf: "center"
                                }} placeholder="Reason of Contact" value={complain} onChangeText={(text) => setComplain(text)}></TextInput>
                                <TouchableOpacity style={{
                                    width: "80%",
                                    padding: 7,
                                    backgroundColor: "#000",
                                    alignSelf: "center",
                                    marginTop: 10,
                                    borderRadius: 7,

                                }} onPress={() => contactus()}>
                                    {
                                        load ? <ActivityIndicator size={35}></ActivityIndicator> : <Text style={{
                                            color: "#fff",
                                            textAlign: "center",
                                            fontSize: 20,
                                            fontWeight: "bold"
                                        }}>Send Us</Text>
                                    }
                                </TouchableOpacity>
                                <Text style={{ fontSize: 12, marginTop: 15, textAlign: 'left' }}>
                                    Customer satisfaction is our top priority!
                                    Our support service is available from 9 Am morning to 5 pm evening.
                                    We assist you with any questions you may have about our App, Refund
                                    policy and Payments, etc.
                                </Text>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </Modal>




            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginBottom: 100 }}>
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
                    <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "500", color: "#000" }}>Help</Text>
                    <View style={{ width: "85%", height: 5, alignSelf: "center", backgroundColor: "rgba(255, 186, 171, 1)", borderRadius: 10 }}>
                    </View>
                    <View style={{ marginLeft: 20, marginTop: 5 }}>
                        <Text style={{ fontSize: 20, color: "#000" }}>Hii</Text>
                        <Text style={{ fontSize: 18, fontWeight: "500", color: "#000" }}>How Can We Help?</Text>
                        <TouchableOpacity style={{
                            width: "90%",
                            backgroundColor: "#000",
                            padding: 2,
                            borderRadius: 7,
                            marginTop: 10,
                            flexDirection: "row", justifyContent: "space-around"
                        }} onPress={() => setCom(true)}>
                            <Text style={{ color: "#fff", marginTop: 10, fontWeight: "500", fontSize: 15 }}>Complain Your issue</Text>
                            <Icon name="arrow-right" size={44} color="#fff"></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: "95%", height: 2, marginTop: 15, alignSelf: "center", backgroundColor: "#000", borderRadius: 10 }}>
                    </View>
                    <Text style={{ marginLeft: 20, fontSize: 20, color: "#000", marginTop: 5, fontWeight: "500" }}>Frequently asked questions</Text>
                    <View style={{ marginLeft: 20, marginTop: 8 }}>
                        {
                            data.map((item, index) => (
                                <TouchableOpacity key={index} style={{
                                    width: "95%",
                                    backgroundColor: "#E0DEDE",
                                    borderRadius: 10,
                                    padding: 10,
                                    marginTop: 5
                                }} onPress={() => set(item.answer)} >
                                    <Text style={{ textAlign: "center", color: "#000" }}>{item.question}</Text>
                                </TouchableOpacity>

                            ))
                        }

                    </View>
                    <View style={{ marginTop: 20, marginLeft: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: "500", color: "#000" }}>Need to get in touch?</Text>
                        <Text style={{
                            fontSize: 15
                        }}>We’ll start with some questions and get you to our team. </Text>
                    </View>
                    <TouchableOpacity style={{
                        width: "80%",
                        padding: 7,
                        backgroundColor: "#000",
                        alignSelf: "center",
                        marginTop: 10,
                        borderRadius: 7
                    }} onPress={() => setContact(true)}>
                        <Text style={{
                            color: "#fff",
                            textAlign: "center",
                            fontSize: 20,
                            fontWeight: "bold"
                        }}>Contact us</Text>
                    </TouchableOpacity>


                </View>


            </ScrollView>



        </View>
    )
}

export default Wishlist;