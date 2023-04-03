import React, { useState } from "react";
import { View, Text, ImageBackground, ScrollView, Image, TouchableOpacity, TextInput } from "react-native";
const Wishlist = () => {
    return (
        <View style={{
            flex: 1,
            height:"100%"
        }}>
            <ImageBackground style={{
                width: "100%",
                height: "100%"
            }} source={require('../assets/bac1.png')}>
                <Text style={{marginTop:50,fontWeight:"600",fontSize:30,marginLeft:20,color:"black"}}>Complain Form</Text>
                <View style={{
                    height:1,
                    width:200,
                    backgroundColor:"black",
                    marginLeft:25
                }}>

                </View>
                <View style={{
                    padding:10,
                    marginTop:30
                }}>
                <TextInput placeholder="Enter your Name" style={{
                    width:"100%",
                    alignSelf:"center",
                    borderWidth:1,
                    borderRadius:10,
                    fontWeight:"bold",
                    paddingLeft:10
                }}></TextInput>
                 <TextInput placeholder="Enter your Number" style={{
                    width:"100%",
                    alignSelf:"center",
                    borderWidth:1,
                    borderRadius:10,
                    marginTop:10,
                    fontWeight:"bold",
                    paddingLeft:10
                }}></TextInput>
                <TextInput placeholder="Enter your Email" style={{
                    width:"100%",
                    alignSelf:"center",
                    borderWidth:1,
                    borderRadius:10,
                    marginTop:10,
                    fontWeight:"bold",
                    paddingLeft:10
                }}></TextInput>
                <TextInput placeholder="Enter Booking Id" style={{
                    width:"100%",
                    alignSelf:"center",
                    borderWidth:1,
                    borderRadius:10,
                    marginTop:10,
                    fontWeight:"bold",
                    paddingLeft:10
                }}></TextInput>
                <View style={{
                    backgroundColor:"#fff",
                    padding:10,
                    marginTop:25,
                    elevation:20,
                    borderRadius:5
                }}>
                    <Text style={{
                        fontWeight:"bold",
                        textAlign:"center",
                        fontSize:15
                    }}>
                        Complete the form and send us. Our team will contact with You.
                    </Text>
                </View>
                <TouchableOpacity style={{
                    width:250,
                    padding:10,
                    backgroundColor:"red",
                    marginTop:20,
                    alignSelf:"center",
                    borderRadius:10
                }}><Text style={{
                    textAlign:"center",
                    fontSize:20,
                    fontWeight:"bold",
                    color:"#fff"
                }}>Send</Text></TouchableOpacity>


                </View>
                




            </ImageBackground>

        </View>
    )
}

export default Wishlist;