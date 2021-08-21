import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  MaterialIcons,
  FontAwesome,
  SimpleLineIcons,
} from "@expo/vector-icons";

const Item = (props) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageBox}>
        <Image style={styles.image} source={props.item.image}></Image>
      </View>
      <View style={styles.textBox}>
        <Text style={styles.textName} numberOfLines={1}>
          {props.item.name}
        </Text>
        <Text style={styles.textNumber} numberOfLines={1}>
          {props.item.number}
        </Text>
      </View>
      <View style={styles.iconBox}>
        <FontAwesome name="phone" size={24} color="blue" />
        <MaterialIcons name="message" size={24} color="blue" />
        <SimpleLineIcons name="options-vertical" size={24} color="blue" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 35,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  imagBox: {
    flex: 0.2,
  },

  textBox: {
    flex: 0.5,
  },

  textName: {
    fontWeight: "bold",
    fontSize: 18,
  },

  textNumber: {
    fontSize: 15,
    color: "black",
  },

  iconBox: {
    flex: 0.3,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  image: {
    width: 55,
    height: 55,
    borderRadius: 100,
  },
});

export default Item;
