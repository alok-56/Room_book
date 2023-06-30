import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Splashstack from "./Navigation/Splash";
import Bottomtab from "./Navigation/Bottomtab";

const App = () => {
  const [islogin, setIslogin] = useState(false)
  useEffect(() => {
    user()
  }, [])

  const user = async () => {
    const data = await AsyncStorage.getItem('users')
    if (data != null) {
      setIslogin(true)
    }
    else {
      setIslogin(false)
    }
  }

  return (
    <NavigationContainer>
      {
        islogin ? <Bottomtab></Bottomtab> : <Splashstack></Splashstack>
      }

    </NavigationContainer >
  )
}

export default App;

