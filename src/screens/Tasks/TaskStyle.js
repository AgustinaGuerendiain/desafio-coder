import { StyleSheet } from "react-native";
import { colors } from "../../contants/colors";

export default styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.secondary,
  },
  buttonBack: {
    backgroundColor: colors.primary,
    height: 56,
    width: 56,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
