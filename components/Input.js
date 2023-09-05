import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const Input = ({ setItemsList }) => {
  const [textValue, setTextValue] = useState("");
  const [textError, setTextError] = useState(false);

  const onHandleChangeItem = text => {
    setTextError(false);
    setTextValue(text);
  };

  const addItem = () => {
    if (textValue == "") {
      setTextError(true);
    } else {
      setItemsList(prevState => [
        ...prevState,
        { id: Math.random(), value: textValue, isComplete: false },
      ]),
        setTextValue("");
      setTextError(false);
    }
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ingrese una nueva tarea"
          style={styles.input}
          value={textValue}
          onChangeText={onHandleChangeItem}
        />
        <TouchableOpacity onPress={addItem} style={styles.buttonAdd}>
          <AntDesign name="plus" size={20} color={"white"} />
        </TouchableOpacity>
      </View>
      {textError && (
        <View style={styles.containerTextError}>
          <AntDesign name="exclamationcircleo" size={16} color={"#FF4444"} />
          <Text style={styles.textError}>Por favor, ingrese una tarea</Text>
        </View>
      )}
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
  },
  input: {
    height: 50,
    fontSize: 16,
    paddingLeft: 12,
  },
  buttonAdd: {
    marginRight: 12,
    backgroundColor: "#FE8360",
    borderRadius: 100,
    padding: 4,
  },
  containerTextError: {
    flexDirection: "row",
    marginTop: 8,
    alignItems: "center",
  },
  textError: { color: "#FF4444", marginLeft: 4, fontSize: 16 },
});
