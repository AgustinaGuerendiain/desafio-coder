import { StyleSheet } from "react-native";
import { colors } from "../../contants/colors";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 20,
    marginBottom: 16,
  },
  text: {
    fontSize: 20,
    fontFamily: "MontserratSemiBold",
    color: colors.white,
    paddingTop: 16,
  },
});
