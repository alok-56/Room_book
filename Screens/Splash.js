import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, ImageBackground, Image } from "react-native";

const Splash = () => {
    const [load, setLoad] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 1000)

    }, [])
    return (
        <View style={{
            flex: 1,
            marginTop: 50
        }}>
            {
                load ? <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text style={{ fontSize: 50, color: "rgba(49, 50, 111, 1)", fontWeight: "600" }}>EasyPg</Text>
                    <Text style={{ fontSize: 20, color: "rgba(156, 156, 156, 1)", fontWeight: "500" }}>Find Pg Very easy</Text>
                </View> : <Image style={{
                    width: "100%",
                    height: "100%"
                }} source={require('../assets/splashexi.gif')}></Image>
            }



        </View>
    )
}

export default Splash;