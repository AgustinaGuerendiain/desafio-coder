import { StyleSheet } from "react-native";
import { colors } from "../../../../contants/colors";

export default styles = StyleSheet.create({
  containerProp: {
    margin: 8,
    marginHorizontal: 16,
  },
  titleProp: {
    fontSize: 20,
    color: colors.accent,
    fontFamily: "MontserratSemiBold",
  },
  valueProp: {
    fontSize: 20,
    fontFamily: "MontserratRegular",
    color: colors.primaryDark,
  },
});
