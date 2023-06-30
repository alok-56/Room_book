import React from "react";
import { View, Text, Image, ImageBackground, FlatList, TouchableOpacity } from "react-native";

const Slide1 = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#fff"
        }}>
            <View style={{
                flex: 1
            }}>

                <View style={{
                    alignSelf: "center",
                }}>
                    <Image style={{
                        height: 250,
                        width: 400,
                        marginTop: 50
                    }} source={require('../assets/slide1.gif')}></Image>
                </View>
                <View style={{
                    alignSelf: "center",
                    marginTop: 25,
                    flexDirection: "row",
                }}>
                    <Text style={{
                        width: 10,
                        height: 10,
                        backgroundColor: "rgba(248, 89, 53, 1)",
                        borderRadius: 10
                    }}></Text>
                    <Text style={{
                        width: 10,
                        height: 10,
                        backgroundColor: "black",
                        borderRadius: 10,
                        marginLeft: 7
                    }}></Text>
                    <Text style={{
                        width: 10,
                        height: 10,
                        backgroundColor: "black",
                        borderRadius: 10,
                        marginLeft: 7
                    }}></Text>
                </View>

            </View>

            <View style={{
                flex: 0.5,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold"
                }}>
                    BEST AND VERIFIED OWNERS
                </Text>
                <Text style={{
                    width: "90%",
                    alignSelf: "center",
                    textAlign: "center",
                    marginTop: 10,
                    fontSize: 15
                }}>
                    Verified owners in rental PGs have been screened and their properties inspected, ensuring a safe and comfortable living environment. They prioritize tenants' needs and are responsive to any concerns.
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Slide2')}>
                    <View style={{
                        alignSelf: "center",
                        position: "relative",
                        bottom: 30
                    }}>
                        <Image style={{
                            width: 200,
                            height: 200
                        }} source={require('../assets/next.gif')}  ></Image>
                    </View>
                </TouchableOpacity>


            </View>




        </View>
    )
}

export default Slide1;