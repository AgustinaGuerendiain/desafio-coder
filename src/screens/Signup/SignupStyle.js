import { StyleSheet } from "react-native";
import { colors } from "../../contants/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  stepContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  containerLogo: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textWelcome: {
    color: colors.primary,
    fontFamily: "MontserratMedium",
    fontSize: 25,
    marginBottom: 10,
  },
  containerText: {
    marginBottom: 30,
    marginTop: 40,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
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
  circleContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
  },
  activeCircle: {
    backgroundColor: colors.accent,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    marginTop: "8%",
    alignItems: "center",
  },
  textLogin: {
    color: colors.primary,
    fontFamily: "MontserratRegular",
    marginTop: 15,
    marginBottom: 15,
  },
  buttonRegister: {
    height: 40,
    backgroundColor: colors.accent,
    justifyContent: "center",
    paddingHorizontal: 15,
    borderRadius: 8,
  },
});
