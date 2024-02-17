import { View, StyleSheet, Text, Switch } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";
import tw from "twrnc";

export default function SettingScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View style={tw`flex-1 dark:bg-neutral-900`}>
      <View style={tw`flex-row dark:text-white items-center`}>
        <Text style={tw`text-sm p-2`}>Dark Mode</Text>
        <Switch
          style={tw`p-2`}
          value={colorScheme == "dark"}
          onChange={toggleColorScheme}
        />
      </View>
    </View>
  );
}
