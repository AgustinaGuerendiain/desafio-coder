import { View, Text } from "react-native";
import React from "react";
import styles from "./RenderItemStyle";

const RenderItem = ({ title, value }) => {
  return (
    <View style={styles.containerProp}>
      <Text style={styles.titleProp}>{title}</Text>
      <Text style={styles.valueProp}>{value}</Text>
    </View>
  );
};

export default RenderItem;
