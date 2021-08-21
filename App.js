import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Contact from "./src/screen/Contact";

export default function App() {
  return (
    <View style={styles.container}>
      <Contact></Contact>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
