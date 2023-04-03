import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import Splashstack from "./Navigation/Splash";

const App = () => {
  return (
    <NavigationContainer>
      <Splashstack></Splashstack>

    </NavigationContainer >
  )
}

export default App;