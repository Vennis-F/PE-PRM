import { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CategoryGridTitle = ({ item, pressHandler }) => {
  //   const navigation = useNavigation<MealOverviewScreenNavigationProp>();
  //   const pressHandler = () => {
  //     navigation.navigate("MealOverview", { categoryId: item.id });
  //   };

  return (
    <View style={[styles.container, [{ backgroundColor: item.color }]]}>
      <Pressable
        android_ripple={{ color: "#cbd5e1" }}
        style={[styles.container_inner]}
        onPress={pressHandler.bind(null, item.id)}
      >
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 30,
    overflow: "hidden",
    // paddingHorizontal: 10,
  },
  container_inner: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default CategoryGridTitle;
