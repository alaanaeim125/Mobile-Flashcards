import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import DeckItem from "../../components/DeckItem";
import { styles } from './styles';

const HomePageScreen = (props) => {
  const { navigation } = props;

  const decks = useSelector((state) => state.decks);

  var res = Object.keys(decks).map(function (name) {
    var obj = {};
    obj[name] = decks[name];
    return obj;
  });

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.countDecks}>{res.length} Decks</Text>
      <View style={styles.container}>
        <FlatList
          data={Object.values(decks)}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.title}
              onPress={() =>
                navigation.navigate("DeckScreen", { title: item.title })
              }
            >
              <DeckItem item={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.title}
        />
      </View>
    </View>
  );
};

export default HomePageScreen;


