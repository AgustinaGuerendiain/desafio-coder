import { View } from "react-native";
import React from "react";
import Input from "../../../../components/Input/Input";
import styles from "./Step1Style";

const Step1 = ({ name, setName, lastName, setLastName }) => {
  return (
    <View style={styles.container}>
      <Input
        label={"Nombre"}
        placeholder={"Tu nombre"}
        onChange={setName}
        value={name}
      />
      <Input
        label={"Apellido"}
        placeholder={"Tu apellido"}
        onChange={setLastName}
        value={lastName}
      />
    </View>
  );
};

export default Step1;
