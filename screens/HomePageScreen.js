import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, FLOWERS } from "../datas/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";
import FlowersList from "../components/FlowersList";
import { useEffect, useState } from "react";

export default function HomePageScreen() {
  const [cateId, setCateId] = useState("c0");
  const [defaultFlowersList, setDefaultFlowersList] = useState([]);
  const pressCategory = async (cateId) => {
    setCateId(cateId);
  };

  useEffect(() => {
    if (cateId === "c0") setDefaultFlowersList(FLOWERS);
    else {
      const flowers = FLOWERS.filter((flower) =>
        flower.categoryIds.includes(cateId)
      );
      setDefaultFlowersList(flowers);
    }
  }, [cateId]);

  return (
    <View>
      <View styles={styles.container}>
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CategoryGridTitle item={item} pressHandler={pressCategory} />
          )}
          // numColumns={2}
          horizontal={true}
        />
      </View>
      <FlowersList flowers={defaultFlowersList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
