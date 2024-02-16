import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Animated,
} from "react-native";
import { useState, useRef } from "react";
import slides from "./slides";
import { style } from "twrnc";
import OnboardingItem from "./OnboardingItem";

export default Onboarding = () => {
  const [currentIndex,setCurrentIndex] = useState(0);
  const scrollx = useRef(new Animated.Value(0)).current;
  // const viewableItemsChanged =useRef(({viewableItem}) => {setCurrentIndex(viewableItem[0].index)}).current;
  // const viewConfig = useRef ({viewAreaCoveragePercentThrehold : 50}).current;
  const slidesRef = useRef(null);


  return (
    <View style={styles.container}>
      <View style={{flex : 3}}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        // onScroll={Animated.event([{ nativeEvent: { contentOffset :{x : scrollx}} },
        // {useNativeDriver: false}])}
        // onViewableItemsChanged={viewableItemsChanged}
        // viewAreaCoveragePercentThreshold={50}
        scrollEventThrottle={32}
        ref={slidesRef}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
