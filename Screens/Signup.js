import React, { useState } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { View, Text, ImageBackground, ActivityIndicator, TextInput, TouchableOpacity, ToastAndroid } from "react-native";


const Signup = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [load, setLoad] = useState(false)

    const signup = async () => {
        setLoad(true)
        let data = await fetch(`https://easy-ser.vercel.app/Aut/email/${email}`)
        data = await data.json()
        if (data.email) {
            ToastAndroid.show('Already have account', ToastAndroid.SHORT);
            setLoad(false)
            return false
        }
        else {
            setLoad(true)
            let otp = Math.floor(Math.random() * 100000);
            let result = await fetch('https://easy-ser.vercel.app/Aut/verification', {
                method: "post",
                body: JSON.stringify({ email, otp }),
                headers: {
                    'content-type': 'application/json'
                }
            });
            result = await result.json()
            if (result) {
                ToastAndroid.show('OTP SEND', ToastAndroid.SHORT);
                navigation.navigate('Otp', {
                    name, email, number, password, otp
                })
                setLoad(false)
            }
            else {
                setLoad(false)
            }

        }

    }

    return (
        <View style={{ flex: 1, }}>
            <View style={{ flex: 1, height: "100%", width: "100%" }}>
                <ImageBackground style={{
                    height: "100%"
                }} source={require('../assets/bac1.png')}>
                    <View style={{
                        marginTop: 60
                    }}>
                        <View style={{
                            marginLeft: 40
                        }}>
                            <Icon style={{
                                marginBottom: 10
                            }} name="close" size={30} color="black" />
                            <Text style={{
                                fontSize: 23
                            }}>Sign up to Easy Peasy </Text>
                        </View>
                        <View style={{
                            marginTop: 20,
                            justifyContent: "center",
                            alignItems: "center",

                        }}>
                            <TextInput style={{
                                borderWidth: 1, width: 330,
                                padding: 10,
                                borderRadius: 10,
                                borderColor: "rgba(51, 176, 246, 1)"
                            }} placeholder="Enter Name " value={name} onChangeText={(text) => setName(text)} ></TextInput>
                            <TextInput style={{
                                borderWidth: 1, width: 330,
                                padding: 10,
                                borderRadius: 10,
                                marginTop: 10,
                                borderColor: "rgba(51, 176, 246, 1)"
                            }} placeholder="Enter Number " value={number} onChangeText={(text) => setNumber(text)} ></TextInput>
                            <TextInput style={{
                                borderWidth: 1, width: 330,
                                padding: 10,
                                borderRadius: 10,
                                marginTop: 10,
                                borderColor: "rgba(51, 176, 246, 1)"
                            }} placeholder="Enter Email" value={email} onChangeText={(text) => setEmail(text)} ></TextInput>
                            <TextInput style={{
                                borderWidth: 1, width: 330,
                                padding: 10,
                                borderRadius: 10,
                                marginTop: 10,
                                borderColor: "rgba(51, 176, 246, 1)"
                            }} placeholder="Email Password " value={password} onChangeText={(text) => setPassword(text)} ></TextInput>
                            <TouchableOpacity style={{
                                width: 330,
                                backgroundColor: "rgba(226, 62, 87, 1)",
                                padding: 14,
                                borderRadius: 5,
                                marginTop: 14,

                            }} >
                                {
                                    load ? <ActivityIndicator size={"large"} /> : <Text style={{
                                        fontWeight: "500",
                                        fontSize: 20,
                                        textAlign: "center",
                                        color:"#fff"
                                    }} onPress={() => signup()
                                    }>Sign up </Text>
                                }

                            </TouchableOpacity>
                            <View style={{
                                width: "100%",
                                marginTop: 10
                            }}>
                                <Text style={{ textAlign: "center", fontSize: 20, marginTop: 1 }}>or</Text>
                            </View>
                            <TouchableOpacity style={{
                                width: 330,
                                backgroundColor: "rgba(226, 62, 87, 1)",
                                padding: 14,
                                borderRadius: 5,
                                marginTop: 14,

                            }} ><Text style={{
                                fontWeight: "500",
                                fontSize: 20,
                                textAlign: "center",
                                color:"#fff",
                                fontWeight:"bold"
                            }} onPress={() => navigation.navigate('Login')}>Sign in </Text></TouchableOpacity>

                        </View>

                    </View>

                </ImageBackground>
            </View>

        </View>
    )
}

export default Signup;