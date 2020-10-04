import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { styles } from './styles';
import { useDispatch } from "react-redux";
import AppButton from "../../components/AppButton";
import { postDeck, fetchDecks } from "../../utils/api";
import { saveDeckTitle } from "../../store/actions/actions";

const AddDeckScreen = (props) => {
  const { navigation, route } = props;

  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const onChangeText = (text) => {
    setTitle(text);
  };

  const AddDeck = async () => {
    if (title.trim().length > 0) {
      const deck = {
        [title]: {
          title: title,
          questions: [],
        },
      };

      dispatch(saveDeckTitle(deck));
      postDeck(title);
      fetchDecks().then((decks) => {
        Alert.alert(`Deck : ${title}  Added Successfully`);
      });
      setTitle("");
    } else {
      Alert.alert(
        "Deck title missing Please enter a correct name for your deck"
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Add Deck</Text>
          <Text style={styles.create}>Create A New Deck Of FlashCards </Text>
        </View>
        <View style={styles.viewInput}>
          <Text style={styles.titleCard}>Title</Text>
          <TextInput
            style={styles.inpTitle}
            onChangeText={(text) => onChangeText(text)}
            value={title}
            placeholder="Enter Title Of Deck ..... "
          />
        </View>
        <View style={styles.AddDeckBtn}>
          <AppButton
            title="Add Deck"
            btnStyle={styles.btnStyle}
            titleStyle={styles.titleStyle}
            onPress={AddDeck}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddDeckScreen;


