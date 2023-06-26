import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import FlowerItem from "./FlowerItem";

const FlowersList = ({ flowers, onReset }) => {
  // console.log(onReset);
  return (
    <View style={onReset ? styles.container_2 : styles.container_1}>
      <FlatList
        data={flowers}
        keyExtractor={(flower) => flower.id}
        renderItem={({ item }) => <FlowerItem item={item} onReset={onReset} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container_1: {
    // flex: 1,
    padding: 30,
    marginBottom: 50,
  },
  container_2: {
    flex: 1,
    width: "100%",
    padding: 30,
  },
});

export default FlowersList;
