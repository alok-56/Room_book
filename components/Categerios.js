import React from "react";
import { View, Text, Image } from "react-native";

const Topplace = () => {
    return (
        <View style={{
            flex: 1,
            marginTop: 10
        }}>
            <View style={{ width: "85%", height: 5, alignSelf: "center", backgroundColor: "red", borderRadius: 10 }}>
            </View>
            <Text style={{
                marginTop: 10,
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 10
            }}>Top places at your location</Text>
            <View style={{
                backgroundColor:"#fff",
                elevation:20,
                width:"95%",
                alignSelf:"center",
                borderRadius:8,
                padding:5,
                marginTop:10
            }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-around",
            }}>
                <View style={{ marginTop: 10 }}>
                    <Image style={{
                        borderRadius: 50,
                        height: 80, width: 80,
                        alignSelf:"center"
                    }} source={require('../assets/surya.jpg')}></Image>
                    <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 15 }}>Surya mall</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Image style={{
                        borderRadius: 50,
                        height: 80, width: 80,
                        alignSelf:"center"
                    }} source={require('../assets/awanti.jpg')}></Image>
                    <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 15 }}>Awanti</Text>
                </View>

                <View style={{ marginTop: 10 }}>
                    <Image style={{
                        borderRadius: 50,
                        height: 80, width: 80,
                        alignSelf:"center"
                    }} source={require('../assets/shanti.jpg')}></Image>
                    <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 15 }}>Shanti nagar</Text>
                </View>
            </View>


            <View style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 5,
            }}>
                <View style={{ marginTop: 10 }}>
                    <Image style={{
                        borderRadius: 50,
                        height: 80, width: 80
                    }} source={require('../assets/shra.jpg')}></Image>
                    <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 15 }}>SSTC</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Image style={{
                        borderRadius: 50,
                        height: 80, width: 80
                    }} source={require('../assets/puri.jpg')}></Image>
                    <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 15 }}>Puri Iti</Text>
                </View>

                <View style={{ marginTop: 10 }}>
                    <Image style={{
                        borderRadius: 50,
                        height: 80, width: 80
                    }} source={require('../assets/rungta.jpg')}></Image>
                    <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 15 }}>RCET</Text>
                </View>
            </View>
                
            </View>
            
            <View style={{ width: "85%", height: 5, alignSelf: "center", backgroundColor: "red", borderRadius: 10, marginTop: 15 }}>
            </View>

        </View>
    )
}

export default Topplace;