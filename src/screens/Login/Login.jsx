import { View, Text, TextInput, Pressable, Image } from "react-native";
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
      })
      .catch(error => {
        console.error("Error during login:", error.data.message);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/elan.png")} />
      <View style={styles.loginContainer}>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.inputEmail}
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Contraseña</Text>
          <TextInput
            style={styles.inputEmail}
            onChangeText={setPassword}
            value={password}
          />
        </View>
        <Pressable style={styles.loginButton} onPress={onSubmit}>
          <Text style={styles.textButton}>Iniciar sesión</Text>
        </Pressable>
        <Text>¿No tienes cuenta? Registrate</Text>
        <Pressable
          style={styles.signupButton}
          onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.textButton}>Registrarse</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
