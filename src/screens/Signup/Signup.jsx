import { View, Text, TextInput, Pressable, Image } from "react-native";
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
      })
      .catch(error => {
        console.error("Error during signup:", error.data.message);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/elan.png")} />
      <Text style={styles.textWelcome}>¡Hola!</Text>
      <Text style={styles.textWelcome}>falta poco para conocernos</Text>
      <View style={styles.loginContainer}>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.inputEmail}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Contraseña</Text>
          <TextInput
            style={styles.inputEmail}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Confirmar contraseña</Text>
          <TextInput
            style={styles.inputEmail}
            value={confirmPass}
            onChangeText={setConfirmPass}
          />
        </View>
        <Pressable style={styles.signupButton} onPress={onSubmit}>
          <Text style={styles.textButton}>Registrarse</Text>
        </Pressable>
        <Text>¿Ya sos usuario? Inicia sesión</Text>
        <Pressable
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}>
          <Text style={styles.textButton}>Iniciar sesión</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;
