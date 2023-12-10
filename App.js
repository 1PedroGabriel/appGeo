import React, {useState, useEffect} from "react";
import { Text, View, PermissionsAndroid, TouchableOpacity, Alert, Linking } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import Coordinates from "./src/coordinates";
import Plane from "./src/plane";
import Distance from "./src/distance";
import openMaps from "./src/openMaps";

const App = () => {

//Passar para radiano e transformar (x, y, z), parametrizar de plano
const [data, setData] = useState([]);
const [initPoint, setInitPoint] = useState(null);
const [vectorModules, setVectorModules] = useState([]);

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

const Planification = (actualPoint, nextPoint) => {

  nextPoint[0] = next


}

const DefineVectorModules = () => {

  for(let i=0; i<data.lenght - 1; i++){

        setVectorModules(...vectorModules, Math.sqrt( ( data[i + 1][0] - data[i][0] ) ** 2 + ( data[i + 1][1] - data[i][1]) ** 2 + ( data[i + 1][2] - data[i][2] ) ** 2 ))

  }



}

const [currentLocation, setCurrentLocation] = useState(null)

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
  <View>
  
  <Text>App</Text>
  <Text>Latitude: {currentLocation ? currentLocation.latitude : 'Loading'}</Text>
  <Text>Longitude: {currentLocation ? currentLocation.longitude : 'Loading'}</Text>

  <TouchableOpacity onPress={() => Permission()}>
    <Text>Permisao</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => {setData([...data, Coordinates(currentLocation.latitude, currentLocation.longitude)]) }}>
    <Text>Add Node</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => {setInitPoint(Coordinates(currentLocation.latitude, currentLocation.longitude))} }>
    <Text>Add InitPoint</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => console.log(initPoint)}>
    <Text>See Initial Point</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => console.log(data)}>
    <Text>see Node</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => console.log(Plane(...data[0], data[1][0], data[1][1])) }>
    <Text>Coordinates</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => console.log(Distance(data[0], data[1][0], data[1][1], Plane(...data[0], data[1][0], data[1][1])))}>
    <Text>Distance</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => openMaps(currentLocation.latitude, currentLocation.longitude)}>
    <Text>Open Maps</Text>
  </TouchableOpacity>

  </View>
)
}

export default App;