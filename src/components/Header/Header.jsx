import { Text, View, TouchableOpacity, Alert } from "react-native";
import React from "react";
import styles from "./HeaderStyle";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = ({ title, navigation, filter }) => {
  const AlertNewFeature = () =>
    Alert.alert("¡New feature!", "Proximamente filtros", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {navigation && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.buttonBack}>
            <AntDesign name="back" size={20} color={"#f2f9ff"} />
          </TouchableOpacity>
        )}
        <Text style={styles.text} ellipsizeMode="tail">
          {title}
        </Text>
      </View>
      {filter && (
        <TouchableOpacity onPress={AlertNewFeature} style={styles.filter}>
          <Ionicons name="filter" size={20} color={"#f2f9ff"} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
