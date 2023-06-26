import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import HomePageScreen from "./screens/HomePageScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import DetailScreen from "./screens/DetailScreen";
import { Ionicons } from "@expo/vector-icons";

const StackNavigator = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

// const BottomTabsNavigator = () => (
//   <BottomTabs.Navigator
//     screenOptions={{
//       headerStyle: { backgroundColor: "#0891b2" },
//       headerTintColor: "white",
//       // sceneContainerStyle: { backgroundColor: "#22d3ee" },
//       // drawerContentStyle: { backgroundColor: "#0ba3c9" },
//       // drawerActiveBackgroundColor: "#22d3ee",
//       // drawerActiveTintColor: "white",
//       // drawerInactiveTintColor: "white",
//     }}
//   >
//     <BottomTabs.Screen
//       name="HomePage"
//       component={HomePageScreen}
//       options={{
//         title: "Home Page",
//         tabBarIcon: ({ color, size, focused }) => (
//           <Ionicons
//             name="home"
//             size={size}
//             color={focused ? "#0891b2" : color}
//           />
//         ),
//       }}
//     />
//     <BottomTabs.Screen
//       name="Favorites"
//       component={FavoritesScreen}
//       options={{
//         tabBarIcon: ({ color, size, focused }) => (
//           <Ionicons
//             name="heart"
//             size={size}
//             color={focused ? "#0891b2" : color}
//           />
//         ),
//       }}
//     />
//   </BottomTabs.Navigator>
// );

// export default function App() {
//   return (
//     <>
//       <StatusBar style="auto" />
//       <NavigationContainer>
//         <StackNavigator.Navigator
//           screenOptions={{
//             headerStyle: { backgroundColor: "#0891b2" },
//             headerTintColor: "white",
//             // contentStyle: { backgroundColor: "#22d3ee" },
//           }}
//         >
//           <StackNavigator.Screen
//             name="BottomTabs"
//             component={BottomTabsNavigator}
//             options={{
//               headerShown: false,
//             }}
//           />
//           <StackNavigator.Screen name="Detail" component={DetailScreen} />
//         </StackNavigator.Navigator>
//       </NavigationContainer>
//     </>
//   );
// }

const HomeStack = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#0891b2" },
        headerTintColor: "white",
      }}
    >
      <StackNavigator.Screen
        name="HomePage"
        component={HomePageScreen}
        options={{
          title: "Home",
        }}
      />
      <StackNavigator.Screen name="Detail" component={DetailScreen} />
    </StackNavigator.Navigator>
  );
};

const FavoriteStack = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#0891b2" },
        headerTintColor: "white",
      }}
    >
      <StackNavigator.Screen name="Favorites" component={FavoritesScreen} />
      <StackNavigator.Screen name="Detail" component={DetailScreen} />
    </StackNavigator.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <BottomTabs.Navigator
          screenOptions={{
            headerShown: false,
            // tabBarButton: (props) => (
            // <TouchableOpacity
            // onPress={() => navigation.popToTop()}
            // {...props}
            // onPress={()=>}
            //   />
            // ),
          }}
        >
          <BottomTabs.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              title: "Home",
              tabBarIcon: ({ color, size, focused }) => (
                <Ionicons
                  name="home"
                  size={size}
                  color={focused ? "#0891b2" : color}
                />
              ),
            }}
            listeners={({ navigation, route }) => ({
              tabPress: (e) => {
                // Prevent default action
                e.preventDefault();

                // Do something with the `navigation` object
                navigation.navigate("HomeStack", { screen: "HomePage" });
              },
            })}
          />
          <BottomTabs.Screen
            name="FavoriteStack"
            component={FavoriteStack}
            options={{
              title: "Favorites",
              tabBarIcon: ({ color, size, focused }) => (
                <Ionicons
                  name="heart"
                  size={size}
                  color={focused ? "#0891b2" : color}
                />
              ),
            }}
            listeners={({ navigation, route }) => ({
              tabPress: (e) => {
                // Prevent default action
                e.preventDefault();

                // Do something with the `navigation` object
                navigation.navigate("FavoriteStack", { screen: "Favorites" });
              },
            })}
          />
        </BottomTabs.Navigator>
      </NavigationContainer>
    </>
  );
}
