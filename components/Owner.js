import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

const Owner = () => {
    return (
        <View style={{
            width: "100%",
            height: 350
        }}>
            <Text style={{
                fontSize: 30,
                color: "black",
                marginTop: 10,
                marginLeft: 10,
                fontWeight: "bold"
            }}>Are you a owner?</Text>
            <View style={{
                marginTop: 15,
                marginLeft: 10,

            }}>
                <Text style={{ fontSize: 15 }}><Icon name="arrow-right" size={20} color="red" /> Get regular rent.</Text>
                <Text style={{ fontSize: 15 }}><Icon name="arrow-right" size={20} color="red" /> Your pg are visible to thousand of customer.</Text>
                <Text style={{ fontSize: 15 }}><Icon name="arrow-right" size={20} color="red" /> Get a true amount of your room.</Text>
                <Text style={{ fontSize: 15 }}><Icon name="arrow-right" size={20} color="red" /> Get a complete track of room.</Text>
                <Text style={{ fontSize: 15 }}><Icon name="arrow-right" size={20} color="red" /> Your room get booked in few steps.</Text>
                <Text style={{ fontSize: 15 }}><Icon name="arrow-right" size={20} color="red" /> Secure payment of monthly rent.</Text>
                <Text style={{ fontSize: 15 }}><Icon name="arrow-right" size={20} color="red" /> Get a Full dhashboard of Your room.</Text>
            </View>

        </View>
    )
}

export default Owner;