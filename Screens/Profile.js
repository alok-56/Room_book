import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import { ImageBackground, Image, TouchableOpacity, ActivityIndicator, Modal, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from "@react-native-async-storage/async-storage";
import ImagePicker from 'react-native-document-picker'

const Profile = ({ navigation }) => {
    const [load, setLoad] = useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, SetNumber] = useState('');
    const [gender, SetGender] = useState('');
    const [images, SetImages] = useState('');
    const [id, setId] = useState('');
    const [visible, setVisible] = useState(false);
    const [url, setUrl] = useState([])

    useEffect(() => {
        user()
    }, [])
    const user = async () => {
        setLoad(false)
        let userid = await AsyncStorage.getItem('users')
        userid = await JSON.parse(userid)._id
        setId(userid)
        if (userid) {
            let data = await fetch(`https://easy-ser.vercel.app/Aut/singleuser/${userid}`);
            data = await data.json();
            if (data) {
                setName(data.name);
                setEmail(data.email);
                SetNumber(data.number);
                SetImages(data.images)
                setLoad(true)
            }
        }
    }


    const updateuser = async () => {
        let data = await fetch(`https://easy-ser.vercel.app/Aut/profile/${userid}`, {
            method: "put",
            body: JSON.stringify({ name, email, number, gender, profession, images }),
            headers: {
                'content-type': 'application/json'
            }
        })
        data = await data.json();
        if (data.acknowledged === true) {
            user()

        }
    }
    const clear = async () => {
        await AsyncStorage.clear();
        navigation.navigate("Login")
    }
    const book = () => {
        navigation.navigate('booking', id)
    }

    const cancel = () => {
        navigation.navigate('cancel', id)
    }
    const payment = () => {
        navigation.navigate('payment', id)
    }
    const Transition = () => {
        navigation.navigate('Transition', id)
    }


    const select = async () => {

        const options = {
            title: 'Select Photo',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.lanchImageLibrary(options, (response) => {

            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const uri = response.uri;
                const type = response.type;
                const name = response.fileName;
                const source = {
                    uri,
                    type,
                    name,
                }
                console.log(source)
            }
        });

    }

    async function handle(e) {

        const data = new FormData()
        data.append("file", e)
        data.append("upload_preset", 'vsqmoxq9')
        const res = await fetch('https://api.cloudinary.com/v1_1/dxlmwq61j/image/upload', {
            method: 'post',
            body: data
        })
        const file = await res.json()
        console.log(file)
    }



    return (
        <View style={{
            flex: 1
        }}>
            <Modal visible={visible}>
                <View style={{
                    flexDirection: "row",
                    marginLeft: 30,
                    marginTop: 90
                }}>
                    <Icon style={{

                    }} onPress={() => setVisible(false)} name="close" size={43}></Icon>
                    <Text style={{
                        fontSize: 25,
                        marginLeft: 20,
                        color: "black",
                        fontWeight: "bold"
                    }}>Edit profile</Text>
                </View>
                <View style={{
                    marginTop: 30
                }}>
                    <TextInput style={{
                        borderWidth: 1,
                        marginLeft: 10,
                        borderRadius: 5,
                        paddingLeft: 20,
                        fontSize: 20
                    }} placeholder="Name" value={name}></TextInput>
                    <TextInput style={{
                        borderWidth: 1,
                        marginLeft: 10,
                        marginTop: 8,
                        paddingLeft: 20,
                        fontSize: 20,
                        borderRadius: 5
                    }} placeholder="Email" value={email}></TextInput>
                    <TextInput style={{
                        borderWidth: 1,
                        marginLeft: 10,
                        marginTop: 5,
                        borderRadius: 5,
                        paddingLeft: 20,
                        fontSize: 20
                    }} placeholder="Number" value={number}></TextInput>
                    <View style={{
                        marginTop: 20,
                        width: 200,
                        alignSelf: "center"
                    }}>
                        <Button onPress={()=>select()} title="Select Profile images" />

                    </View>
                    <TouchableOpacity style={{
                        backgroundColor: "red",
                        padding: 10,
                        width: 300,
                        alignSelf: "center",
                        marginTop: 20,
                        borderRadius: 10,
                        paddingLeft: 20,
                        fontSize: 20
                    }}><Text style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#fff",
                        fontSize: 20,

                    }}>Confirm</Text></TouchableOpacity>
                </View>

            </Modal>
            {
                load ? <ImageBackground style={{
                    width: "100%",
                    height: "100%"
                }} source={require('../assets/bac1.png')}>
                    <View style={{

                    }}>
                        <View style={{
                            flexDirection: "row", marginTop: 30,
                            marginLeft: 30
                        }}>
                            <Text style={{ marginTop: 7 }}><Icon onPress={() => navigation.goBack()} name="close" size={30} color="black" /></Text>
                            <Text style={{ fontSize: 30, marginLeft: 20 }}>Profile</Text>
                        </View>
                        <View style={{ flexDirection: "row", width: "100%", height: 100, marginTop: 20, justifyContent: "space-around" }}>
                            <View style={{ width: 100, height: 100, borderWidth: 1, padding: 3, borderRadius: 50, marginTop: 5, borderColor: "rgba(51, 176, 246, 1)" }}>
                                <Image style={{ width: "100%", height: "100%", borderRadius: 50, }} source={require('../assets/girl.png')}></Image>
                            </View>
                            <View style={{ marginTop: 15, marginLeft: -20 }}>
                                <Text style={{ fontSize: 20 }}>{name}{(gender)}</Text>
                                <Text style={{ fontSize: 12 }}>{email}</Text>
                                <Text style={{ fontSize: 12 }}>{number}</Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: "center", flexDirection: "row", marginTop: 5 }}>
                            <TouchableOpacity style={{
                                width: 100,
                                backgroundColor: "red",
                                borderRadius: 8,
                                padding: 7
                            }}><Text style={{ textAlign: 'center', color: "#fff", fontWeight: "bold" }} onPress={() => setVisible(true)}>Edit profile</Text></TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                            <TouchableOpacity style={{
                                width: 330,
                                padding: 14,
                                borderRadius: 5,
                                borderWidth: 2,
                                marginTop: 5,
                                borderColor: "rgba(51, 176, 246, 1)",
                            }}><Text style={{
                                textAlign: "center",
                                fontWeight: "500",
                                fontSize: 16,
                            }} onPress={() => book()}>My booking</Text></TouchableOpacity>
                            <TouchableOpacity style={{
                                width: 330,
                                padding: 14,
                                borderRadius: 5,
                                borderWidth: 2,
                                marginTop: 5,
                                borderColor: "rgba(51, 176, 246, 1)",
                            }} onPress={() => cancel()}><Text style={{
                                textAlign: "center",
                                fontWeight: "500",
                                fontSize: 16,
                            }}>Cancelled Rooms</Text></TouchableOpacity>
                            <TouchableOpacity style={{
                                width: 330,
                                padding: 14,
                                borderRadius: 5,
                                borderWidth: 2,
                                marginTop: 5,
                                borderColor: "rgba(51, 176, 246, 1)",
                            }} onPress={() => payment()}><Text style={{
                                textAlign: "center",
                                fontWeight: "500",
                                fontSize: 16,
                            }}>My Payment</Text></TouchableOpacity>
                            <TouchableOpacity style={{
                                width: 330,
                                padding: 14,
                                borderRadius: 5,
                                borderWidth: 2,
                                marginTop: 5,
                                borderColor: "rgba(51, 176, 246, 1)",
                            }}><Text style={{
                                textAlign: "center",
                                fontWeight: "500",
                                fontSize: 16,
                            }} onPress={() => Transition()}>Transition</Text></TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        marginTop: 40
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: "red",
                            width: 150,
                            padding: 10,
                            borderRadius: 10

                        }} onPress={() => clear()}><Text style={{ textAlign: "center", fontSize: 15, color: "#FFF", fontWeight: "800" }} >Logout</Text></TouchableOpacity>
                    </View>
                </ImageBackground> : <View style={{
                    marginTop: 300
                }}>
                    <ActivityIndicator size={'large'}></ActivityIndicator>
                </View>
            }
        </View>
    )
}

export default Profile;