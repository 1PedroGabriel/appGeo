import React, {useState, useEffect} from "react";
import { Text, View, PermissionsAndroid, TouchableOpacity, Alert, Linking } from "react-native";
import Geolocation from "@react-native-community/geolocation";


const App = () => {

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
      console.log('You can use the Location');
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const [currentLocation, setCurrentLocation] = useState(null)

const getCurrentLocation = () => {
  Geolocation.getCurrentPosition(
    position=> {
      const {latitude, longitude} = position.coords;
      setCurrentLocation({latitude, longitude});
      console.log(latitude, longitude);
       
    },
    error => console.log(error.message),
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
  )
}


const openMaps = () => {
  if (latitude, longitude) {
      const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
      Linking.openURL(url);
  } else{
    console.log('Location was not avaliable')
  }
}
return (
  <View><Text>App</Text>
  <Text>Latitude: {currentLocation ? currentLocation.latitude : 'Loading'}</Text>
  <Text>Longitude: {currentLocation ? currentLocation.longitude : 'Loading'}</Text>
  <TouchableOpacity onPress={Permission()}>
    <Text>Permisao</Text>
  </TouchableOpacity>
  </View>
)
}

export default App;