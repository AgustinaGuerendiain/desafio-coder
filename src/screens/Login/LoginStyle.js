import { StyleSheet } from "react-native";
import { colors } from "../../contants/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  loginButton: {
    backgroundColor: colors.accent,
    width: "90%",
    height: 48,
    borderRadius: 10,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textButton: {
    color: colors.secondary,
    textTransform: "uppercase",
    fontSize: 16,
    fontFamily: "MontserratSemiBold",
  },
  containerInputs: {
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10%",
    marginTop: "15%",
  },
  textRegister: {
    color: colors.primary,
    fontFamily: "MontserratRegular",
    marginTop: "15%",
    marginBottom: "10%",
  },
});
