import { StyleSheet } from "react-native";
import { colors } from "../../contants/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  inputEmail: {
    backgroundColor: colors.secondary,
    height: 40,
    borderRadius: 8,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  input: { width: "95%" },
  loginButton: {
    backgroundColor: colors.primary,
    width: "95%",
    height: 48,
    borderRadius: 8,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  signupButton: {
    backgroundColor: colors.accent,
    width: "95%",
    height: 48,
    borderRadius: 8,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: colors.secondary,
    textTransform: "uppercase",
    fontSize: 14,
    fontFamily: "MontserratSemiBold",
  },
  inputLabel: {
    color: colors.primaryDark,
    fontFamily: "MontserratMedium",
    fontSize: 12,
  },
});
