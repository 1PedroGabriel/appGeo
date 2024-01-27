import React, {useState, useEffect} from "react";
import { Text, PermissionsAndroid, TouchableOpacity, StyleSheet, View } from "react-native"


import Geolocation from "@react-native-community/geolocation";
import Coordinates from "./coordinates";
import Plane from "./plane";
import DefineX0Y0 from "./defineX0Y0";
import DefineVectorDirection from "./vector_direction";
import DefineVectorModules from "./vector_modules";
import Green from "./green";

export default function display() {

    useEffect(() => {
      //The user dont need to ask for permissions;

      Permission();
    }, []);

    const [data, setData] = useState([]);
    const [initPoint, setInitPoint] = useState(null);
    const [vectorModules, setVectorModules] = useState([]);
    const [vectorDirection, setVectorDirection] = useState([]);
    const [X0Y0Points, setX0Y0Points] = useState([]);
    const [currentLocation, setCurrentLocation] = useState(null);

    const Permission = async () => {
        try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
            title: 'App Location Permission',
            message:
                'App needs access to your location ' +
                'so you can get the areas.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getCurrentLocation();
        
        } 
        } catch (err) {
        console.warn(err);
        }
    };
    
    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition(
        position=> {
            const {latitude, longitude} = position.coords;
            setCurrentLocation({latitude, longitude});
            getCurrentLocation();
        
            
        },
        error => console.log(error.message),
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
        );
    }
  
    const header = () => {
      
      return(<View style={style.Header}>
            <Text style={style.HeaderLetters}>Latitude:  {currentLocation ? currentLocation.latitude.toFixed(4) +'°' : 'Loading'}</Text>
            <Text style={style.HeaderLetters}>Longitude: {currentLocation ? currentLocation.longitude.toFixed(4) + '°': 'Loading'}</Text>
            </View>);

    }

    if(currentLocation) {
        return(<>

            <View style = {{backgroundColor: '#391959'}}>
            {header()}
            </View>

            <View style={{flexDirection: 'column', marginTop:30}}>

              <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={style.Buttons} onPress={() => {setInitPoint(Coordinates(currentLocation.latitude, currentLocation.longitude))} }>
                  <Text style={style.ButtonLetters}>Add InitPoint</Text>
                </TouchableOpacity>
              </View>

              <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={style.Buttons} onPress={() => { const point = Coordinates(currentLocation.latitude, currentLocation.longitude); const newZ = Plane(...initPoint, point[0], point[1] ); point[2] = newZ; setData([...data, point]) }}>
                  <Text style={style.ButtonLetters}>Add Node</Text>
                </TouchableOpacity>
              </View>

              <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={style.Buttons} onPress={() => console.log(initPoint)}>
                  <Text style={style.ButtonLetters}>See Initial Point</Text>
                </TouchableOpacity>
              </View>
            
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={style.Buttons} onPress={() => console.log(data)}>
                  <Text style={style.ButtonLetters}>see Node</Text>
                </TouchableOpacity>
              </View>
            
            
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={style.Buttons} onPress={() => {setVectorModules(DefineVectorModules(data, initPoint))}}>
                  <Text style={style.ButtonLetters}>Define Vector Modules</Text>
                </TouchableOpacity>
              </View>
  
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={style.Buttons} onPress={() => {setVectorDirection(DefineVectorDirection(data, initPoint))}}>
                  <Text style={style.ButtonLetters}>Define Vector Directions</Text>
                </TouchableOpacity>
              </View>
  
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={style.Buttons} onPress={() => console.log(vectorModules)}>
                  <Text style={style.ButtonLetters}>see Vector Modules</Text>
                </TouchableOpacity>
              </View>
            
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={style.Buttons} onPress={() => console.log(vectorDirection)}>
                  <Text style={style.ButtonLetters}>see Vector Directions</Text>
                </TouchableOpacity>
              </View>
            
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={style.Buttons} onPress={() => {setX0Y0Points(DefineX0Y0(vectorDirection))}}>
                  <Text style={style.ButtonLetters}>see all the tail points</Text>
                </TouchableOpacity>
              </View>
  
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={style.Buttons} onPress={() => { console.log(Green(vectorDirection, X0Y0Points, vectorModules)) }}>
                  <Text style={style.ButtonLetters}>see Area</Text>
                </TouchableOpacity>
              </View>

            </View>
        
          </>);

    }  

    
    return(<>{header()}</>); 
    

}


const style = StyleSheet.create({
    
    Header: {
      
      marginLeft: 20,
      marginRight: 20,
      marginTop: 50,
      marginBottom: 30,
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: '#391959'
      
    },
  
    HeaderLetters: {
      fontSize: 30,
      color: '#ACB7F2',
    },

    ButtonLetters: {
      textAlign: 'center',
      color: '#ACB7F2',
      fontSize: 20,
    },
    
    Buttons: {

      width: 200,
      height: 100,
      margin: 'auto',
      marginTop: 20,
      justifyContent: 'center',
      backgroundColor: '#BF826B',
      borderColor: '#391959', 
      borderWidth: 10


    }
  
  })

