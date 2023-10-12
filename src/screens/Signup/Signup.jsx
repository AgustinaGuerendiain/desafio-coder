import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import styles from "./SignupStyle";
import { useState } from "react";
import { useSignUpMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [triggerSignup, result] = useSignUpMutation();

  const dispatch = useDispatch();

  const onSubmit = () => {
    triggerSignup({
      email,
      password,
    })
      .unwrap()
      .then(result => {
        dispatch(setUser(result));
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text>Signup to start</Text>
        <TextInput
          style={styles.inputEmail}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.inputEmail}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.inputEmail}
          value={confirmPass}
          onChangeText={setConfirmPass}
        />
        <Pressable style={styles.loginButton} onPress={onSubmit}>
          <Text>Signup</Text>
        </Pressable>
        <Text>Already have an account?</Text>
        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}>
          <Text>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;
