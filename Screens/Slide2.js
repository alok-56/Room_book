import React from "react";
import { View, Text, Image, ImageBackground, FlatList, TouchableOpacity } from "react-native";

const Slide2 = ({navigation}) => {
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
                    marginTop: 120
                }}>
                    <Image style={{
                        height: 300,
                        width: 300,
                        marginTop:"10%"
                    }} source={require('../assets/slide2.png')}></Image>

                </View>
                <View style={{
                    flex: 1,
                    flexDirection: "column",
                    width: "60%",
                    marginLeft: "40%",
                    position: "relative",
                    top: "18%",
                    right: "2%"

                }}>
                    <Text style={{
                        fontSize: 20,
                        color: "rgba(12, 0, 88, 1)",
                        textAlign: "center"
                    }}>Easy steps for
                        booking a PG
                        with various faclity.</Text>

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
                        right: "18%"
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

                        }} onPress={()=>navigation.navigate('Slide3')}><Text style={{
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

export default Slide2;