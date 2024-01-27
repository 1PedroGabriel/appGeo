import React from "react";
import { SafeAreaView, View, StyleSheet, ScrollView } from "react-native";
import display from "./src/display";

//Valores estão bem proximos
const App = () => {

return (
  <SafeAreaView style={{flex: 1}}>

    <ScrollView>
    <View style={{backgroundColor: '#44308C'}}>

      {display()}

    </View>
    </ScrollView>

  </SafeAreaView>
)
}

export default App;