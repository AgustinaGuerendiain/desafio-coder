import { StyleSheet } from "react-native";
import { colors } from "../../../../contants/colors";

export default styles = StyleSheet.create({
  container: {
    width: "95%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  title: {
    color: colors.primaryDark,
    fontFamily: "MontserratMedium",
    fontSize: 25,
    marginTop: 20,
    marginBottom: 30,
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    marginVertical: 15,
    marginLeft: 20,
  },
  label: {
    color: colors.primaryDark,
    fontFamily: "MontserratRegular",
    fontSize: 16,
  },
});
