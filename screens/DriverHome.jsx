// import { View, Text } from 'react-native'
// import React from 'react'
// import { style } from 'twrnc'
// import MapView from 'react-native-maps'

// export default function DriverHome() {
//   return (
//     <View >
//       <Text>Name</Text>
//     </View>

    
//   )
// }


import React, { useState } from 'react';
import { View, TextInput,Text,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';
import { Svg,Line } from 'react-native-svg';
import tw from 'twrnc';

const DriverHome = () => {
  const [markerPosition, setMarkerPosition] = useState({ latitude: 0, longitude: 0 });
  const handleMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setMarkerPosition({ latitude, longitude });
  };

  return (
    <ScrollView>
    <View style={tw`w-80 h-100 ml-5 bg-white mt-8`}>

      <View style={tw`flex-row ml-2 mt-2 mb-2`}>
        <Text style={tw`text-lg`}>Name       :</Text>
        <Text style={tw`text-lg ml-10`}>Ma Ma</Text>
      </View>
      <Svg height="20" width="300">
          <Line x1="0" y1="0" x2="300" y2="0" stroke="black" strokeWidth="2" />
      </Svg> 

      <View style={{flex : 1,marginTop:0.5}}>
        <Text style={tw`ml-2 text-lg mb-2`}>From</Text>
        <MapView
        style={{ flex: 1 ,marginBottom:4}}
        initialRegion={{latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0027,
          longitudeDelta: 0.0025,
        }}
        onPress={handleMapPress}
        >
        {markerPosition.latitude !== 0 && (
          <Marker coordinate={markerPosition} />
        )}
        </MapView>
      </View>
      
      <Svg height="20" width="300">
          <Line x1="0" y1="0" x2="300" y2="0" stroke="black" strokeWidth="2" />
      </Svg> 

      <View style={tw`flex-row ml-2 mt-1.5`}>
        <Text style={tw`text-lg`}>To          :</Text>
        <Text style={tw`text-lg ml-10`}>CU</Text>
      </View>


      <View style={tw`flex-row`}>
        <TouchableOpacity style={tw`bg-green-500 bg-opacity-100 mx-7 my-5 w-50 rounded-xl py-2 max-w-25 font-bold text-center`}>
          <Text style={tw`text-white font-bold text-lg ml-6`}>Accept</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`bg-red-500 bg-opacity-100 mx-7 my-5 w-50 rounded-xl py-2 max-w-25 font-bold text-center`}>
          <Text style={tw`text-white font-bold text-lg ml-6`}>Delete</Text>
        </TouchableOpacity>        
      </View>
    </View>
    </ScrollView>
  );
};

export default DriverHome;
