import React from "react";
import { WebView } from 'react-native-webview';
import { View } from "react-native";

const Mapcom = () => {
    return (
        <View style={{ flex: 1, marginBottom: 80 }}>
            <WebView source={{ uri: 'https://www.google.com/maps?q=21.2282255,81.3437412&z=17&hl=en' }} />
        </View>
    )
}

export default Mapcom;