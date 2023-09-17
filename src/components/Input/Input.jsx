import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./InputStyle";

const Input = ({ label, placeholder, onChange, value }) => {
  return (
    <View style={styles.containerInput}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        style={styles.inputText}
      />
    </View>
  );
};

export default Input;
