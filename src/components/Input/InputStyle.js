import { StyleSheet } from "react-native";
import { colors } from "../../contants/colors";

export default styles = StyleSheet.create({
  containerInput: {
    paddingBottom: 16,
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  },
  label: {
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
    marginBottom: 8,
    color: colors.primaryDark,
  },
  inputText: {
    height: 50,
    fontSize: 16,
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 10,
    paddingLeft: 8,
    fontFamily: "MontserratRegular",
  },
});
