import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import AddDeckScreen from "../screens/AddDeckScreen/index";
const Stack = createStackNavigator();

const AddDeckStack = (props) => {
  const { navigation, route } = props;
  console.log("From Home Stack", navigation);
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="AddDeck"
        component={AddDeckScreen}
        options={({ route }) => ({
          title: "Add Deck",
          headerStyle: {
            backgroundColor: "#004156",
            borderBottomWidth: 3,
            borderBottomColor: "#FE634E",
            height: 100,
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
          headerLeft: () => (
            <Ionicons
              name={Platform.OS == "ios" ? "ios-arrow-back" : "md-arrow-back"}
              size={35}
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 20, color: "#FFFFFF", fontWeight: "bold" }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AddDeckStack;
