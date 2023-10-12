import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./LoginStyle";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../services/authApi";
import { setUser } from "../../features/auth/authSlice";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [triggerLogin, result] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    triggerLogin({
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
        <Text>Login to start</Text>
        <TextInput
          style={styles.inputEmail}
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.inputEmail}
          onChangeText={setPassword}
          value={password}
        />
        <Pressable style={styles.loginButton} onPress={onSubmit}>
          <Text>Login</Text>
        </Pressable>
        <Text>No have an account?</Text>
        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate("Signup")}>
          <Text>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
