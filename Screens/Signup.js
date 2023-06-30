import React, { useState } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { View, Text, Image, ImageBackground, ActivityIndicator, TextInput, TouchableOpacity, ToastAndroid, ScrollView } from "react-native";



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
            <ScrollView>
                <View style={{
                    marginTop: 30,
                }}>
                    <Text style={{
                        textAlign: "center", color: "black", fontSize: 23,
                        fontWeight: "bold"
                    }}>Create an account</Text>
                    <View style={{
                        alignSelf: "center", width: 70, height: 70, borderRadius: 50,
                        marginTop: 20
                    }}>
                        <Image style={{
                            width: 70, height: 70
                        }} source={require('../assets/icon.jpg')}></Image>
                    </View>
                    <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 30 }}>
                        <Icon name="facebook" size={35} color="blue"></Icon>
                        <Text style={{
                            marginTop: 35,
                            marginLeft: 10,
                            fontSize: 20
                        }}>Or</Text>
                        <Icon style={{
                            marginLeft: 10
                        }} name="mail" size={35} color="red"></Icon>
                    </View>
                    <View style={{
                        alignSelf: "center",
                        marginTop: 25
                    }}>
                        <TextInput style={{
                            borderWidth: 1, width: 330,
                            padding: 8,
                            borderRadius: 7,
                            borderColor: "black"
                        }} placeholder="Enter Name " value={name} onChangeText={(text) => setName(text)} ></TextInput>
                        <TextInput style={{
                            borderWidth: 1, width: 330,
                            padding: 8,
                            borderRadius: 7,
                            marginTop: 10,
                            borderColor: "black"
                        }} placeholder="Enter Number " value={number} onChangeText={(text) => setNumber(text)} ></TextInput>
                        <TextInput style={{
                            borderWidth: 1, width: 330,
                            padding: 8,
                            borderRadius: 7,
                            marginTop: 10,
                            borderColor: "black"
                        }} placeholder="Enter Email" value={email} onChangeText={(text) => setEmail(text)} ></TextInput>
                        <TextInput style={{
                            borderWidth: 1, width: 330,
                            padding: 8,
                            borderRadius: 7,
                            marginTop: 10,
                            borderColor: "black"
                        }} placeholder="Email Password " value={password} onChangeText={(text) => setPassword(text)} ></TextInput>
                        <TouchableOpacity style={{
                            width: 330,
                            backgroundColor: "rgba(31, 31, 31, 1)",
                            padding: 10,
                            borderRadius: 5,
                            marginTop: 14,

                        }} >
                            {
                                load ? <ActivityIndicator size={"large"} /> : <Text style={{
                                    fontWeight: "500",
                                    fontSize: 20,
                                    textAlign: "center",
                                    color: "#fff"
                                }} onPress={() => signup()
                                }>Next </Text>
                            }

                        </TouchableOpacity>
                    </View>
                    <View style={{
                        marginTop: 40,
                        alignSelf: "center",
                    }}>
                        <Text>Already Have a account? <Text style={{
                            color: "rgba(45, 142, 254, 1)",
                            fontSize: 18,
                            fontWeight: "bold"
                        }} onPress={() => navigation.navigate('Login')}>Login</Text></Text>
                    </View>
                    <View style={{
                        marginTop: 10,
                        alignSelf: "center",
                        width: 250
                    }}>
                        <Text style={{
                            textAlign: "center",
                        }}>By signing up, you agree to our
                            Terms, <Text style={{ fontWeight: "bold", color: "black" }}>Data Policy and Cookies Policy.</Text></Text>
                    </View>
                </View>

            </ScrollView>

        </View>
    )
}



export default Signup;



// <TextInput style={{
//     borderWidth: 1, width: 330,
//     padding: 10,
//     borderRadius: 10,
//     borderColor: "rgba(51, 176, 246, 1)"
// }} placeholder="Enter Name " value={name} onChangeText={(text) => setName(text)} ></TextInput>
// <TextInput style={{
//     borderWidth: 1, width: 330,
//     padding: 10,
//     borderRadius: 10,
//     marginTop: 10,
//     borderColor: "rgba(51, 176, 246, 1)"
// }} placeholder="Enter Number " value={number} onChangeText={(text) => setNumber(text)} ></TextInput>
// <TextInput style={{
//     borderWidth: 1, width: 330,
//     padding: 10,
//     borderRadius: 10,
//     marginTop: 10,
//     borderColor: "rgba(51, 176, 246, 1)"
// }} placeholder="Enter Email" value={email} onChangeText={(text) => setEmail(text)} ></TextInput>
// <TextInput style={{
//     borderWidth: 1, width: 330,
//     padding: 10,
//     borderRadius: 10,
//     marginTop: 10,
//     borderColor: "rgba(51, 176, 246, 1)"
// }} placeholder="Email Password " value={password} onChangeText={(text) => setPassword(text)} ></TextInput>
// <TouchableOpacity style={{
//     width: 330,
//     backgroundColor: "rgba(226, 62, 87, 1)",
//     padding: 14,
//     borderRadius: 5,
//     marginTop: 14,

// }} >
//     {
//         load ? <ActivityIndicator size={"large"} /> : <Text style={{
//             fontWeight: "500",
//             fontSize: 20,
//             textAlign: "center",
//             color:"#fff"
//         }} onPress={() => signup()
//         }>Sign up </Text>
//     }

// </TouchableOpacity>