import React, {useState} from "react";
import { Text, View, PermissionsAndroid, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import Coordinates from "./src/coordinates";
import Plane from "./src/plane";
import DefineX0Y0 from "./src/defineX0Y0";
import DefineVectorDirection from "./src/vector_direction";
import DefineVectorModules from "./src/vector_modules";
import Green from "./src/green";

//Valores estão bem proximos
const App = () => {

const [data, setData] = useState([]);
const [initPoint, setInitPoint] = useState(null);
const [vectorModules, setVectorModules] = useState([]);
const [vectorDirection, setVectorDirection] = useState([]);
const [X0Y0Points, setX0Y0Points] = useState([]);
const [currentLocation, setCurrentLocation] = useState(null);

const display = () => {

  return (
  <>

    <Text style={Estilos.LetrasBotoes}>Latitude:  {currentLocation ? currentLocation.latitude : 'Loading'}</Text>
    <Text style={Estilos.LetrasBotoes}>Longitude: {currentLocation ? currentLocation.longitude : 'Loading'}</Text>

    <TouchableOpacity onPress={() => Permission()}>
      <Text style={Estilos.LetrasBotoes}>Permisao</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => { const point = Coordinates(currentLocation.latitude, currentLocation.longitude); const newZ = Plane(...initPoint, point[0], point[1] ); point[2] = newZ; setData([...data, point]) }}>
      <Text style={Estilos.LetrasBotoes}>Add Node</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {setInitPoint(Coordinates(currentLocation.latitude, currentLocation.longitude))} }>
      <Text style={Estilos.LetrasBotoes}>Add InitPoint</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => console.log(initPoint)}>
      <Text style={Estilos.LetrasBotoes}>See Initial Point</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => console.log(data)}>
      <Text style={Estilos.LetrasBotoes}>see Node</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {setVectorModules(DefineVectorModules(data, initPoint))}}>
      <Text style={Estilos.LetrasBotoes}>Define Vector Modules</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {setVectorDirection(DefineVectorDirection(data, initPoint))}}>
      <Text style={Estilos.LetrasBotoes}>Define Vector Directions</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => console.log(vectorModules)}>
      <Text style={Estilos.LetrasBotoes}>see Vector Modules</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => console.log(vectorDirection)}>
      <Text style={Estilos.LetrasBotoes}>see Vector Directions</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {setX0Y0Points(DefineX0Y0(vectorDirection))}}>
      <Text style={Estilos.LetrasBotoes}>see all the tail points</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => { console.log(Green(vectorDirection, X0Y0Points, vectorModules)) }}>
      <Text style={Estilos.LetrasBotoes}>see Area</Text>
    </TouchableOpacity>

  </>);

}

const Permission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Cool Photo App Location Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      getCurrentLocation()
    
    } 
  } catch (err) {
    console.warn(err);
  }
};


//Transformação para o novo plano.



const getCurrentLocation = () => {
  Geolocation.getCurrentPosition(
    position=> {
      const {latitude, longitude} = position.coords;
      setCurrentLocation({latitude, longitude});
  
       
    },
    error => console.log(error.message),
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
  )
}


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

  LetrasBotoes: {
    fontSize: 20,
    color: '#000000'
  }

})

export default App;