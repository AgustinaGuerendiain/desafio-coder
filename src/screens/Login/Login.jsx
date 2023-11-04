import { View, Text, TextInput, Pressable, Image, Alert } from "react-native";
import React, { useState } from "react";
import styles from "./LoginStyle";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../services/authApi";
import { setUser } from "../../features/auth/authSlice";
import { insertSession } from "../../db";
import Input from "../../components/Input/Input";

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
        insertSession({
          localId: result.localId,
          email: result.email,
          token: result.idToken,
        })
          .then(result => console.log("result", result))
          .catch(error => {
            Alert.alert("¡Error!", error.data.error.message, [
              { text: "Aceptar", onPress: () => console.log("OK") },
            ]);
          });
      });
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/login.png")} />
      <View style={styles.containerInputs}>
        <Input
          label={"Email"}
          placeholder={"tuemail@gmail.com"}
          onChange={setEmail}
          value={email}
        />
        <Input
          label={"Contraseña"}
          placeholder={"Tu contraseña"}
          onChange={setPassword}
          value={password}
          isPass={true}
        />
      </View>
      <Pressable style={styles.loginButton} onPress={onSubmit}>
        <Text style={styles.textButton}>Iniciar sesión</Text>
      </Pressable>
      <Text
        style={styles.textRegister}
        onPress={() => navigation.navigate("Signup")}>
        ¿No tienes cuenta? Registrate
      </Text>
    </View>
  );
};

export default Login;
