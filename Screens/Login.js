import React, { useState } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons'
// import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';
import { View, Text, TextInput, Image, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, ToastAndroid } from "react-native";


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [load, setLoad] = useState(false)
    console.log(email)

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
            <ScrollView>

                <View style={{
                    marginTop: 30,
                }}>
                    <Text style={{
                        textAlign: "center", color: "black", fontSize: 23,
                        fontWeight: "bold"
                    }}>Log In to EasyPg</Text>
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
                            marginTop: 45,
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
                            borderWidth: 1, width: 330, borderRadius: 7,
                            borderColor: "black",
                            fontWeight: "bold",
                            fontSize: 20,
                            paddingLeft: 15
                        }} placeholder="Enter Email and Number " value={email} onChangeText={(text) => setEmail(text)}></TextInput>
                        <TextInput style={{
                            borderWidth: 1, width: 330,
                            padding: 10,
                            borderRadius: 7,
                            marginTop: 10,
                            borderColor: "black",
                            fontWeight: "bold",
                            paddingLeft: 15,
                            fontSize: 20
                        }} placeholder="Enter Password " value={password} secureTextEntry onChangeText={(text) => setPassword(text)}></TextInput>
                        <Text style={{
                            textAlign: "right",
                            fontSize: 15,
                            marginTop: 8,
                            color: "rgba(45, 142, 254, 1)",
                            fontWeight: "bold"
                        }} onPress={() => navigation.navigate('Forget')}>Forgot Password?</Text>

                        <TouchableOpacity style={{
                            width: 330,
                            backgroundColor: "rgba(31, 31, 31, 1)",
                            padding: 14,
                            borderRadius: 5,
                            marginTop: 14,

                        }} onPress={signin}>
                            {
                                load ? <ActivityIndicator size={"large"} /> : <Text style={{
                                    fontWeight: "500",
                                    fontSize: 20,
                                    textAlign: "center",
                                    color: "#fff",
                                    fontWeight: "bold"
                                }} >  Log in </Text>
                            }
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    marginTop: 60,
                    alignSelf: "center"
                }}>
                    <Text style={{
                        fontSize: 20
                    }} onPress={() => navigation.navigate('Signup')}>Don't Have a account? <Text style={{ color: "rgba(45, 142, 254, 1)" }}>Sign up</Text></Text>
                </View>

            </ScrollView>



        </View>



    )
}

export default Login;


