import { StyleSheet, Dimensions } from 'react-native';


const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#004156",
    width: width * 0.85,
    padding: 10,
    borderRadius: 15,
    paddingLeft: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
  count: {
    fontSize: 25,
    color: "white",
    fontWeight: "500",
    marginTop: 15,
  },
  img: {
    width: 100,
    height: 100,
  },
});
