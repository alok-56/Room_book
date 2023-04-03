import React, { useState } from "react";
import { View, Text, ImageBackground, TextInput, ActivityIndicator, TouchableOpacity, ToastAndroid, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

const Forget = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [load, setLoad] = useState(false)
    const [data, setData] = useState(false)
    const [otpp, setOtpp] = useState('')
    const [loading, setLoading] = useState(false)
    const [passset, setPassset] = useState(false)
    const [password, setPassword] = useState('');
    const [compassword, setCompassword] = useState('')
    const [veri0, setVeri0] = useState('');
    const [veri1, setVeri1] = useState('');
    const [veri2, setVeri2] = useState('');
    const [veri3, setVeri3] = useState('');
    const [veri4, setVeri4] = useState('');
    let veri = `${veri0}${veri1}${veri2}${veri3}${veri4}`

    async function fun() {
        setLoad(true)
        let data = await fetch(`https://easy-ser.vercel.app/Aut/email/${email}`)
        data = await data.json()
        if (data.email) {
            let otp = Math.floor(Math.random() * 100000);
            setOtpp(otp);
            let result = await fetch('https://easy-ser.vercel.app/Aut/verification', {
                method: "post",
                body: JSON.stringify({ email, otp }),
                headers: {
                    'content-type': 'application/json'
                }
            });
            result = await result.json()
            if (result) {
                setData(true)
                setLoad(false)
            }
        }
        else {
            setLoad(false)
            ToastAndroid.show('Incorrect Email', ToastAndroid.SHORT);
        }

    }
    const verify = async () => {
        setLoad(true)
        if (veri == otpp) {
            setPassset(true)
            setData(false)
            setLoad(false)
        }
        else {
            setLoad(false);
        }
    }
    const changepass = async () => {
        setLoad(true)
        if (password == compassword) {
            let result = await fetch('https://easy-ser.vercel.app/Aut/forgot', {
                method: "put",
                body: JSON.stringify({ email, password }),
                headers: {
                    'content-type': 'application/json'
                }
            });
            if (result) {
                console.log(result)
                navigation.navigate('Login')
            }

        }
        else {
            setLoad(false)
            ToastAndroid.show('Password not matched', ToastAndroid.SHORT);
        }


    }
    return (
        <View style={{
            flex: 1,
        }}>
            <ImageBackground style={{
                height: "100%"
            }} source={require('../assets/bac1.png')}>
                {
                    data ? <View style={{ flex: 1, alignItems: "center", marginTop: "15%" }} >
                        <View >
                            <Text style={styles.Otptext}>Otp</Text>
                            <Text style={styles.btn}>91+8340175751</Text>
                            <View style={styles.input}>
                                <TextInput onChangeText={(text) => setVeri0(text)} maxLength={1} style={styles.otp}></TextInput>
                                <TextInput onChangeText={(text) => setVeri1(text)} maxLength={1} style={styles.otp}></TextInput>
                                <TextInput onChangeText={(text) => setVeri2(text)} maxLength={1} style={styles.otp}></TextInput>
                                <TextInput onChangeText={(text) => setVeri3(text)} maxLength={1} style={styles.otp}></TextInput>
                                <TextInput onChangeText={(text) => setVeri4(text)} maxLength={1} style={styles.otp}></TextInput>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={{
                                marginTop: 40,
                                backgroundColor: "rgba(51, 176, 246, 1)",
                                padding: 10,
                                width: 300,
                                borderRadius: 10
                            }}>
                                {
                                    load ? <ActivityIndicator size={'large'} /> : <Text style={{ textAlign: "center", fontSize: 15 }} onPress={() => verify()}>Continue</Text>
                                }

                            </TouchableOpacity>
                        </View>

                    </View>
                        : passset ? <View style={{
                            marginTop: "210%"
                        }}>
                            <View style={{
                                marginLeft: 40
                            }}>
                                 <Icon style={{
                                    marginBottom: 10
                                }} name="close" size={24} color="black" /> 
                                <Text style={{
                                    fontSize: 23
                                }}>Reset your password </Text>
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
                                }} placeholder="Enter New password " value={password} onChangeText={(text) => setPassword(text)}></TextInput>
                                <TextInput style={{
                                    borderWidth: 1, width: 330,
                                    padding: 10,
                                    marginTop: 10,
                                    borderRadius: 10,
                                    borderColor: "rgba(51, 176, 246, 1)"
                                }} placeholder="ReEnter password password " value={compassword} onChangeText={(text) => setCompassword(text)}></TextInput>


                                <TouchableOpacity style={{
                                    width: 330,
                                    backgroundColor: "rgba(51, 176, 246, 1)",
                                    padding: 14,
                                    borderRadius: 5,
                                    marginTop: 14,

                                }} onPress={() => changepass()} >
                                    {
                                        load ? <ActivityIndicator size={"large"} /> : <Text style={{
                                            fontWeight: "500",
                                            fontSize: 20,
                                            textAlign: "center"
                                        }} >  Continue </Text>
                                    }
                                </TouchableOpacity>


                            </View>
                        </View> :

                            <View style={{
                                marginTop: "40%"
                            }}>

                             <View style={{
                                    marginLeft: 40
                                }}>

                                    <Icon style={{
                                        marginBottom: 10
                                    }} name="close" size={24} color="black" />
                                    <Text style={{
                                        fontSize: 23
                                    }}>Enter your email </Text>
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

                                    <TouchableOpacity style={{
                                        width: 330,
                                        backgroundColor: "rgba(51, 176, 246, 1)",
                                        padding: 14,
                                        borderRadius: 5,
                                        marginTop: 14,

                                    }} onPress={() => fun()} >
                                        {
                                            load ? <ActivityIndicator size={"large"} /> : <Text style={{
                                                fontWeight: "500",
                                                fontSize: 20,
                                                textAlign: "center"
                                            }} >  Continue </Text>
                                        }
                                    </TouchableOpacity>
                                </View>
                            </View>

                }

            </ImageBackground>

        </View>
    )
}

export default Forget;

const styles = StyleSheet.create({
    btn: {
        borderWidth: 2,
        padding: 20,
        width: 300,
        textAlign: "center",
        borderColor: "rgba(51, 176, 246, 1)",
        borderRadius: 10
    },
    input: {
        borderEndWidth: 2,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        padding: 18,
        width: 300,
        textAlign: "center",
        borderColor: "rgba(51, 176, 246, 1)",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center"

    },
    otp: {
        width: 30,
        borderBottomWidth: 2,
        marginLeft: 10,
        textAlign: "center"

    },
    Otptext: {
        fontSize: 30,
        marginBottom: 30,
        marginRight: 220
    }

})













