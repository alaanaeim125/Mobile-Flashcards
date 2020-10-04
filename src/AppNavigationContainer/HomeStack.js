import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePageScreen from "../screens/HomePageScreen/index";
import DeckScreen from "../screens/DeckScreen";
import AddNewQuestion from "../screens/AddNewQuestion";
import QuizScreen from "../screens/QuizScreen";
const Stack = createStackNavigator();

const HomeStack = (props) => {
  const { navigation, route } = props;
  console.log("From Home Stack", navigation);
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomePageScreen}
        options={({ route }) => ({
          title: "Home Page",
          headerStyle: {
            backgroundColor: "#004156",
            borderBottomWidth: 3,
            borderBottomColor: "#FE634E",
            height: 100,
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 22,
          },
        })}
      />

      <Stack.Screen
        name="DeckScreen"
        component={DeckScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: "#004156",
            borderBottomWidth: 3,
            borderBottomColor: "#FE634E",
            height: 100,
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 22,
          },
          headerBackTitleVisible: false,
        })}
      />

      <Stack.Screen
        name="newQuestion"
        component={AddNewQuestion}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: "#004156",
            borderBottomWidth: 3,
            borderBottomColor: "#FE634E",
            height: 100,
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 22,
          },
          headerBackTitleVisible: false,
        })}
      />

      <Stack.Screen
        name="QuizScreen"
        component={QuizScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: "#004156",
            borderBottomWidth: 3,
            borderBottomColor: "#FE634E",
            height: 100,
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 22,
          },
          headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
