import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../Screens/Home";


const Stack = createNativeStackNavigator();
const Homenav = () => {
    return (
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={Home} options={{
                headerShown: false
            }} />
        </Stack.Navigator>

    )
}
export default Homenav;