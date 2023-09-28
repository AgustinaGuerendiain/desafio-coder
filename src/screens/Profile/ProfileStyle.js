import { StyleSheet } from "react-native";
import { colors } from "../../contants/colors";

export default styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  containerImg: {
    height: 288,
    backgroundColor: "rgba(65, 164, 255, 0.25)",
    justifyContent: "center",
    alignItems: "center",
  },
  containerName: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  textTitle: {
    fontSize: 24,
    fontFamily: "MontserratSemiBold",
    color: colors.accent,
  },
  containerInfo: {
    padding: 16,
  },
  containerDetails: {},
  input: { flexDirection: "row", marginBottom: 16 },
  inputTitle: {
    fontSize: 16,
    fontFamily: "MontserratMedium",
    color: colors.accent,
    marginRight: 16,
  },
  inputValue: {
    fontSize: 16,
    fontFamily: "MontserratMedium",
    color: colors.primaryDark,
  },
  containerConfigurations: {},
  containerTitle: {
    fontSize: 20,
    fontFamily: "MontserratMedium",
    color: colors.primaryDark,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    paddingBottom: 8,
    marginBottom: 8,
  },
  containerButton: {
    marginBottom: 8,
    backgroundColor: "rgba(65, 164, 255, 0.25)",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
});
