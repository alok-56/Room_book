import React, { useState } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons'
// import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';
import { View, Text, TextInput, ImageBackground, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, ToastAndroid } from "react-native";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [load, setLoad] = useState(false)

    const signin = async () => {
        setLoad(true)
        let result = await fetch(`https://easy-ser.vercel.app/Aut/signin`, {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'content-type': 'application/json'
            }
        })
        result = await result.json();
        if (result) {
            await AsyncStorage.setItem('users', JSON.stringify(result))
            setLoad(false)
            navigation.navigate('Bottom')
        }
        else {
            setLoad(false)
            ToastAndroid.show('Invailed detail', ToastAndroid.SHORT);
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
                            }} name="close" size={24} color="black" />
                            <Text style={{
                                fontSize: 23
                            }}>Log in or sign up to Easy PG </Text>
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
                            }} placeholder="Email and Number " value={email} onChangeText={(text) => setEmail(text)}></TextInput>
                            <TextInput style={{
                                borderWidth: 1, width: 330,
                                padding: 10,
                                borderRadius: 10,
                                marginTop: 10,
                                borderColor: "rgba(51, 176, 246, 1)"
                            }} placeholder="Email Password " value={password} secureTextEntry onChangeText={(text) => setPassword(text)}></TextInput>
                            {/* <Text style={{
                                marginTop:10,
                                fontSize:10,
                                width:330
                            }}>We'll call or text you to confirm your number. Standard message and data rates apply.</Text> */}
                            <TouchableOpacity style={{
                                width: 330,
                                backgroundColor: "rgba(226, 62, 87, 1)",
                                padding: 14,
                                borderRadius: 5,
                                marginTop: 14,

                            }} onPress={signin}>
                                {
                                    load ? <ActivityIndicator size={"large"} /> : <Text style={{
                                        fontWeight: "500",
                                        fontSize: 20,
                                        textAlign: "center",
                                        color:"#fff",
                                        fontWeight:"bold"
                                    }} >  Continue </Text>
                                }
                            </TouchableOpacity>
                            <Text style={{
                             marginLeft:"45%",
                             fontSize:18,
                             fontWeight:"bold",
                             color:"black",
                             marginTop:5
                            }} onPress={()=>navigation.navigate('Forget')}>Forget password</Text>
                            <View style={{
                                width: 330,
                            }}>
                                <Text style={{ textAlign: "center", fontSize: 15, marginTop: 1 }}>or</Text>
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
                            }} onPress={() => navigation.navigate('Signup')}>Sign up </Text></TouchableOpacity>
                            <TouchableOpacity style={{
                                width: 330,
                                borderTopWidth: 1,
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderColor: "rgba(51, 176, 246, 1)",
                                padding: 14,
                                borderRadius: 5,
                                marginTop: 14,
                                flexDirection: "row"
                            }}><Icon name="email" size={24} color="rgba(226, 62, 87, 1)" /><Text style={{
                                fontWeight: "500",
                                fontSize: 16,
                                marginLeft: 10
                            }}>Continue with Email</Text></TouchableOpacity>
                            <TouchableOpacity style={{
                                width: 330,
                                borderTopWidth: 1,
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderColor: "rgba(51, 176, 246, 1)",
                                padding: 14,
                                borderRadius: 5,
                                marginTop: 14,
                                flexDirection: "row"
                            }}><Icon name="facebook" size={24} color="rgba(226, 62, 87, 1)" /><Text style={{
                                fontWeight: "500",
                                fontSize: 16,
                                marginLeft: 10
                            }}>Continue with Facebook</Text></TouchableOpacity>
                            <TouchableOpacity style={{
                                width: 330,
                                borderTopWidth: 1,
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderColor: "rgba(51, 176, 246, 1)",
                                padding: 14,
                                borderRadius: 5,
                                marginTop: 14,
                                flexDirection: "row"
                            }}><Icon name="facebook" size={24} color="rgba(226, 62, 87, 1)" /><Text style={{
                                fontWeight: "500",
                                fontSize: 16,
                                marginLeft: 10
                            }}>Continue with Goggle</Text></TouchableOpacity> 

                        </View>

                    </View>

                </ImageBackground>
            </View>

        </View>
    )
}

export default Login;