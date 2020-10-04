import React from "react";
import { View, Text} from "react-native";
import { styles } from './styles';

const DeckItem = (props) => {
      const { item } = props;
      const { title, questions } = item;
      const totalQuestions = questions.length;
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>{totalQuestions} Card</Text>
    </View>
  );
};

export default DeckItem;
