import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from './styles';
import { useDispatch } from "react-redux";
import AppButton from "../../components/AppButton";
import { postCard } from '../../utils/api';
import { addCardToDeck } from '../../store/actions/actions';

const AddNewQuestion = (props) => {
  const { navigation, route } = props;
  const deckName = route.params.title;
  const dispatch = useDispatch();

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const onChangeQuestion = (question) => {
    setQuestion(question);
  };

  const onChangeAnswer = (answer) => {
    setAnswer(answer);
  };

  const AddQuestion = () => {
    if (question && question !== "" && answer && answer !== "") {
      const card = {
        question,
        answer,
      };

      dispatch(addCardToDeck(deckName, card));
      postCard(deckName, card).then(() => {
        navigation.goBack();
      });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.part1}>
          <Text style={styles.title}>Add Card</Text>
          <Text style={styles.desc}>
            Add a new card to the deck of flashCards
          </Text>
        </View>

        <View style={styles.part2}>
          <Text style={styles.title1}>Your Question</Text>
          <TextInput
            style={styles.inpTitle}
            placeholder="Enter Your Question ...  "
            onChangeText={(text) => onChangeQuestion(text)}
            value={question}
          />
        </View>

        <View style={styles.part3}>
          <Text style={styles.title1}>The Answer</Text>
          <TextInput
            style={styles.inpTitle}
            placeholder="Enter Your Answer ...  "
            onChangeText={(text) => onChangeAnswer(text)}
            value={answer}
          />
        </View>

        <View>
          <AppButton
            title="Add Card"
            btnStyle={styles.btnStyle}
            titleStyle={styles.titleStyle}
            // onPress={() => navigation.goBack()}
            onPress={AddQuestion}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddNewQuestion;

