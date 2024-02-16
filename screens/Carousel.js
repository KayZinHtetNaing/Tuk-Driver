// import {View} from 'react-native';
// import react from 'react';

// export default function Carousel({children : slides}){
//     return(
//         <div>{slides}</div>
//         )
// }

import React from 'react';
import { View } from 'react-native';

export default function Carousel({ children: slides }) {
  return (
    <View>
      {slides}
    </View>
  );
}