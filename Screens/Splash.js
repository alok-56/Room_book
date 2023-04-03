import React from "react";
import { View, Text, StatusBar, ImageBackground, Image } from "react-native";

const Splash = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "rgb(175,238,238)"
        }}>
            <ImageBackground style={{
                width: "100%", height: "100%"
            }} source={require('../assets/bac.png')}>

                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Image style={{
                        height:200,
                        width:470
                    }} source={require('../assets/logo1.png')}></Image>
                    {/* <View style={{
                        width: 300,
                        height: 4,
                        backgroundColor: "black",
                        position: "relative",
                        bottom: "1%"
                    }}></View>
                    <Text style={{
                        position: "relative",
                        bottom: "4%",
                        left: "29%",
                        fontSize: 17
                    }}>Loading...</Text> */}
                </View>


            </ImageBackground>



        </View>

    )
}

export default Splash;