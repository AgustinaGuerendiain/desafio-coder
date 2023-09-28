import { StyleSheet } from "react-native";
import { colors } from "../../contants/colors";

export default styles = StyleSheet.create({
  containerGeneral: { flex: 1 },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  noTask: {
    fontFamily: "MontserratRegular",
    fontSize: 20,
    color: colors.primaryDark,
  },
  calendar: {
    height: 350,
  },
});
