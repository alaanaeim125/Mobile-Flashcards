import { StyleSheet, Dimensions } from 'react-native';


const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 30,
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
  btnStyle: {
    width: width * 0.8,
    height: height * 0.055,
    backgroundColor: "#004156",
    borderRadius: 10,
    justifyContent: "center",
  },
  titleStyle: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 23,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 15,
  },
  desc: {
    fontSize: 17,
    fontWeight: "bold",
    color: "gray",
  },
  part1: {
    marginBottom: 50,
  },
  title1: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 6,
  },
  part3: {
    marginTop: height * 0.04,
    marginBottom: height * 0.04,
  },
});
