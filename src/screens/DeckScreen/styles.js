import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    marginTop: 50,
  },
  deck: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20,
  },
  btnStyle1: {
    width: width * 0.85,
    height: height * 0.06,
    backgroundColor: "#2E3F7F",
    borderRadius: 10,
    justifyContent: "center",
  },
  btnStyle2: {
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
  AddDeckBtn: {
    marginTop: 40,
  },
  errMsg: {
    color: "red",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 20,
  },
});
