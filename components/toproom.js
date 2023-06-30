import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

const Toproom = () => {
    return (
        <View style={{
            flex: 1,
            marginBottom: 100
        }}>
            <Text style={{
                marginTop: 15,
                marginLeft: 10,
                fontSize: 18,
                color: "black",
                fontWeight: "bold"
            }}>Top Pg and Hostels...</Text>


            <TouchableOpacity onPress={()=>navigation.navigate()}>
                <View style={{
                    width: "97%",
                    alignSelf: "center",
                    flexDirection: "row",
                    marginTop: 25,
                    backgroundColor: "#fff",
                    padding: 5,
                    alignItems: "center",
                    elevation: 20,
                    borderRadius: 8
                }}>
                    <View>
                        <Image style={{
                            height: 100,
                            borderRadius: 5
                        }} source={require('../assets/beds.png')}></Image>

                    </View>


                    <View >
                        <Text style={{ fontSize: 15, color: "black", fontWeight: "500", alignSelf: "center", marginLeft: 5 }}>Shankar PG & HOSTELS..</Text>
                        <Text style={{ fontSize: 12, textAlign: "center" }}>Bhilai, Kalyan College, Sector 7</Text>
                        <View style={{ flexDirection: "row", alignSelf: "center" }}>
                            <View style={{
                                width: 60,
                                height: 30,
                                backgroundColor: "rgba(217, 217, 217, 1)",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 5
                            }}>
                                <Icon name={"house"} size={23} color="black"></Icon>
                                <Text style={{ fontSize: 19, marginLeft: 5, color: "black" }}>3</Text>
                            </View>
                            <View style={{
                                width: 65,
                                height: 30,
                                backgroundColor: "rgba(217, 217, 217, 1)",
                                marginLeft: 5,
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 5,
                                padding: 2
                            }}>
                                <Text style={{
                                    fontWeight: "700"
                                }}>Parking</Text>
                            </View>
                            <View style={{
                                width: 60,
                                height: 30,
                                backgroundColor: "rgba(217, 217, 217, 1)",
                                marginLeft: 5,
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 5,
                            }}>
                                <Text style={{
                                    fontWeight: "700"
                                }}>Girls</Text>
                            </View>
                        </View>
                        <Text style={{
                            marginTop: 5,
                            fontWeight: "500",
                            color: "rgba(49, 49, 49, 1)",
                            fontSize: 18,
                            marginLeft: 7
                        }}>Rs 3000/Month</Text>

                    </View>


                </View>

            </TouchableOpacity>


            <View style={{
                width: "97%",
                alignSelf: "center",
                flexDirection: "row",
                marginTop: 10,
                backgroundColor: "#fff",
                padding: 5,
                alignItems: "center",
                elevation: 20,
                borderRadius: 8
            }}>
                <View>
                    <Image style={{
                        height: 100,
                        borderRadius: 5
                    }} source={require('../assets/roms5.png')}></Image>

                </View>


                <View >
                    <Text style={{ fontSize: 15, color: "black", fontWeight: "500", alignSelf: "center", marginLeft: 5 }}>Shankar PG & HOSTELS..</Text>
                    <Text style={{ fontSize: 12, textAlign: "center" }}>Bhilai, Kalyan College, Sector 7</Text>
                    <View style={{ flexDirection: "row", alignSelf: "center" }}>
                        <View style={{
                            width: 60,
                            height: 30,
                            backgroundColor: "rgba(217, 217, 217, 1)",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 5
                        }}>
                            <Icon name={"house"} size={23} color="black"></Icon>
                            <Text style={{ fontSize: 19, marginLeft: 5, color: "black" }}>3</Text>
                        </View>
                        <View style={{
                            width: 65,
                            height: 30,
                            backgroundColor: "rgba(217, 217, 217, 1)",
                            marginLeft: 5,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 5,
                            padding: 2
                        }}>
                            <Text style={{
                                fontWeight: "700"
                            }}>Parking</Text>
                        </View>
                        <View style={{
                            width: 60,
                            height: 30,
                            backgroundColor: "rgba(217, 217, 217, 1)",
                            marginLeft: 5,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 5,
                        }}>
                            <Text style={{
                                fontWeight: "700"
                            }}>Girls</Text>
                        </View>
                    </View>
                    <Text style={{
                        marginTop: 5,
                        fontWeight: "500",
                        color: "rgba(49, 49, 49, 1)",
                        fontSize: 18,
                        marginLeft: 7
                    }}>Rs 3000/Month</Text>

                </View>
            </View>

            <View style={{
                width: "97%",
                alignSelf: "center",
                flexDirection: "row",
                marginTop: 10,
                backgroundColor: "#fff",
                padding: 5,
                alignItems: "center",
                elevation: 20,
                borderRadius: 8
            }}>
                <View>
                    <Image style={{
                        height: 100,
                        borderRadius: 5
                    }} source={require('../assets/roms4.png')}></Image>

                </View>


                <View >
                    <Text style={{ fontSize: 15, color: "black", fontWeight: "500", alignSelf: "center", marginLeft: 5 }}>Shankar PG & HOSTELS..</Text>
                    <Text style={{ fontSize: 12, textAlign: "center" }}>Bhilai, Kalyan College, Sector 7</Text>
                    <View style={{ flexDirection: "row", alignSelf: "center" }}>
                        <View style={{
                            width: 60,
                            height: 30,
                            backgroundColor: "rgba(217, 217, 217, 1)",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 5
                        }}>
                            <Icon name={"house"} size={23} color="black"></Icon>
                            <Text style={{ fontSize: 19, marginLeft: 5, color: "black" }}>3</Text>
                        </View>
                        <View style={{
                            width: 65,
                            height: 30,
                            backgroundColor: "rgba(217, 217, 217, 1)",
                            marginLeft: 5,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 5,
                            padding: 2
                        }}>
                            <Text style={{
                                fontWeight: "700"
                            }}>Parking</Text>
                        </View>
                        <View style={{
                            width: 60,
                            height: 30,
                            backgroundColor: "rgba(217, 217, 217, 1)",
                            marginLeft: 5,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 5,
                        }}>
                            <Text style={{
                                fontWeight: "700"
                            }}>Girls</Text>
                        </View>
                    </View>
                    <Text style={{
                        marginTop: 5,
                        fontWeight: "500",
                        color: "rgba(49, 49, 49, 1)",
                        fontSize: 18,
                        marginLeft: 7
                    }}>Rs 3000/Month</Text>

                </View>


            </View>

            <View style={{
                width: "97%",
                alignSelf: "center",
                flexDirection: "row",
                marginTop: 10,
                backgroundColor: "#fff",
                padding: 5,
                alignItems: "center",
                elevation: 20,
                borderRadius: 8
            }}>
                <View>
                    <Image style={{
                        height: 100,
                        borderRadius: 5
                    }} source={require('../assets/roms3.png')}></Image>

                </View>


                <View >
                    <Text style={{ fontSize: 15, color: "black", fontWeight: "500", alignSelf: "center", marginLeft: 5 }}>Shankar PG & HOSTELS..</Text>
                    <Text style={{ fontSize: 12, textAlign: "center" }}>Bhilai, Kalyan College, Sector 7</Text>
                    <View style={{ flexDirection: "row", alignSelf: "center" }}>
                        <View style={{
                            width: 60,
                            height: 30,
                            backgroundColor: "rgba(217, 217, 217, 1)",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 5
                        }}>
                            <Icon name={"house"} size={23} color="black"></Icon>
                            <Text style={{ fontSize: 19, marginLeft: 5, color: "black" }}>3</Text>
                        </View>
                        <View style={{
                            width: 65,
                            height: 30,
                            backgroundColor: "rgba(217, 217, 217, 1)",
                            marginLeft: 5,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 5,
                            padding: 2
                        }}>
                            <Text style={{
                                fontWeight: "700"
                            }}>Parking</Text>
                        </View>
                        <View style={{
                            width: 60,
                            height: 30,
                            backgroundColor: "rgba(217, 217, 217, 1)",
                            marginLeft: 5,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 5,
                        }}>
                            <Text style={{
                                fontWeight: "700"
                            }}>Girls</Text>
                        </View>
                    </View>
                    <Text style={{
                        marginTop: 5,
                        fontWeight: "500",
                        color: "rgba(49, 49, 49, 1)",
                        fontSize: 18,
                        marginLeft: 7
                    }}>Rs 3000/Month</Text>

                </View>


            </View>


            <View style={{
                width: "97%",
                alignSelf: "center",
                flexDirection: "row",
                marginTop: 10,
                backgroundColor: "#fff",
                padding: 5,
                alignItems: "center",
                elevation: 20,
                borderRadius: 8
            }}>
                <View>
                    <Image style={{
                        height: 100,
                        borderRadius: 5
                    }} source={require('../assets/roms2.png')}></Image>

                </View>


                <View >
                    <Text style={{ fontSize: 15, color: "black", fontWeight: "500", alignSelf: "center", marginLeft: 5 }}>Shankar PG & HOSTELS..</Text>
                    <Text style={{ fontSize: 12, textAlign: "center" }}>Bhilai, Kalyan College, Sector 7</Text>
                    <View style={{ flexDirection: "row", alignSelf: "center" }}>
                        <View style={{
                            width: 60,
                            height: 30,
                            backgroundColor: "rgba(217, 217, 217, 1)",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 5
                        }}>
                            <Icon name={"house"} size={23} color="black"></Icon>
                            <Text style={{ fontSize: 19, marginLeft: 5, color: "black" }}>3</Text>
                        </View>
                        <View style={{
                            width: 65,
                            height: 30,
                            backgroundColor: "rgba(217, 217, 217, 1)",
                            marginLeft: 5,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 5,
                            padding: 2
                        }}>
                            <Text style={{
                                fontWeight: "700"
                            }}>Parking</Text>
                        </View>
                        <View style={{
                            width: 60,
                            height: 30,
                            backgroundColor: "rgba(217, 217, 217, 1)",
                            marginLeft: 5,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 5,
                        }}>
                            <Text style={{
                                fontWeight: "700"
                            }}>Girls</Text>
                        </View>
                    </View>
                    <Text style={{
                        marginTop: 5,
                        fontWeight: "500",
                        color: "rgba(49, 49, 49, 1)",
                        fontSize: 18,
                        marginLeft: 7
                    }}>Rs 3000/Month</Text>

                </View>


            </View>




        </View>
    )
}

export default Toproom;