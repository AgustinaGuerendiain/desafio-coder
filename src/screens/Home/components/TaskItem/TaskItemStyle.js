import { StyleSheet } from "react-native";
import { colors } from "../../../../contants/colors";

export default styles = StyleSheet.create({
  cardContainer: {
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.secondary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    width: "100%",
    paddingHorizontal: 8,
  },
  containerLeft: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    justifyContent: "flex-start",
  },
  containerRight: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  textItem: {
    fontSize: 20,
    color: colors.primaryDark,
    fontFamily: "MontserratRegular",
  },
  containerDeleteButton: {
    marginLeft: 12,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: colors.primaryDark,
  },
});
