import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Roomlist from "../Screens/Roomlist";
import Singleroom from "../Screens/Signleroom";
const Stack = createNativeStackNavigator();

const Roomnav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={Roomlist} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Singleroom" component={Singleroom} options={{
                headerShown: false
            }} />
        </Stack.Navigator>

    )
}
export default Roomnav;