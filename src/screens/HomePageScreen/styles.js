import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 60,
  },
  countDecks: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: width * 0.08,
    marginTop: 20,
    marginBottom: 20,
  },
});
