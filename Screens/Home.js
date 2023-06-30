import React,{useEffect,useState} from "react";
import { View, Text, ImageBackground, Image, ScrollView } from "react-native";
import Begin from "../components/Carosal";
import Topplace from "../components/Categerios";
import Recomdation from "../components/Topsearch";
import Toproom from "../components/toproom";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }) => {
  const [name,setName]=useState();

  useEffect(()=>{
    user()

  },[])

  const user=async()=>{
    let username = await AsyncStorage.getItem('users')
    username = await JSON.parse(username).name;
    setName(username)
    
    
  }

  return (
    <View style={{ flex: 1 }}>

      <View style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
      }}>
        <Image style={{
        }} source={require('../assets/org1.png')}></Image>
        <Image style={{
          marginTop: 30,
          height: 35,
          width: 35

        }} source={require('../assets/org2.png')}></Image>
        <Image style={{
          marginTop: 10,
        }} source={require('../assets/org3.png')}></Image>
      </View>
      <View>
        <Text style={{
          marginLeft: 25,
          fontSize: 25,
          fontWeight: "bold",
          color: "black"
        }}>Hey {name}</Text>
        <Text style={{
          marginLeft: 25,
          fontSize: 20,
        }}>Welcome to EasyPg...</Text>
      </View>
      <ScrollView>
        <Begin></Begin>
        <Topplace></Topplace>
        <Recomdation></Recomdation>
        <Toproom></Toproom>



      </ScrollView>

    </View >
  )
}

export default Home;