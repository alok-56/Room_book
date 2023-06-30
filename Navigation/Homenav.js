import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../Screens/Home";
import Singleroom from "../Screens/Signleroom";

const Stack = createNativeStackNavigator();
const Homenav = () => {
    return (
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={Home} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Room" component={Singleroom} options={{
                headerShown: false
            }} />
        </Stack.Navigator>

    )
}
export default Homenav;