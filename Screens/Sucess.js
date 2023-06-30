import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
const Sucess = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <ImageBackground style={{ height: "100%", width: "100%" }} source={require('../assets/sucess.gif')}></ImageBackground>

            </View>
            <View style={{ flex: 1.5 }}>
                <ImageBackground style={{ height: "100%", width: "100%" }} source={require('../assets/sucess2.png')}>
                    <Text style={{ fontSize: 25, marginLeft: 20, marginTop: 30, color: "#fff", fontWeight: "600" }}>Successfull!</Text>
                    <Text style={{
                        fontSize: 14,
                        marginLeft: 20,
                        color: "#fff",
                        marginTop: 15
                    }}>Your room is booked successfully with the EasyPg app. Pack your bags to move your new home.</Text>
                    <Text style={{
                        fontSize: 14,
                        marginLeft: 20,
                        color: "#fff",
                        marginTop: 5
                    }}>You Have to bring Adhar card or any government id prove during checkin of room.</Text>

                    <TouchableOpacity style={{
                        width: 300,
                        backgroundColor: "#fff",
                        padding: 7,
                        borderRadius: 7,
                        alignSelf: "center",
                        marginTop: 30
                    }} onPress={() => navigation.navigate('profile')}>
                        <Text style={{ textAlign: "center", fontSize: 20 }}>My Booking</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: 300,
                        backgroundColor: "#fff",
                        padding: 7,
                        borderRadius: 7,
                        alignSelf: "center",
                        marginTop: 10
                    }} onPress={() => navigation.navigate('home')}>
                        <Text style={{ textAlign: "center", fontSize: 20 }}>Book more</Text>
                    </TouchableOpacity>

                </ImageBackground>

            </View>
        </View>
    )
}

export default Sucess;