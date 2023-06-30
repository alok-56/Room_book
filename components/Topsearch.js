import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

const Recomdation = () => {
    return (
        <View style={{ flex: 1 }}>
            <View>
                <Text style={{
                    marginTop: 13,
                    marginLeft: 10,
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "black"
                }} >Recommend For You</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <View style={{
                    backgroundColor: "#fff",
                    elevation: 20,
                    marginLeft: 10,
                    padding: 5,
                    borderRadius: 8,
                    marginTop: 10,
                    height: 250
                }}>
                    <View style={{ marginTop: 10, width: 150, height: "100%", }}>
                        <Image style={{
                            width: 145,
                            height: 117,
                            backgroundColor: "red",
                            borderRadius: 10
                        }} source={require('../assets/roms.png')}></Image>
                        <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 5 }}>Single Room Pg</Text>
                        <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row" }}>
                                <Icon name={"house"} size={23} color="black"></Icon>
                                <Text>8 beds</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Icon name={"map"} size={23} color="black"></Icon>
                                <Text>Girls</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5, justifyContent: "space-between", marginLeft: 4 }}>
                            <View>
                                <Text style={{ marginLeft: 5 }}>4.5</Text>
                            </View>
                            <View>
                                <Text>Rs :<Text style={{ color: "rgba(14, 139, 255, 1)" }}>3000</Text></Text>
                            </View>
                        </View>
                        <View style={{ width: 40, height: 40, backgroundColor: "rgba(255, 46, 0, 1)", alignSelf: "center", marginTop: 2, borderRadius: 50 }}>
                            <Icon name={"arrow-right"} color="#fff" size={40}></Icon>
                        </View>
                    </View>
                </View>

                <View style={{
                    backgroundColor: "#fff",
                    elevation: 20,
                    marginLeft: 10,
                    padding: 5,
                    borderRadius: 8,
                    marginTop: 10,
                    height: 250
                }}>
                    <View style={{ marginTop: 10, width: 150, height: "100%" }}>
                        <Image style={{
                            width: 145,
                            height: 117,
                            backgroundColor: "red",
                            borderRadius: 10
                        }} source={require('../assets/rem2.png')}></Image>
                        <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 5 }}>Single Room Pg</Text>
                        <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row" }}>
                                <Icon name={"house"} size={23} color="black"></Icon>
                                <Text>8 beds</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Icon name={"map"} size={23} color="black"></Icon>
                                <Text>Girls</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5, justifyContent: "space-between", marginLeft: 4 }}>
                            <View>
                                <Text style={{ marginLeft: 5 }}>4.5</Text>
                            </View>
                            <View>
                                <Text>Rs :<Text style={{ color: "rgba(14, 139, 255, 1)" }}>3000</Text></Text>
                            </View>
                        </View>
                        <View style={{ width: 40, height: 40, backgroundColor: "rgba(255, 46, 0, 1)", alignSelf: "center", marginTop: 2, borderRadius: 50 }}>
                            <Icon name={"arrow-right"} color="#fff" size={40}></Icon>
                        </View>
                    </View>
                </View>

                <View style={{
                    backgroundColor: "#fff",
                    elevation: 20,
                    marginLeft: 10,
                    padding: 5,
                    borderRadius: 8,
                    marginTop: 10,
                    height: 250
                }}>
                    <View style={{ marginTop: 10, width: 150, height: "100%" }}>
                        <Image style={{
                            width: 145,
                            height: 117,
                            backgroundColor: "red",
                            borderRadius: 10
                        }} source={require('../assets/roms.png')}></Image>
                        <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 5 }}>Single Room Pg</Text>
                        <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row" }}>
                                <Icon name={"house"} size={23} color="black"></Icon>
                                <Text>8 beds</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Icon name={"map"} size={23} color="black"></Icon>
                                <Text>Girls</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5, justifyContent: "space-between", marginLeft: 4 }}>
                            <View>
                                <Text style={{ marginLeft: 5 }}>4.5</Text>
                            </View>
                            <View>
                                <Text>Rs :<Text style={{ color: "rgba(14, 139, 255, 1)" }}>3000</Text></Text>
                            </View>
                        </View>
                        <View style={{ width: 40, height: 40, backgroundColor: "rgba(255, 46, 0, 1)", alignSelf: "center", marginTop: 2, borderRadius: 50 }}>
                            <Icon name={"arrow-right"} color="#fff" size={40}></Icon>
                        </View>
                    </View>
                </View>

                <View style={{
                    backgroundColor: "#fff",
                    elevation: 20,
                    marginLeft: 10,
                    padding: 5,
                    borderRadius: 8,
                    marginTop: 10,
                }}>
                    <View style={{ marginTop: 10, width: 150, height: "100%" }}>
                        <Image style={{
                            width: 145,
                            height: 117,
                            backgroundColor: "red",
                            borderRadius: 10
                        }} source={require('../assets/roms.png')}></Image>
                        <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 5 }}>Single Room Pg</Text>
                        <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row" }}>
                                <Icon name={"house"} size={23} color="black"></Icon>
                                <Text>8 beds</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Icon name={"map"} size={23} color="black"></Icon>
                                <Text>Girls</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5, justifyContent: "space-between", marginLeft: 4 }}>
                            <View>
                                <Text style={{ marginLeft: 5 }}>4.5</Text>
                            </View>
                            <View>
                                <Text>Rs :<Text style={{ color: "rgba(14, 139, 255, 1)" }}>3000</Text></Text>
                            </View>
                        </View>
                        <View style={{ width: 40, height: 40, backgroundColor: "rgba(255, 46, 0, 1)", alignSelf: "center", marginTop: 2, borderRadius: 50 }}>
                            <Icon name={"arrow-right"} color="#fff" size={40}></Icon>
                        </View>
                    </View>
                </View>

            </ScrollView>



        </View>
    )
}

export default Recomdation;