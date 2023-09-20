import { StyleSheet } from "react-native";
import { colors } from "../../contants/colors";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: "100%",
    padding: 20,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "MontserratSemiBold",
    color: colors.white,
    paddingTop: 16,
    marginLeft: 16,
  },
  buttonBack: { paddingTop: 16 },
  filter: { paddingTop: 16 },
});
