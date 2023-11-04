import { StyleSheet } from "react-native";
import { colors } from "../../contants/colors";

export default styles = StyleSheet.create({
  containerInput: {
    width: "95%",
    marginBottom: 10,
  },
  label: {
    fontFamily: "MontserratMedium",
    fontSize: 16,
    color: colors.primaryDark,
  },
  inputText: {
    height: 50,
    fontSize: 16,
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 8,
    paddingLeft: 8,
    fontFamily: "MontserratRegular",
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },
});
