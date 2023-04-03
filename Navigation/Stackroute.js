import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../Screens/Login";
import Signup from "../Screens/Signup";
import Forget from "../Screens/Forget";
import Otp from "../Screens/Otp";
const Stack = createNativeStackNavigator();
const Stackroute = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{
                headerShown: false
            }} />
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
export default Stackroute;