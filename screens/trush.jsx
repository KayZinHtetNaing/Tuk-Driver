// import react from 'react';
// import { Image , StyleSheet } from 'react-native';
// import Onboarding from 'react-native-onboarding-swiper';
// import tw from 'twrnc';


// const OnBoardingScreen = () => {
//     return(
// <Onboarding 
//   pages={[
//     {
//       backgroundColor: '#fff',
//       image: <Image source={require('../assets/images/DR1.jpg')} style={tw`ml-20`} />,

//     },

//     {
//       backgroundColor: '#fff',
//       image: <Image source={require('../assets/images/DR2.jpg')} style={tw`ml-65`}/>,
   
//     },

//     {
//       backgroundColor: '#fff',
//       image: <Image source={require('../assets/images/DR3.jpg')} style={tw`ml-110`} />,
  
//     },

//     {
//       backgroundColor: '#fff',
//       image: <Image source={require('../assets/images/DR4.jpg')} style={tw`ml-20`}/>,
      
//     }
//   ]}
// />
//    );
// };
// export default OnBoardingScreen;









// // import { Image, View } from 'react-native';
// // import React from 'react';
// // import { Button } from 'react-native-elements';

// // import Onboarding from 'react-native-onboarding-swiper';

// // const Square = ({ isLight, selected }) => {
// //   let backgroundColor;
// //   if (isLight) {
// //     backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
// //   } else {
// //     backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
// //   }
// //   return (
// //     <View
// //       style={{
// //         width: 6,
// //         height: 6,
// //         marginHorizontal: 4,
// //         backgroundColor : '#000',
// //       }}
// //     />
// //   );
// // };

// // const backgroundColor = isLight => (isLight ? 'blue' : 'lightblue');
// // const color = isLight => backgroundColor(!isLight);

// // const Done = ({ isLight, ...props }) => (
// //   <Button
// //     title={'Done'}
// //     buttonStyle={{
// //       backgroundColor: backgroundColor(isLight),
// //     }}
// //     containerViewStyle={{
// //       marginVertical: 10,
// //       width: 70,
// //       backgroundColor: backgroundColor(isLight),
// //     }}
// //     textStyle={{ color: color(isLight) }}
// //     {...props}
// //   />
// // );

// // const Skip = ({ isLight, skipLabel, ...props }) => (
// //   <Button
// //     title={'Skip'}
// //     buttonStyle={{
// //       backgroundColor: backgroundColor(isLight),
// //     }}
// //     containerViewStyle={{
// //       marginVertical: 10,
// //       width: 70,
// //     }}
// //     textStyle={{ color: color(isLight) }}
// //     {...props}
// //   >
// //     {skipLabel}
// //   </Button>
// // );

// // const Next = ({ isLight, ...props }) => (
// //   <Button
// //     title={'Next'}
// //     buttonStyle={{
// //       backgroundColor: backgroundColor(isLight),
// //     }}
// //     containerViewStyle={{
// //       marginVertical: 10,
// //       width: 70,
// //       backgroundColor: backgroundColor(isLight),
// //     }}
// //     textStyle={{ color: color(isLight) }}
// //     {...props}
// //   />
// // );

// // const OnBoardingScreen = () => (
// //   <Onboarding
// //     DotComponent={Square}
// //     NextButtonComponent={Next}
// //     SkipButtonComponent={Skip}
// //     DoneButtonComponent={Done}
// //     titleStyles={{ color: 'blue' }} // set default color for the title
// //     pages={[
// //       {
// //         backgroundColor: '#fff',
// //         image: <Image source={require('../assets/images/DR1.jpg')} />,
// //         title: '  ',
// //         subtitle: '  ',
// //         titleStyles: { color: 'red' }, // overwrite default color
// //       },
// //       {
// //         backgroundColor: '#fff',
// //         image: <Image source={require('../assets/images/DR2.jpg')} />,
// //         title: '  ',
// //         subtitle: '  ',
// //       },
// //       {
// //         backgroundColor: '#fff',
// //         image: <Image source={require('../assets/images/DR3.jpg')} />,
// //         title: '  ',
// //         subtitle: "  ",
// //       },
// //     ]}
// //   />
// // );

// // export default OnBoardingScreen;







// import {StatusBar} from 'expo-status-bar';
// import react from 'react';
// import { StyleSheet , View } from 'react-native';
// import OnBoarding from './Onboarding';
// import tw from 'twrnc'


// const styles = StyleSheet.create({
//   container : {
//     flex : 1,
//     backgroundColor : '#ffffff',
//     alignItems :"center",
//     justifyContent : "center",
//   },
// });

// export default function AboutScreen() {
//   return(
//     <View style={styles.container}>
//     <OnBoarding />
//     <StatusBar style={tw`bg-white`}/>
//     </View>
//   )
// };


