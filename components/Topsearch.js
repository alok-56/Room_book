import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
const Topsearch = () => {
    return (
        <View style={{ marginTop: 20 }}>
            <Text style={{ marginLeft: 10, fontSize: 15,color:"black", fontWeight: "bold" }}>Top searched</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <View>
                        <Image source={require('../assets/rooms.jpg')} style={{ height: 150, width: 150, marginLeft: 10, borderRadius: 10 }}></Image>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 12, marginLeft: 10, marginTop: 5, color: "red" }}>Rs 2500/-</Text>
                            <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 5, backgroundColor: "red", padding: 2, borderRadius: 5, color: "#fff" }}>Boys</Text>
                        </View>
                        <Text style={{ fontSize: 10, marginLeft: 10, fontWeight: "700" }}>Single Room <Text style={{ fontWeight: '300' }}>in bhilai</Text></Text>
                        <TouchableOpacity style={{ backgroundColor: "red", padding: 2, marginLeft: 9, marginTop: 5, width: "50%", alignItems: "center", borderRadius: 5 }}><Text style={{
                            color:"#fff",
                            fontWeight:"bold"
                        }}>View</Text></TouchableOpacity>

                    </View>
                    <View>
                        <Image source={require('../assets/rooms.jpg')} style={{ height: 150, width: 150, marginLeft: 10, borderRadius: 10 }}></Image>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 12, marginLeft: 10, marginTop: 5, color: "red" }}>Rs 2500/-</Text>
                            <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 5, backgroundColor: "red", padding: 2, borderRadius: 5, color: "#fff" }}>Boys</Text>
                        </View>
                        <Text style={{ fontSize: 10, marginLeft: 10, fontWeight: "700" }}>Single Room <Text style={{ fontWeight: '300' }}>in bhilai</Text></Text>
                        <TouchableOpacity style={{ backgroundColor: "red", padding: 2, marginLeft: 9, marginTop: 5, width: "50%", alignItems: "center", borderRadius: 5 }}><Text style={{
                            color:"#fff",
                            fontWeight:"bold"
                        }}>View</Text></TouchableOpacity>

                    </View>
                    <View>
                        <Image source={require('../assets/rooms.jpg')} style={{ height: 150, width: 150, marginLeft: 10, borderRadius: 10 }}></Image>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 12, marginLeft: 10, marginTop: 5, color: "red" }}>Rs 2500/-</Text>
                            <Text style={{ fontSize: 10, marginLeft: 10, marginTop: 5, backgroundColor: "red", padding: 2, borderRadius: 5, color: "#fff" }}>Boys</Text>
                        </View>
                        <Text style={{ fontSize: 10, marginLeft: 10, fontWeight: "700" }}>Single Room <Text style={{ fontWeight: '300' }}>in bhilai</Text></Text>
                        <TouchableOpacity style={{ backgroundColor: "red", padding: 2, marginLeft: 9, marginTop: 5, width: "50%", alignItems: "center", borderRadius: 5 }}><Text style={{
                            fontWeight:"bold",
                            color:"#fff"
                        }}>View</Text></TouchableOpacity>

                    </View>

                </View>
            </ScrollView>

        </View>
    )
}

export default Topsearch;