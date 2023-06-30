import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
const Slide3 = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#fff"
        }}>
            <View style={{
                alignSelf: "center",
            }}>
                <Image style={{
                    height: 300,
                    width: 300,
                    alignSelf: "center"
                }} source={require('../assets/slide3.gif')}></Image>
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
                    Schedule Your Appointment
                </Text>
                <Text style={{
                    textAlign: "center",
                    marginTop: 10,
                    fontSize: 15,
                    width: "90%",
                    alignSelf: "center"

                }}>
                    Get Away With The Stress Of Unavailibility Of Doctors Or Hospitals Nearby. Enter The Symotoms You're Facing And The Get The Most Probable Disease You Might Be Suffering From. With More Than 80% Accuracy.</Text>
                <View style={{
                    marginTop: 40,
                    alignSelf: "center",
                }}>
                    <TouchableOpacity style={{
                        width: 150,
                        backgroundColor: "black",
                        borderRadius: 5,
                        padding: 10
                    }} onPress={() => navigation.navigate('Login')}>
                        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}>Get Started</Text>
                    </TouchableOpacity>
                </View>

            </View>




        </View>
    )
}

export default Slide3;