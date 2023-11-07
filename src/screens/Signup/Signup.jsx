import { View, Text, Pressable, Image, Alert } from "react-native";
import React from "react";
import styles from "./SignupStyle";
import { useState } from "react";
import { useSignUpMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";
import Elan from "../../assets/icons/Elan";
import Step1 from "./components/Step1/Step1";
import Step2 from "./components/Step2/Step2";
import Step3 from "./components/Step3/Step3";
import { colors } from "../../contants/colors";
import { insertSession, insertUserData } from "../../db";

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [step, setStep] = useState(0);

  const [triggerSignup, result] = useSignUpMutation();

  const dispatch = useDispatch();

  const onSubmit = () => {
    triggerSignup({
      email,
      password,
    })
      .unwrap()
      .then(result => {
        insertSession({
          localId: result.localId,
          email: result.email,
          token: result.idToken,
        })
          .then(() => {
            insertUserData({
              localId: result.localId,
              name,
              lastName,
              email,
            });
            dispatch(setUser(result));
          })
          .catch(error => {
            Alert.alert("¡Error!", error.message, [
              { text: "Aceptar", onPress: () => console.log("OK") },
            ]);
          });
      })
      .catch(error => {
        Alert.alert("¡Error!", error.data.error.message, [
          { text: "Aceptar", onPress: () => console.log("OK") },
        ]);
      });
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <>
      {step === 0 && (
        <View style={styles.container}>
          <View style={styles.containerLogo}>
            <Image
              source={require("../../assets/images/elan.png")}
              style={{ marginBottom: 20 }}
            />
            <Elan />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.textWelcome}>¡Hola!</Text>
            <Text style={styles.textWelcome}>falta poco para conocernos</Text>
          </View>
          <Pressable
            style={[styles.button, { backgroundColor: colors.primary }]}
            onPress={() => navigation.navigate("Login")}>
            <Text style={styles.textButton}>Iniciar sesión</Text>
          </Pressable>
          <Pressable
            style={[styles.button, { backgroundColor: colors.accent }]}
            onPress={handleNextStep}>
            <Text style={styles.textButton}>Registrarse</Text>
          </Pressable>
        </View>
      )}
      {step > 0 && (
        <View style={styles.stepContainer}>
          <Image
            source={
              step === 1
                ? require("../../assets/images/step1.png")
                : step === 2
                ? require("../../assets/images/step2.png")
                : require("../../assets/images/step3.png")
            }
            style={{ marginBottom: 20 }}
          />

          <View style={styles.circleContainer}>
            <View
              style={[styles.circle, step >= 1 && styles.activeCircle]}></View>
            <View
              style={[styles.circle, step >= 2 && styles.activeCircle]}></View>
            <View
              style={[styles.circle, step >= 3 && styles.activeCircle]}></View>
          </View>

          {step === 1 && (
            <Step1
              name={name}
              setName={setName}
              lastName={lastName}
              setLastName={setLastName}
            />
          )}
          {step === 2 && (
            <Step2
              setPassword={setPassword}
              setEmail={setEmail}
              email={email}
              setConfirmPass={setConfirmPass}
              password={password}
              confirmPass={confirmPass}
            />
          )}
          {step === 3 && <Step3 />}

          <View style={styles.buttonContainer}>
            <Pressable onPress={handlePrevStep}>
              <Text style={[styles.textButton, { color: colors.accent }]}>
                Volver
              </Text>
            </Pressable>
            {step === 3 ? (
              <Pressable onPress={onSubmit} style={styles.buttonRegister}>
                <Text
                  style={[
                    styles.textButton,
                    { backgroundColor: colors.accent, color: colors.white },
                  ]}>
                  Registrarse
                </Text>
              </Pressable>
            ) : (
              <Pressable onPress={handleNextStep}>
                <Text style={[styles.textButton, { color: colors.accent }]}>
                  Continuar
                </Text>
              </Pressable>
            )}
          </View>

          <Text
            onPress={() => navigation.navigate("Login")}
            style={styles.textLogin}>
            ¿Ya sos usuario? Inicia sesión
          </Text>
        </View>
      )}
    </>
  );
};

export default Signup;
