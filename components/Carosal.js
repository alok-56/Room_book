import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, FlatList, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window')
const Begin = ({ navigation }) => {
    const [currindex, setCurrindex] = useState(0)
    const [data, setDate] = useState([
        { con: "Multiple Booking", img: require('../assets/caro1.png') },
        { con: "Secure Payment", img: require('../assets/caro1.png') },
        { con: "Self Dashboard", img: require('../assets/caro1.png') }

    ])
    return (

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <FlatList data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onScroll={(e) => {
                        const x = e.nativeEvent.contentOffset.x;
                        setCurrindex((x / width).toFixed(0))

                    }}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{
                                width: width,
                                height: height / 3.8,
                                marginTop: 15,
                                borderRadius:20,
                                backgroundColor:"#fff",
                                elevation:20,
                                marginBottom:10,

                            }}>
                                <TouchableOpacity style={{
                                    width: "94%",
                                    height: "100%",
                                    alignSelf:"center",
                                    borderRadius:10,
                                    padding:5

                                }}>
                                    <ImageBackground style={{
                                        height: "100%",
                                        width: "100%",
                                    }} source={item.img}>

                                        <View style={{
                                            alignSelf:"center",
                                            marginTop:40,
                                           alignItems:"center"
                                        }}>
                                        <Text style={{
                                            color:"#fff",
                                            fontSize:20,
                                            fontWeight:"bold"
                                        }}>Keep Updating Your Hostels.</Text>
                                        <Text style={{
                                            color:"#fff",
                                            width:250,
                                            fontSize:16,
                                            textAlign:"center"
                                        }}>it will help users to get connect with you</Text>
                                        </View>

                                        

                                        <View style={{
                                            flex: 1,
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            marginTop: 30
                                        }}>

                                            {
                                                data.map((item, index) => {
                                                    return (
                                                        <View
                                                            key={index}
                                                            style={{
                                                                height: 10,
                                                                width: 10,
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                borderRadius: 10,
                                                                backgroundColor: currindex == index ? "red" : "grey",
                                                                marginLeft: 10
                                                            }}
                                                        ></View>
                                                    )
                                                })
                                            }
                                        </View>


                                    </ImageBackground>



                                </TouchableOpacity>



                            </View>
                        )
                    }}
                />
            </View>



        </View>

    )
}
export default Begin;