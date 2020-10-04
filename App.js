import React, { useEffect, useState } from "react";
import { StyleSheet, StatusBar } from "react-native";
import HomeTabs from "./src/AppNavigationContainer/HomeTabs";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/store/store";
import { fetchDecks } from "./src/utils/api";
import { getDecks } from './src/store/actions/actions';
import AsyncStorage from "@react-native-community/async-storage";

const App = () => {

  const [decks, setDecks] = useState();
  useEffect(() => {
    // use this to clear cards and decks
   // AsyncStorage.clear();
    fetchDecks().then((decks) => {
      store.dispatch(getDecks(decks));
      setDecks(decks);
   })
  }, []);

  return (
    decks != null && (
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <HomeTabs />
        </NavigationContainer>
      </Provider>
    )
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
