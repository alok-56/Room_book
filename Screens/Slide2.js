import React, { useState, useEffect } from "react";
import { View, Text, Image, ImageBackground, FlatList, TouchableOpacity } from "react-native";


const Slide2 = ({ navigation }) => {

    return (
        <View style={{
            flex: 1,
            backgroundColor: "#fff"
        }}>
            <View style={{
                justifyContent:"center",
                alignSelf: "center",
            }}>
                <Image style={{
                    height: 300,
                    width: 400,
                    marginTop: 40
                }} source={require('../assets/slide2.gif')}></Image>
            </View>
            <View style={{
                alignSelf: "center",
                marginTop: 25,
                flexDirection: "row",
            }}>
                <Text style={{
                    width: 10,
                    height: 10,
                    backgroundColor: "black",
                    borderRadius: 10
                }}></Text>
                <Text style={{
                    width: 10,
                    height: 10,
                    backgroundColor: "rgba(248, 89, 53, 1)",
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
            <View style={{
                marginTop: 45,
            }}>
                <Text style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold"
                }}>
                    Have Detailed Information
                </Text>
                <Text style={{
                    textAlign: "center",
                    marginTop: 10,
                    fontSize: 15,
                    width: "90%",
                    alignSelf: "center"
                }}>
                    Have Detailed Information Of What You're Suffering From And How To Cure It. Go Further And Get All The Knowledge Of The Disease You're Unsure About....
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Slide3')}>
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

export default Slide2;