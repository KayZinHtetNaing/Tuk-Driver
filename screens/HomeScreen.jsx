//import 'react-native-gesture-handler';
// import MapView from 'react-native-maps';
import { StyleSheet,View, Text,Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigatonContainer} from '@react-navigation/native';
import ProfileScreen from "./ProfileScreen";
import SettingScreen from "./Setting";
import AboutScreen from "./About";
import RateusScreen from "./RateUs";
import HelpCenterScreen from "./HelpCenter";
import PrivacypolicyScreen from "./PrivacyPolicy";
import DriverHome from "./DriverHome";
import { Home } from "./Home";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
//import { Image } from "react-native-svg";
import tw from 'twrnc';

const Drawer = createDrawerNavigator();
function HomeScreen({route}) {
  const {message} = route.params;
  // console.log(message);
  return ( 
    <Drawer.Navigator initialRouteName="Home"
    screenOptions={{
      drawerStyle:{
        backgroundColor: "#FFF",
        width: 250,
      },
      headerStyle:{
        backgroundColor:"#fff"
      },
     
  
      drawerLabelStyle:{
        color:"#111",
      }

    }}
  
    >

<Drawer.Screen
        name="home"
        component={Home}
        initialParams={{ message: message }} // Pass the message prop to the Home component
        options={{
          drawerLabel: 'Home',
          title: "Home",
          drawerIcon: () => (
            <Ionicons name="home" size={20} color="black" />
          )
        }}
      />



    <Drawer.Screen
      name="Profile"
      component={ProfileScreen}
      initialParams={{ message: message }}
      options={{ drawerLabel: 'Profile',
      title: "Profile",
          drawerIcon: () => (
            <FontAwesome name="user-circle-o" size={20} color="black" />
          ),
      }}
    />
    <Drawer.Screen
      name="Setting"
      component={SettingScreen}
      options={{ drawerLabel: 'Setting',
      title: "Setting",
          drawerIcon: () => (
            <Ionicons name="settings" size={20} color="black" />
          ),
       }}
    />
    <Drawer.Screen
      name="About"
      component={AboutScreen}
      options={{  drawerLabel: "About",
          title: "About",
          drawerIcon: () => (
            <Ionicons name="ios-information-circle-outline" size={20} color="black" />
           
          ),
       }}
    />
     <Drawer.Screen
      name="Rateus"
      component={RateusScreen}
      options={{  drawerLabel: "Rateus",
          title: "Rateus",
          drawerIcon: () => (
            <Ionicons name="star-outline" size={20} color="black" />
           
          ),
       }}
    />
     <Drawer.Screen
      name="Helpcenter"
      component={HelpCenterScreen}
      options={{  drawerLabel: "Helpcenter",
          title: "Helpcenter",
          drawerIcon: () => (
            <AntDesign name="customerservice" size={20} color="black" />
           
          ),
       }}
    />
     <Drawer.Screen
      name="Privacypolicy"
      component={PrivacypolicyScreen}
      options={{  drawerLabel: "Privacypolicy",
          title: "Privacypolicy",
          drawerIcon: () => (
            <MaterialIcons name="local-police" size={20} color="black" />
           
          ),
       }}
    />
    
  </Drawer.Navigator>
);
  //    {/* <MapView style={styles.map} /> */}
  //   </View>
  // );
  // const interpolate: typeof interpolateNode = interpolateNode ?? interpolateDeprecated;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;