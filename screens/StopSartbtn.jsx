
import axios from 'axios';
import React, { useRef, useState,useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';

export const screenWidth = Dimensions.get('window').width;
let componentWidth = screenWidth;

const StopSartbtn = ({driverLocation,userDatas,onMessage}) => {

  // const[messageAlert,setMessage] = useState("လူကြီးမင်းသည်ခရီးစဥ်ရှာဖွေခြင်းကိုရပ်နားထားပါသည်");
  const [driverLocationId, setDriverLocationId] = useState(null);

  const createDriverdata = async (driverProfile) => {
    try {
      const { data } = await axios.post("http://192.168.43.239:3000/driverLocation", driverProfile);
      // console.log("Data posted successfully:", data);
      const newDriverLocationId =data._id; // Assuming "_id" is the field for the unique identifier
      setDriverLocationId(newDriverLocationId); // Store the ID in your component state
    
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  



  const deleteDriverData = async () => {
    try {
      const response = await axios.delete(`http://192.168.43.239:3000/driverLocation/${driverLocationId}`);
      console.log('Data deleted successfully');
    } catch (error) {s
      console.error('Error deleting data:', error);
    }
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = () => {
    if (activeIndex === 0) {
      slideRight();
      setActiveIndex(1);
    } else {
      slideLeft();
      setActiveIndex(0);
    }
  };

  const handleViewRef = useRef(null);

  const slideRight = () =>{ 
    handleViewRef.current.animate({
      0: {
        translateX: 0,
      },
      0.5: {
        translateX: 100,
      },
      1: {
        translateX: componentWidth / 2 - 5,
      },
    })

    const {name,phoneNumber,password,licenseNo,NRC,address,profile} = userDatas;
    const latitude = driverLocation.latitude;
    const longitude = driverLocation.longitude;
    
    const driverProfile={name,phoneNumber,latitude,longitude,licenseNo,profile}
    // console.log(driverProfile);
    createDriverdata(driverProfile);
    console.log("I am start");
    onMessage("လူကြီးမင်းသည်ခရီးသည်ရှာဖွေခြင်းကိုလုပ်ဆောင်နေပါသည်");

    Alert.alert("ခရီးသည်ရှာဖွေမှာ ေနပါသည်");
  // console.log(driverLocation);

};

    const slideLeft = () =>{ 
        handleViewRef.current.animate({
        0: {
            translateX: componentWidth / 2 - 5,
        },
        0.5: {
            translateX: componentWidth / 4,
        },
        1: {
            translateX: 0,
        },
        })
    console.log("I am stop");
    onMessage("လူကြီးမင်းသည်ခရီးစဥ်ရှာဖွေခြင်းကိုရပ်နားထားပါသည်");
    Alert.alert("ခရီးသည်ရှာေဖွခြင်းကိုရပ်မည်")

    deleteDriverData();

    };
  
  return (
    <TouchableWithoutFeedback onPress={updateIndex}>
      <View
        style={btnstyles.backgroundSwitch}
        onLayout={event => {
          componentWidth = event.nativeEvent.layout.width;
        }}
      >
        <Animatable.View
          duration={500}
          style={btnstyles.buttonSwitch}
          ref={handleViewRef}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={[btnstyles.textOption]}>ခရီးစဉ်ရှိသည်</Text>
          <Text style={[btnstyles.textOption]}>ခရီးစဉ်ရှာဖွေမည်</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const btnstyles = StyleSheet.create({
  backgroundSwitch: {
    backgroundColor: 'orange',
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
  },
  textOption: {
    width: '50%',
    textAlign: 'center',
  },
  buttonSwitch: {
    position: 'absolute',
    backgroundColor: 'white',
    height: '80%',
    width: '48%',
    borderRadius: 100,
    left: '2%',
    right: '2%',
  },
});

export default StopSartbtn;