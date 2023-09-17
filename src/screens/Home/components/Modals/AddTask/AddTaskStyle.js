import { StyleSheet } from "react-native";
import { colors } from "../../../../../contants/colors";

export default styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    width: "90%",
    height: "70%",
  },
  modalMessage: {
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  textMessage: {
    fontSize: 20,
    textAlign: "center",
    color: colors.primaryDark,
    fontFamily: "MontserratRegular",
  },
  containerButtons: {
    paddingTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonTextCancel: {
    fontSize: 18,
    color: colors.accent,
    fontFamily: "MontserratSemiBold",
  },
  buttonTextDelete: {
    fontSize: 18,
    color: colors.secondary,
    fontFamily: "MontserratSemiBold",
  },
  buttonCancel: { padding: 12, borderRadius: 8, marginRight: 30 },
  buttonDelete: {
    backgroundColor: colors.accent,
    padding: 12,
    borderRadius: 8,
  },
  scrollViewContainer: {
    flex: 1,
  },
});
