import React from "react";
import { View, Text, Image } from "react-native";

const Categerios = () => {
    return (
        <View style={{
            width:"95%",justifyContent:"center",
            alignSelf:"center"
        }}>
            <Text style={{ fontSize: 13, marginLeft: 10, marginTop: 20, fontWeight: "800", color: "black" }}>Find a Pg Away from your Home</Text>

            <View style={{  flexDirection: "row",padding:8,borderRadius:10, marginTop: 10, justifyContent: "space-around",backgroundColor:"#fff",elevation:30 }}>
                <View style={{ height: 145, width: 120, borderWidth: 1, marginLeft: 5, borderRadius: 5 }}>
                    <Image source={require('../assets/cat1.png')} style={{ height: 100, width: 118, borderRadius: 5 }}></Image>
                    <View style={{marginTop:5}} >
                        <Text style={{ fontSize: 10,textAlign:"center" }}>Studnts Friendly PG</Text>
                        <Text style={{ fontSize: 10, textAlign: "center", color: "red", fontWeight: "800" }}>Exlpore</Text>
                    </View>
                </View>
                <View style={{ height: 145, width: 120, borderWidth: 1, marginLeft: 5, borderRadius: 5 }}>
                    <Image source={require('../assets/cat2.png')} style={{ height: 100, width: 117, borderRadius: 5 }}></Image>
                    <View style={{marginTop:5}} >
                        <Text style={{ fontSize: 12, textAlign: "center" }}>PG for Boys</Text>
                        <Text style={{ fontSize: 10, textAlign: "center", color: "red", fontWeight: "800" }}>Exlpore</Text>
                    </View>
                </View>
                <View style={{ height: 145, width: 120, borderWidth: 1, marginLeft: 5, borderRadius: 5 }}>
                    <Image source={require('../assets/cat3.png')} style={{ height: 100, width: 118, marginTop: -1, borderRadius: 5 }}></Image>
                    <View style={{marginTop:5}} >
                        <Text style={{ fontSize: 12, textAlign: "center" }}> PG for Girls</Text>
                        <Text style={{ fontSize: 10, textAlign: "center", color: "red", fontWeight: "800" }}>Exlpore</Text>
                    </View>
                </View>



            </View>

        </View>
    )
}

export default Categerios;