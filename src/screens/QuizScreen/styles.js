import { StyleSheet, Dimensions } from 'react-native';


const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 30,
  },
  question: {
    fontSize: 24,
    fontWeight: "bold",
  },
  questions: {
    marginVertical: 40,
  },
  questiontitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
  },
  questionAnswer: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 20,
  },
  btnStyle: {
    width: width * 0.85,
    height: height * 0.06,
    backgroundColor: "#0070A5",
    borderRadius: 10,
    marginTop: 30,
    justifyContent: "center",
  },
  titleStyle: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 23,
  },
  completeQuiz: {
    fontSize: 25,
    fontWeight: "600",
    marginTop: 30,
  },
  answer: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 30,
  },
});
