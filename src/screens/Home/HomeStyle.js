import { StyleSheet } from "react-native";
import { colors } from "../../contants/colors";

export default styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    height: "90%",
  },
  buttonAdd: {
    backgroundColor: colors.accent,
    height: 56,
    width: 56,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    right: 20,
  },
});
