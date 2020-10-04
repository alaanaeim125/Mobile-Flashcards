import { StyleSheet, Dimensions } from "react-native";


const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 20,
  },
  viewInput: {
    marginTop: height * 0.1,
  },
  inpTitle: {
    borderWidth: 1.3,
    borderColor: "#004156",
    width: width * 0.88,
    height: height * 0.06,
    borderRadius: 10,
    paddingLeft: 20,
    fontSize: 22,
  },
  titleCard: {
    fontSize: 30,
    fontWeight: "400",
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 30,
  },
  create: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#939598",
  },
  AddDeckBtn: {
    marginTop: height * 0.06,
  },
  btnStyle: {
    width: width * 0.6,
    height: height * 0.05,
    backgroundColor: "#004156",
    borderRadius: 10,
    paddingTop: 6,
  },
  titleStyle: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 23,
  },
});