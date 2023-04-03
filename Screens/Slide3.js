import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";

const Slide3 = ({navigation}) => {
    return (
        <View style={{
            flex: 1
        }}>
            <ImageBackground style={{
                height: "100%",
                weight: "100%",

            }} source={require('../assets/bac1.png')}>
                <View style={{
                    flex: 1,
                    marginTop: "2%"

                }}>
                    <Image style={{
                        height: 100,
                        width: 200,
                        marginLeft: 5,
                        marginTop: 35
                    }} source={require('../assets/slide3.png')}></Image>
                    <Image style={{
                        marginLeft: "40%"
                    }} source={require('../assets/slidea.png')}></Image>
                    <Image
                        style={{
                            marginLeft: "55%",
                            position: "relative",
                            bottom: "50%",
                            width: 200,
                            height: 160
                        }} source={require('../assets/slide3h.png')}></Image>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: "column",
                    width: "60%",
                    marginLeft: "40%",
                    position: "relative",
                    top: "22%",
                    right: "1%"

                }}>
                    <Text style={{
                        fontSize: 20,
                        color: "rgba(12, 0, 88, 1)",
                        textAlign: "center"
                    }}>We have different PG
                        available around your
                        College which provides
                        different facility .</Text>

                </View>

                <View style={{
                    flexDirection: "row",
                }}>
                    <Image source={require('../assets/girl.png')}>
                    </Image>
                    <View style={{
                        justifyContent: "flex-end",
                        marginBottom: "10%",
                        position: "relative",
                        right: "17%"
                    }}>
                        <TouchableOpacity style={{
                            width: 110,
                            backgroundColor: "rgba(0, 38, 57, 0.49)",
                            padding: 10,
                            borderRadius: 40,
                            shadowColor: '#171717',
                            shadowOffset: { width: -2, height: 4 },
                            shadowOpacity: 2,
                            shadowRadius: 3,
                            elevation: 60

                        }} onPress={()=>navigation.navigate('Login')}><Text style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            color: "#fff",
                            fontSize: 20
                        }}onPress={()=>navigation.navigate("Login")}>Next</Text></TouchableOpacity>
                    </View>
                </View>


            </ImageBackground >

        </View >
    )
}

export default Slide3;