import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import { ImageBackground, Image, TouchableOpacity, ActivityIndicator, ScrollView, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from 'react-native-modal'
import DocumentPicker from 'react-native-document-picker'
import RNRestart from 'react-native-restart';

const Profile = ({ navigation }) => {
    const [load, setLoad] = useState(true)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, SetNumber] = useState('');
    const [gender, SetGender] = useState('');
    const [images, SetImages] = useState('');
    const [id, setId] = useState('');
    const [visible, setVisible] = useState(false);
    const [url, setUrl] = useState([])
    const [load1, setLoad1] = useState(false)

    useEffect(() => {
        user()
    }, [])
    const user = async () => {
        setLoad(true)
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
                console.log("alok", images)
                SetGender(data.gender)
                setLoad(false)
            }
            else {
                setLoad(false)
            }
        }
        else {
            setLoad(false)
        }
    }


    const updateuser = async () => {
        setLoad(true)
        setLoad1(true)
        let data = await fetch(`https://easy-ser.vercel.app/Aut/profile/${id}`, {
            method: "put",
            body: JSON.stringify({ name, email, number, gender, images }),
            headers: {
                'content-type': 'application/json'
            }
        })
        data = await data.json();
        if (data.modifiedCount === true) {
            setVisible(false)
            setLoad(false)
            setLoad1(false)
        }
    }
    const clear = async () => {
        await AsyncStorage.clear();
        const data = await AsyncStorage.getItem('users')
        if (data === null) {
            Alert.alert("Logout Sucessfully. Please Restart the App")
            RNRestart.Restart()
        }

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

    const Picker = async () => {
        try {
            let data = await DocumentPicker.pick(
                {
                    type: [DocumentPicker.types.images],
                }
            );
            handle(data[0].uri, data[0].type, data[0].name)
            console.log(data)
        } catch (error) {

            if (DocumentPicker.isCancel(error)) {
                console.log(error)
            }
            else {
                console.log(error)
            }
        }
    }


    async function handle(e, type, name) {
        setLoad1(true)
        const data = new FormData()
        data.append("file", { uri: e, type: type, name: name })
        data.append("upload_preset", 'vsqmoxq9')
        const res = await fetch('https://api.cloudinary.com/v1_1/dxlmwq61j/image/upload', {
            method: 'post',
            body: data
        })
        const file = await res.json()
        if (file) {
            SetImages(file.secure_url)
            console.log(images)
            setLoad1(false)
        }
    }



    return (
        <View style={{
            flex: 1
        }}>
            <Modal isVisible={visible}>
                <ScrollView>
                    <View style={{
                        flex: 1,
                        backgroundColor: "#fff",
                        borderRadius: 10,
                        height: 600,
                        marginTop: 30
                    }}>
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
                            flexDirection: "row",
                            justifyContent: "center",
                            marginRight: 20

                        }}>
                            <View style={{
                                position: "relative",
                                right: 40,
                                bottom: 5
                            }}>
                                <Icon style={{
                                    fontWeight: "bold"
                                }} name={"arrow-left"} size={54} color="#000" onPress={() => setVisible(false)}></Icon>
                            </View>
                            <Text style={{
                                fontSize: 25,
                                color: "rgba(0, 0, 0, 1)",
                                fontWeight: "500"
                            }}>Edit Profile</Text>
                        </View>
                        <View>
                            <View>
                                <Image style={{
                                    width: 90,
                                    height: 90,
                                    borderRadius: 50,
                                    alignSelf: "center"
                                }} source={{ uri: `${images}` }}></Image>
                                <TouchableOpacity onPress={() => Picker()}>
                                    <Text style={{
                                        fontSize: 18,
                                        textAlign: "center",
                                        color: "rgba(45, 142, 254, 1)"
                                    }}>Change profile</Text>

                                </TouchableOpacity>

                            </View>
                        </View>

                        <View>
                            <TextInput placeholder="Name" style={{
                                borderBottomWidth: 2,
                                width: 300,
                                alignSelf: "center",
                                fontSize: 20,
                                fontWeight: "400"
                            }} value={name} onChangeText={(text) => setName(text)}></TextInput>

                            <TextInput placeholder="Email" style={{
                                borderBottomWidth: 2,
                                width: 300,
                                alignSelf: "center",
                                fontSize: 20,
                                fontWeight: "400"
                            }} value={email} onChangeText={(text) => setEmail(text)}></TextInput>

                            <TextInput placeholder="Number" style={{
                                borderBottomWidth: 2,
                                width: 300,
                                alignSelf: "center",
                                fontSize: 20,
                                fontWeight: "400"
                            }} value={number} onChangeText={(text) => SetNumber(text)}></TextInput>

                            <TextInput placeholder="Gender" style={{
                                borderBottomWidth: 2,
                                width: 300,
                                alignSelf: "center",
                                fontSize: 20,
                                fontWeight: "400"
                            }} value={gender} onChangeText={(text) => SetGender(text)}></TextInput>
                        </View>
                        <TouchableOpacity style={{
                            width: 250,
                            backgroundColor: "#000",
                            padding: 10,
                            alignSelf: "center",
                            marginTop: 25,
                            borderRadius: 7
                        }} onPress={() => updateuser()}>
                            {
                                load1 ? <ActivityIndicator size={44}></ActivityIndicator> : <Text style={{
                                    color: "#fff",
                                    textAlign: "center",
                                    fontSize: 20,
                                    fontWeight: "600"
                                }}>Done</Text>
                            }

                        </TouchableOpacity>

                    </View>
                </ScrollView>

            </Modal>
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                {
                    load ? <ActivityIndicator style={{
                        marginTop: 300
                    }} size={44}></ActivityIndicator> : <View>

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
                        <Text style={{
                            color: "rgba(0, 0, 0, 1)",
                            textAlign: "center",
                            fontSize: 23,
                            fontWeight: "500"
                        }}>Profile</Text>
                        <View style={{
                            width: "90%",
                            height: 180,
                            backgroundColor: "rgba(245, 245, 245, 1)",
                            alignSelf: "center",
                            elevation: 20,
                            marginTop: 10,
                            borderRadius: 7,
                            padding: 7
                        }}>
                            <View>
                                <Image style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: 50,
                                    alignSelf: "center"
                                }} source={{ uri: `${images}` }}></Image>

                            </View>
                            <Text style={{
                                textAlign: "center",
                                fontSize: 20,
                                color: "#000",
                                fontWeight: "700"
                            }}>{name}({gender})</Text>
                            <Text style={{
                                textAlign: "center",
                                fontSize: 15,
                            }}>{email}</Text>
                            <Text style={{
                                textAlign: "center",
                                fontSize: 15,
                            }}>{number}</Text>
                        </View>
                        <Text style={{
                            textAlign: "right",
                            marginRight: 25,
                            marginTop: 8,
                            fontSize: 20,
                            color: "rgba(45, 142, 254, 1)",
                            fontWeight: "800"
                        }} onPress={() => setVisible(true)}>Edit</Text>


                        <View style={{
                            marginTop: 15,
                            marginBottom: 100
                        }}>
                            <TouchableOpacity style={{
                                flexDirection: "row",
                                width: 330,
                                backgroundColor: "#fff",
                                alignSelf: "center",
                                padding: 10,
                                justifyContent: "space-between",
                                elevation: 20,
                                borderRadius: 7
                            }} onPress={() => book()}>
                                <Text style={{
                                    fontSize: 20,
                                    color: "#000",
                                    fontWeight: "500"
                                }}>My Booking</Text>
                                <Icon name={"arrow-right"} size={33} color="black"></Icon>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                flexDirection: "row",
                                width: 330,
                                backgroundColor: "#fff",
                                alignSelf: "center",
                                padding: 10,
                                justifyContent: "space-between",
                                elevation: 20,
                                borderRadius: 7,
                                marginTop: 8
                            }} onPress={() => cancel()}>
                                <Text style={{
                                    fontSize: 20,
                                    color: "#000",
                                    fontWeight: "500"
                                }}>Cancelled room</Text>
                                <Icon name={"arrow-right"} size={33} color="black"></Icon>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                flexDirection: "row",
                                width: 330,
                                backgroundColor: "#fff",
                                alignSelf: "center",
                                padding: 10,
                                justifyContent: "space-between",
                                elevation: 20,
                                borderRadius: 7,
                                marginTop: 8
                            }} onPress={() => payment()}>
                                <Text style={{
                                    fontSize: 20,
                                    color: "#000",
                                    fontWeight: "500"
                                }}>My Payment</Text>
                                <Icon name={"arrow-right"} size={33} color="black"></Icon>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                flexDirection: "row",
                                width: 330,
                                backgroundColor: "#fff",
                                alignSelf: "center",
                                padding: 10,
                                justifyContent: "space-between",
                                elevation: 20,
                                borderRadius: 7,
                                marginTop: 8
                            }} onPress={() => Transition()}>
                                <Text style={{
                                    fontSize: 20,
                                    color: "#000",
                                    fontWeight: "500"
                                }}>Transition</Text>
                                <Icon name={"arrow-right"} size={33} color="black"></Icon>
                            </TouchableOpacity>


                            <TouchableOpacity style={{

                                width: 200,
                                backgroundColor: "#000",
                                alignSelf: "center",
                                padding: 10,

                                elevation: 20,
                                borderRadius: 7,
                                marginTop: 20
                            }} onPress={() => clear()}>
                                <Text style={{
                                    fontSize: 20,
                                    color: "#fff",
                                    fontWeight: "700",
                                    textAlign: "center"
                                }}>Logout</Text>
                            </TouchableOpacity>





                        </View>






                    </View>


                }

            </ScrollView>

        </View>
    )
}

export default Profile;

{/* <Modal visible={visible}>
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
                    }} placeholder="Name" ></TextInput>
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
            } */}