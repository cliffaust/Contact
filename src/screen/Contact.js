import React from "react";
import Item from "../components/Item";
import profileImage from "../../assets/image.png";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";

const Contact = () => {
  const contacts = [
    {
      name: "John Hallow",
      number: "234-342-4532",
      image: require("../../assets/image.png"),
    },
    {
      name: "Martin Lorem",
      number: "322-782-5490",
      image: require("../../assets/image.png"),
    },
    {
      name: "Johnson Jimmmy",
      number: "455-203-0000",
      image: require("../../assets/image.png"),
    },
    {
      name: "Andrew Jammie",
      number: "900-672-945",
      image: require("../../assets/image.png"),
    },
    {
      name: "John Hallow",
      number: "234-342-4532",
      image: require("../../assets/image.png"),
    },
    {
      name: "Martin Lorem",
      number: "322-782-5490",
      image: require("../../assets/image.png"),
    },
    {
      name: "Johnson Jimmmy",
      number: "455-203-0000",
      image: require("../../assets/image.png"),
    },
    {
      name: "Andrew Jammie",
      number: "900-672-945",
      image: require("../../assets/image.png"),
    },
    {
      name: "John Hallow",
      number: "234-342-4532",
      image: require("../../assets/image.png"),
    },
    {
      name: "Martin Lorem",
      number: "322-782-5490",
      image: require("../../assets/image.png"),
    },
    {
      name: "Johnson Jimmmy",
      number: "455-203-0000",
      image: require("../../assets/image.png"),
    },
    {
      name: "Andrew Jammie",
      number: "900-672-945",
      image: require("../../assets/image.png"),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.mainContainer}
        data={contacts}
        keyExtractor={(contact, index) => index.toString()}
        renderItem={({ item }) => <Item item={item}></Item>}
      ></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default Contact;
