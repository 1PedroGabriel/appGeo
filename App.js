import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import display from "./src/display";


//Valores estão bem proximos
const App = () => {

return (
  <SafeAreaView>

    <View style={Estilos.Main}>
  
      {display()}

    </View>

  </SafeAreaView>
)
}

const Estilos = StyleSheet.create({

  Main: {
    margin: 10,
    backgroundColor: '#AAAAFF',
    padding: 10,
    borderWidth: 10,
    borderColor: '#000000',
  },

})

export default App;