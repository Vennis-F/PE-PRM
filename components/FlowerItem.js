import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./IconButton";
import { storeData, getData } from "../datas/handleFavorite";
import { useEffect, useState } from "react";
import ModalDelete from "./ModalDelete";

const FlowerItem = ({ item, onReset }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const pressHandler = () => {
    navigation.navigate("Detail", { flowerId: item.id });
  };
  const changeFavoriteStatusHandler = async () => {
    let favoriteFlowerIds = await getData();
    if (onReset) onReset();

    // Empty or null
    if (favoriteFlowerIds.length === 0) {
      setIsFavorite(true);
      return storeData([item.id]);
    }
    //Add to favorites
    if (!favoriteFlowerIds.includes(item.id)) {
      setIsFavorite(true);
      return storeData([...favoriteFlowerIds, item.id]);
    }
    //Delete on favorites
    storeData(favoriteFlowerIds.filter((id) => id !== item.id));
    setIsFavorite(false);

    // storeData(null);
  };
  const isFocused = useIsFocused();
  const handleCancel = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    async function checkFavorites() {
      let favoriteFlowerIds = await getData();
      if (favoriteFlowerIds.length === 0) setIsFavorite(false);
      else {
        const checkFavorite = favoriteFlowerIds.includes(item.id);
        setIsFavorite(checkFavorite);
      }
    }
    checkFavorites();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.innerContainer}
        android_ripple={{ color: "#cbd5e1" }}
        onPress={pressHandler}
      >
        <View style={styles.titleContainer}>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <View style={styles.informationContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <IconButton
              icon={isFavorite ? "favorite" : "favorite-outline"}
              size={34}
              color="red"
              onPress={
                onReset
                  ? () => setModalVisible(true)
                  : changeFavoriteStatusHandler
              }
            />
          </View>
        </View>
      </Pressable>
      <ModalDelete
        visible={modalVisible}
        onCancel={handleCancel}
        onDeleteAll={changeFavoriteStatusHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  innerContainer: {
    overflow: "hidden",
    borderRadius: 10,
    width: "100%",
  },
  titleContainer: {},
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  image: {
    height: 200,
    width: "100%",
  },
  informationContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});

export default FlowerItem;
