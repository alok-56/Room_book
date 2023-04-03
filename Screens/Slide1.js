import React from "react";
import { View, Text, Image, ImageBackground, FlatList, TouchableOpacity } from "react-native";

const Slide1 = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
        }}>
            <ImageBackground style={{
                height: "100%",
                weight: "100%",

            }} source={require('../assets/bac1.png')}>
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 30
                }}>
                    <View style={{
                        flex: 1,
                        width: "70%",
                        height: "100%",
                        alignItems: "center",
                        marginTop: "1%"
                    }}>
                        <Image style={{

                        }} source={require('../assets/house.png')}></Image>
                    </View>
                </View>

                <View style={{
                    flex: 1,
                    flexDirection: "column",
                    width: "60%",
                    marginLeft: "45%",
                    position: "relative",
                    top: "18%",
                    right: "5%"

                }}>
                    <Text style={{
                        fontSize: 20,
                        color: "rgba(12, 0, 88, 1)",
                        textAlign: "center"
                    }}>Choose from thousand of 100%
                        genuine PG homes,Single rooms or a shared one
                        we have got it all. </Text>

                </View>
                <View style={{
                    flexDirection: "row"
                }}>
                    <Image source={require('../assets/girl.png')}>
                    </Image>
                    <View style={{
                        justifyContent: "flex-end",
                        marginBottom: "10%",
                        position: "relative",
                        right: "20%"
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

                        }} onPress={() => navigation.navigate('Slide2')}><Text style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            color: "#fff",
                            fontSize: 20
                        }}>Next</Text></TouchableOpacity>
                    </View>
                </View>


            </ImageBackground>

        </View>
    )
}

export default Slide1;