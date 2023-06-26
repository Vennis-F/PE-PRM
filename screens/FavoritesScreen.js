import { StatusBar } from "expo-status-bar";
import { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FLOWERS } from "../datas/dummy-data";
import { getData, storeData } from "../datas/handleFavorite";
import FlowersList from "../components/FlowersList";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import ModalDeleteAll from "../components/ModalDeleteAll";
import IconButton from "../components/IconButton";

export default function FavoritesScreen() {
  const [flowers, setFlowers] = useState([]);
  const [resetComponent, onResetComponent] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const resetHandler = () => {
    onResetComponent((curr) => !curr);
  };
  const isFocused = useIsFocused();

  // Modal handlers
  const handleDeleteAll = () => {
    // Xử lý logic xóa tất cả ở đây
    storeData([]);
    onResetComponent(resetHandler);
    setModalVisible(false); // Tắt modal sau khi xóa tất cả
  };
  const handleCancel = () => {
    setModalVisible(false);
  };

  // Main handler
  async function getCurrentFlowers() {
    let favoriteFlowerIds = await getData();
    let currFlowers = [];
    favoriteFlowerIds.forEach((id) => {
      currFlowers.push(FLOWERS.find((flower) => flower.id === id));
    });
    return currFlowers;
  }

  useEffect(() => {
    async function favorites() {
      let favoriteFlowers = await getCurrentFlowers();
      setFlowers((curr) => favoriteFlowers);
    }
    favorites();
  }, [resetComponent, isFocused]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={"restore-from-trash"}
          size={34}
          color={"black"}
          onPress={() => setModalVisible(true)}
        />
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      {flowers.length !== 0 ? (
        <FlowersList flowers={flowers} onReset={resetHandler} />
      ) : (
        <Text>There is no favorite flower</Text>
      )}
      <ModalDeleteAll
        visible={modalVisible}
        onCancel={handleCancel}
        onDeleteAll={handleDeleteAll}
      />
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
