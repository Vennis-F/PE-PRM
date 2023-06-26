import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("favoriteFlowers", jsonValue);
  } catch (e) {
    console.log("[storeData error]", e);
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("favoriteFlowers");
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.log("[getData error]", e);
  }
};
