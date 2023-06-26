import { FC } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const IconButton = ({ icon, color, size, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <MaterialIcons name={icon} size={size} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});

export default IconButton;
