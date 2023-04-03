import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "../Screens/Splash";
import Slide1 from "../Screens/Slide1";
import Slide2 from "../Screens/Slide2";
import Slide3 from "../Screens/Slide3";
import Login from "../Screens/Login";
import Signup from '../Screens/Signup';
import Forget from '../Screens/Forget';
import Otp from "../Screens/Otp";
import Bottomtab from '../Navigation/Bottomtab'
import Stackroute from '../Navigation/Stackroute'
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();
const Splashstack = () => {
  const [load, setLoad] = useState(true)
  const [islogin, setIslogin] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 4000)
    const data = AsyncStorage.getItem('users')
    if (data != null) {
      setIslogin(true)
    }

  }, [])
  return (
    <Stack.Navigator>
      {
        load ? <Stack.Screen name="splash" component={Splash} options={{
          headerShown: false
        }} /> : null
      }
      <Stack.Screen name="Slide1" component={Slide1} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Slide2" component={Slide2} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Slide3" component={Slide3} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Login" component={Login} options={{
        headerShown: false
      }} />
      {
        islogin ? <Stack.Screen name="Bottom" component={Bottomtab} options={{
          headerShown: false
        }} /> : null
      }
      <Stack.Screen name="Signup" component={Signup} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Forget" component={Forget} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Otp" component={Otp} options={{
        headerShown: false
      }} />



    </Stack.Navigator>

  )
}

export default Splashstack;