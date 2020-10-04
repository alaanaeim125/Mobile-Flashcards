import React, { useState } from "react";
import { View, Text} from "react-native";
import { useSelector } from "react-redux";
import AppButton from "../../components/AppButton";
import DeckItem from "../../components/DeckItem/index";
import { styles } from './styles';
const DeckScreen = (props) => {
  const [errMsg, setErrMsg] = useState("");
  const { navigation, route } = props;
  const deckName = route.params.title;
  const deck = useSelector((state) => state.decks[deckName]);

  const StartQuiz = () => {
    if (deck.questions.length == 0) {
      setErrMsg("Add One Or More Card Before Taking The Quiz");
    } else {
      navigation.navigate("QuizScreen", { title: route.params.title });
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <DeckItem item={deck} />
        <Text style={styles.deck}>Deck</Text>
      </View>

      <View style={styles.AddDeckBtn}>
        <AppButton
          title="Add Card"
          btnStyle={styles.btnStyle1}
          titleStyle={styles.titleStyle}
          onPress={() =>
            navigation.navigate("newQuestion", { title: route.params.title })
          }
        />

        <AppButton
          title="Start Quiz"
          btnStyle={styles.btnStyle2}
          titleStyle={styles.titleStyle}
          onPress={StartQuiz}
        />
        <Text style={styles.errMsg}>{errMsg}</Text>
      </View>
    </View>
  );
};

export default DeckScreen;
