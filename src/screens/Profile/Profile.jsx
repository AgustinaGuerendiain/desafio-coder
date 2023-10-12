import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { Header } from "../../components";
import styles from "./ProfileStyle";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../../features/auth/authSlice";
import { usePostProfileImageMutation } from "../../services/profileApi";

const Profile = () => {
  const AlertNewFeature = () =>
    Alert.alert("¡New feature!", "Proximamente", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const image = useSelector(state => state.auth.imageCamera);
  const { localId } = useSelector(state => state.auth);

  const [triggerSaveProfileImage, result] = usePostProfileImageMutation();

  const dispatch = useDispatch();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 0.4,
      });
      if (!result.canceled) {
        dispatch(
          setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`),
        );
      }
    }
  };

  const confirmImage = () => {
    triggerSaveProfileImage({ image, localId });
  };

  return (
    <View style={styles.container}>
      <Header title={"Perfil"} />
      <View style={styles.containerImg}>
        {image ? (
          <Image style={styles.image} source={{ uri: image }} />
        ) : (
          <Image
            style={styles.image}
            source={require("../../assets/images/profile.png")}
          />
        )}
        <Pressable styles={styles.cameraButton} onPress={pickImage}>
          <Text>tomar foto de perfil</Text>
        </Pressable>
        <Pressable
          styles={styles.cameraButton}
          onPress={confirmImage}
          style={styles.cameraButton}>
          <Text>confirmar</Text>
        </Pressable>
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
