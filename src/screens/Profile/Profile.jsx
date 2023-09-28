import { View, Text, Image, Alert, TouchableOpacity } from "react-native";
import React from "react";
import { Header } from "../../components";
import styles from "./ProfileStyle";

const Profile = () => {
  const AlertNewFeature = () =>
    Alert.alert("¡New feature!", "Proximamente", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <View style={styles.container}>
      <Header title={"Perfil"} />
      <View style={styles.containerImg}>
        <Image source={require("../../assets/images/profile.png")} />
        <View style={styles.containerName}>
          <Text style={styles.textTitle}>Agustina</Text>
          <Text style={styles.textTitle}>Guerendiain</Text>
        </View>
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.containerDetails}>
          <Text style={styles.containerTitle}>Datos personales</Text>
          <View style={styles.input}>
            <Text style={styles.inputTitle}>Nombre</Text>
            <Text style={styles.inputValue}>Agustina Guerendiain</Text>
          </View>
          <View style={styles.input}>
            <Text style={styles.inputTitle}>Email</Text>
            <Text style={styles.inputValue}>agusguere@gmail.com</Text>
          </View>
        </View>
        <View style={styles.containerConfigurations}>
          <Text style={styles.containerTitle}>Configuración</Text>
          <TouchableOpacity
            style={styles.containerButton}
            onPress={AlertNewFeature}>
            <Text style={styles.inputValue}>Notificaciones</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerButton}
            onPress={AlertNewFeature}>
            <Text style={styles.inputValue}>Preferencias</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerButton}
            onPress={AlertNewFeature}>
            <Text style={styles.inputValue}>Ajustes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerButton}
            onPress={AlertNewFeature}>
            <Text style={styles.inputValue}>Ayuda</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;
