
import React from "react";
import { View, Text, Image } from "react-native";
// import { AntDesign } from '@expo/vector-icons';

const Who = () => {
    return (
        <View style={{ flexDirection: "row", height: 190, width: "95%", borderWidth: 0.5, marginTop: 25, marginLeft: 10 }}>
            <View style={{ height: 170, width: "45%", margin: 5 }}>
                <Image style={{ height: 170, width: "100%", borderRadius: 10 }} source={require('../assets/cat1.png')}></Image>
            </View>
            <View style={{ marginTop: 10, width: "50%",}} >
                <Text style={{ fontSize: 12, textAlign: "center", fontWeight: "bold" }}>Who we are and What You get
                    From us</Text>
                {/* <View>
                    <Text style={{ fontSize: 10,marginTop:5, textAlign: "left" }}> <AntDesign name="caretright" size={8} color="red" /> Price of Pg Rooms Are Best in the Market</Text>
                    <Text style={{ fontSize: 10, marginTop:5,textAlign: "left" }}> <AntDesign name="caretright" size={8} color="red" /> Get Pg rooms or Flat or Hostel Near your College or School</Text>
                    <Text style={{ fontSize: 10, marginTop:5,textAlign: "left" }}> <AntDesign name="caretright" size={8} color="red" /> Packages price are avialable For students who wants to stay for long time</Text>
                </View> */}
            </View>

        </View>
    )
}
export default Who;