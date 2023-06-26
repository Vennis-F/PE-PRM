import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import {
  CommonActions,
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import IconButton from "../components/IconButton";
import { CATEGORIES, FLOWERS } from "../datas/dummy-data";
import { getData, storeData } from "../datas/handleFavorite";

const DetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const Id = route.params.flowerId;
  const item = FLOWERS.find((f) => f.id === Id);
  const [isFavorite, setIsFavorite] = useState(false);
  const isFocused = useIsFocused();

  // Logic for change favorites status
  const changeFavoriteStatusHandler = async () => {
    let favoriteFlowerIds = await getData();
    setIsFavorite((curr) => !curr);

    // Empty or null
    if (favoriteFlowerIds === null || favoriteFlowerIds.length === 0) {
      return storeData([item.id]);
    }
    //Add to favorites
    if (!favoriteFlowerIds.includes(item.id)) {
      return storeData([...favoriteFlowerIds, item.id]);
    }
    //Delete on favorites
    storeData(favoriteFlowerIds.filter((id) => id !== item.id));

    // storeData(null);
  };

  useEffect(() => {
    async function checkFavorites() {
      let favoriteFlowerIds = await getData();
      navigation.setOptions({
        headerRight: () => (
          <IconButton
            icon={
              favoriteFlowerIds.includes(item.id)
                ? "favorite"
                : "favorite-outline"
            }
            size={34}
            color={favoriteFlowerIds.includes(item.id) ? "red" : "white"}
            onPress={changeFavoriteStatusHandler}
          />
        ),
      });
    }
    checkFavorites();
  }, [isFavorite, isFocused]);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.type}>
        <Text style={styles.typeTitle}>Type </Text>
        <Text style={styles.typeName}>
          {
            CATEGORIES.find((cate) => {
              return item.categoryIds.includes(cate.id);
            }).title
          }
        </Text>
      </View>
      <View style={styles.description}>
        <Text>{item.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 30,
  },
  image: {
    width: "100%",
    height: 400,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    // color: "#a5f3fc",
    marginTop: 16,
    marginBottom: 4,
  },
  detailTitle: {
    textAlign: "center",
    fontSize: 18,
    // color: "#0891b2",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  detailContainer: {
    marginTop: 10,
    marginHorizontal: 30,
    // borderTopColor: "#0891b2",
    borderTopWidth: 2,
    paddingTop: 5,
  },
  type: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 16,
  },
  typeTitle: {
    color: "grey",
  },
  typeName: {
    textTransform: "uppercase",
    color: "grey",
  },
  description: {
    paddingHorizontal: 10,
  },
});

export default DetailScreen;
