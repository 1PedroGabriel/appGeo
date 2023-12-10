import { Linking } from "react-native";

const openMaps = (latitude, longitude) => {
  
    if (latitude, longitude) {
        const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
        Linking.openURL(url);
    } 

}

export default openMaps;