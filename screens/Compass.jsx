import React from "react";
import { View } from "react-native";
import MapComponent from "./MapComponent";
import theme from "./theme/theme";
import themeContext from "./theme/themeContext";
import { useState,useContext } from "react";

const Compass = ({route}) => {
  const {message} = route.params;

  const theme=useContext(themeContext)
  const [darkMode,setDarkMode]=useState(false)
  return (
    <View style={[{ flex: 1 },{backgroundColor:theme.backgroundColor}]}>
      <MapComponent userData={message}/>
    </View>
  );
};
export default Compass;
