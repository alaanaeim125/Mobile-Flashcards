import React from "react";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import AddDeckScreen from "../screens/AddDeckScreen";
import AddDeckStack from "./AddDeckStack";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Decks"
      screenOptions={({ route }) => {
        const iconName = {
          Decks: "home",
          AddDeck: "add-box",
        };

        const label = {
          Decks: "Decks",
          AddDeck: "Add Deck",
        };

        return {
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name={iconName[route.name]}
              style={{ color: focused ? "blue" : "black", fontSize: 30 }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "blue" : "black", fontSize: 16 }}>
              {label[route.name]}
            </Text>
          ),
        };
      }}
    >
      <Tab.Screen name="Decks" component={HomeStack} />
      <Tab.Screen name="AddDeck" component={AddDeckStack} />
    </Tab.Navigator>
  );
}

export default HomeTabs;