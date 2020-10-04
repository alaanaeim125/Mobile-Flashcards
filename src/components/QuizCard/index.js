import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from './styles';

const QuizCard = (props) => {
  const { currentcard, totalcards, title } = props;
  return (
    <View style={styles.container}>
      <View style={styles.leftSideQuiz}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.count}>
          {currentcard > totalcards ? totalcards : currentcard} / {totalcards}
        </Text>
      </View>
      <View style={styles.rightSideQuiz}>
        <Image
          style={styles.img}
          source={require("../../images/flashCard.png")}
        />
      </View>
    </View>
  );
};

export default QuizCard;
