import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Roomlist from "../Screens/Roomlist";
import Singleroom from "../Screens/Signleroom";
import Sucess from "../Screens/Sucess";
import Mybooking from "../Screens/Mybooking";
import Profile from "../Screens/Profile";
const Stack = createNativeStackNavigator();

const Roomnav = () => {
    return (
        <Stack.Navigator initialRouteName="home
        ">
            <Stack.Screen name="home" component={Roomlist} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Singleroom" component={Singleroom} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Sucess" component={Sucess} options={{
                headerShown: false
            }} />
        </Stack.Navigator>

    )
}
export default Roomnav;