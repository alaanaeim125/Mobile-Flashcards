import React, { useState } from "react";
import { useSelector } from "react-redux";
import { View, Text } from "react-native";
import AppButton from "../../components/AppButton";
import QuizCard from "../../components/QuizCard/index";
import {
  clearLocalNotification,
  setLocalNotification,
} from "../../utils/helpers";
import { styles } from './styles';

const QuizScreen = (props) => {

  const { navigation } = props;
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentQuestion, setCurrentQusiton] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [isFinish, setFinish] = useState(false);
  const deckName = props.route.params.title;
  const deck = useSelector((state) => state.decks[deckName]);
  const { title, questions } = deck;
  const totalQuestions = questions.length;

  const handleAnswer = (answer) => {
    answer ? setCorrect(correct + 1) : setWrong(wrong + 1);

    if (currentQuestion + 1 === totalQuestions) {
      setFinish(true);

      clearLocalNotification();
      setLocalNotification();
    } else {
      setCurrentQusiton(currentQuestion + 1);
    }
  };

  const reStartQuize = () => {
    setCurrentQusiton(0);
    setCorrect(0);
    setWrong(0);
    setFinish(false);
    setShowAnswer(false);
  };

  const QuizResult = (
    <View>
      <View>
        <Text style={styles.completeQuiz}>Quiz Completed</Text>
        <Text style={styles.answer}>
          You got {correct} of {totalQuestions} Correct Answer (
          {Math.round((correct / totalQuestions) * 100)}%)
        </Text>
      </View>

      <View>
        <AppButton
          title="Start Quiz Again"
          btnStyle={[styles.btnStyle, { backgroundColor: "#004156" }]}
          titleStyle={styles.titleStyle}
          onPress={reStartQuize}
        />

        <AppButton
          title="Return To Deck"
          btnStyle={[styles.btnStyle, { backgroundColor: "#004156" }]}
          titleStyle={styles.titleStyle}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );

  const AnswerView = (
    <View>
      <Text style={styles.answer}>Answer</Text>
      <Text style={styles.question}>{questions[currentQuestion].answer}</Text>
      <AppButton
        title="Correct Answer"
        btnStyle={[styles.btnStyle, { backgroundColor: "#2DBDE8" }]}
        titleStyle={styles.titleStyle}
        onPress={() => {
          handleAnswer(true);
        }}
      />

      <AppButton
        title="InCorrect Answer"
        btnStyle={[styles.btnStyle, { backgroundColor: "red" }]}
        titleStyle={styles.titleStyle}
        onPress={() => {
          handleAnswer(false);
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <QuizCard
        currentcard={currentQuestion}
        totalcards={totalQuestions}
        title={title}
      />

      {isFinish ? (
        QuizResult
      ) : (
        <View>
          <Text style={styles.question}>Question</Text>
          <View style={styles.questions}>
            <Text style={styles.questiontitle}>
              {questions[currentQuestion].question}
            </Text>
            {showAnswer ? (
              AnswerView
            ) : (
              <AppButton
                title="Show Answer"
                btnStyle={styles.btnStyle}
                titleStyle={styles.titleStyle}
                onPress={() => {
                  setShowAnswer(true);
                }}
              />
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default QuizScreen;

