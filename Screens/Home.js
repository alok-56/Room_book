import React from "react";
import { View, Text, ImageBackground, Image, ScrollView } from "react-native";
import Categerios from "../components/Categerios";
import Owner from "../components/Owner";
import Topsearch from "../components/Topsearch";
import Who from "../components/Who";

const Home = ({ navigation }) => {

  return (
    <View style={{ flex: 1 }}>

      <ImageBackground source={require('../assets/bac.png')} style={{ height: "100%", weight: "100%" }}>
        <View style={{ marginTop: 30 }}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            {/* <Image style={{ height: 50, width: 230, }} source={require('../assets/log.png')}></Image> */}
            <Text style={{
              fontWeight:"bold",
              fontSize:30,
              color:"black",
              
            }}>EasyPG</Text>

          </View>

          <ScrollView>
            <View>
              <Text style={{ margin: 20, fontSize: 15, color: "black", fontWeight: "bold" }}>Exlpore your home by nearby </Text>
              <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                <View >
                  <Image style={{ width: 60, height: 60, borderRadius: 80, borderColor: "black", borderWidth: 1 }} source={require('../assets/near.jpg')} />
                  <Text style={{ textAlign: "center" }}>Nearby</Text>
                </View>
                <View >
                  <Image style={{ width: 60, height: 60, borderRadius: 80, borderColor: "black", borderWidth: 1 }} source={require('../assets/surya.jpg')} />
                  <Text style={{ textAlign: "center" }}>Surya Mall</Text>
                </View>
                <View >
                  <Image style={{ width: 60, height: 60, borderRadius: 80, borderColor: "black", borderWidth: 1 }} source={require('../assets/awanti.jpg')} />
                  <Text style={{ textAlign: "center" }}>Avantibai</Text>
                </View>
                <View >
                  <Image style={{ width: 60, height: 60, borderRadius: 80, borderColor: "black", borderWidth: 1 }} source={require('../assets/puri.jpg')} />
                  <Text style={{ textAlign: "center" }}>Puri iti</Text>
                </View>


              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: 10 }}>
                <View >
                  <Image style={{ width: 60, height: 60, borderRadius: 80, borderColor: "black", borderWidth: 1 }} source={require('../assets/shanti.jpg')} />
                  <Text style={{ textAlign: "center" }}>Shanti Nagar</Text>
                </View>
                <View >
                  <Image style={{ width: 60, height: 60, borderRadius: 80, borderColor: "black", borderWidth: 1 }} source={require('../assets/rungta.jpg')} />
                  <Text style={{ textAlign: "center" }}>RCET</Text>
                </View>
                <View >
                  <Image style={{ width: 60, height: 60, borderRadius: 80, borderColor: "black", borderWidth: 1 }} source={require('../assets/shra.jpg')} />
                  <Text style={{ textAlign: "center" }}>SIMS </Text>
                </View>
                <View >
                  <Image style={{ width: 60, height: 60, borderRadius: 80, borderColor: "black", borderWidth: 1 }} source={require('../assets/girl.png')} />
                  <Text style={{ textAlign: "center" }}>Kokha</Text>
                </View>
              </View>
            </View>
            <Topsearch></Topsearch>
            <Categerios></Categerios>
            <Owner></Owner>
          </ScrollView>
        </View>

      </ImageBackground>



    </View >
  )
}

export default Home;