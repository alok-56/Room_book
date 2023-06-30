import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from "../Screens/Profile";
import Mybooking from "../Screens/Mybooking";
import Cancelled from "../Screens/Cancelled";
import Payment from "../Screens/Payment";
import Transition from "../Screens/Transition";
import Ownerinfo from "../Screens/Ownerinfo";
import Refund from "../Screens/Refund";
import Mapcom from "../Screens/Mapcom";
import Login from "../Screens/Login";
import Bottomtab from "./Bottomtab";
import Stackroute from "./Stackroute";



const Stack = createNativeStackNavigator();
const Profilenav = () => {
    return (
        <Stack.Navigator initialRouteName="pro">
            <Stack.Screen name="pro" component={Profile} options={{
                headerShown: false
            }} />
            <Stack.Screen name="booking" component={Mybooking} options={{
                headerShown: false
            }} />
            <Stack.Screen name="cancel" component={Cancelled} options={{
                headerShown: false
            }} />
            <Stack.Screen name="payment" component={Payment} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Transition" component={Transition} options={{
                headerShown: false
            }} />
            <Stack.Screen name="owner" component={Ownerinfo} options={{
                headerShown: false
            }} />
            <Stack.Screen name="map" component={Mapcom} options={{
                headerShown: false
            }} />
            <Stack.Screen name="refund" component={Refund} options={{
                headerShown: false
            }} />

        </Stack.Navigator>

    )
}
export default Profilenav;