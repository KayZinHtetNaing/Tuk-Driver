import React, { useState, useEffect,useContext } from "react";
import { View, StyleSheet ,Text} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import StopSartbtn from "./StopSartbtn";
import theme from "./theme/theme";
import themeContext from "./theme/themeContext";
import tw from "twrnc";


const MapComponent = ({userData}) => {
  const theme=useContext(themeContext)
  const [darkMode,setDarkMode]=useState(false)
  const [location, setLocation] = useState(null);
  const [messageAlert, setMessageAlert] = useState("လူကြီးမင်းသည်ခရီးစဥ်ရှာဖွေခြင်းကိုရပ်နားထားပါသည်");

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Location permission not granted");
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
    // console.log(currentLocation.coords.latitude, currentLocation.coords.longitude);
    // console.log(location);

      setLocation(currentLocation.coords);
    })();
  }, []);

    // Function to handle receiving message from child component
    const handleMessageFromChild = (message) => {
      setMessageAlert(message);
    };

  return (
    <View style={styles.container}>
      <Text style={tw`text-red-600 font-700 text-center`}>{messageAlert}</Text>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0022,
            longitudeDelta: 0.0111,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="သင်၏တည်နေရာ"
          />
        </MapView>
      )}
      <StopSartbtn driverLocation= {location} userDatas={userData}  onMessage={handleMessageFromChild}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapComponent;