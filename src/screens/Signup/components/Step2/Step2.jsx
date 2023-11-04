import { View, Text } from "react-native";
import React, { useState } from "react";
import Input from "../../../../components/Input/Input";
import styles from "./Step2Style";

const Step2 = ({
  password,
  setPassword,
  setEmail,
  email,
  setConfirmPass,
  confirmPass,
}) => {
  return (
    <View style={styles.container}>
      <Input
        label={"Email"}
        placeholder={"tuemail@gmail.com"}
        onChange={setEmail}
        value={email}
      />
      <Input
        label={"Contraseña"}
        placeholder={""}
        onChange={setPassword}
        value={password}
        isPass={true}
      />
      <Input
        label={"Repite la contraseña"}
        placeholder={""}
        onChange={setConfirmPass}
        value={confirmPass}
        isPass={true}
      />
    </View>
  );
};

export default Step2;
