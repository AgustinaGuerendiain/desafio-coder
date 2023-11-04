import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Header } from "../../components";
import styles from "./ProfileStyle";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../../features/auth/authSlice";
import { usePostProfileImageMutation } from "../../services/profileApi";
import * as ExpoLocation from "expo-location";
import { useState } from "react";
import { useEffect } from "react";

const Profile = ({ navigation }) => {
  const AlertNewFeature = () =>
    Alert.alert("¡New feature!", "Proximamente", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const image = useSelector(state => state.auth.imageCamera);
  const { localId } = useSelector(state => state.auth);
  const [myLocation, setMyLocation] = useState({ latitude: "", longitude: "" });
  const [error, setError] = useState("");
  const [isPressableVisible, setIsPressableVisible] = useState(false);
  const [isMapVisible, setIsMapVisible] = useState(false);

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
        setIsPressableVisible(true);
      } else {
        Alert.alert(
          "Permiso de cámara denegado",
          "Por favor, otorga permisos para acceder a la cámara en la configuración de tu dispositivo.",
        );
      }
    }
  };

  const confirmImage = () => {
    triggerSaveProfileImage({ image, localId })
      .unwrap()
      .then(result => {
        setIsPressableVisible(false);
      });
  };

  useEffect(() => {
    (async () => {
      let { status } = await ExpoLocation.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("permission to access location was denied");
      }
      let location = await ExpoLocation.getCurrentPositionAsync({});
      setMyLocation({
        latitude: location?.coords.latitude,
        longitude: location?.coords.longitude,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Header title={"Perfil"} logout={true} />
      <View style={styles.containerImg}>
        <View style={styles.imageContainer}>
          {image ? (
            <Image style={styles.image} source={{ uri: image }} />
          ) : (
            <Image
              style={styles.image}
              source={require("../../assets/images/profile.png")}
            />
          )}
        </View>
        <View style={styles.containerName}>
          <Text style={styles.textTitle}>Agustina</Text>
          <Text style={styles.textTitle}>Guerendiain</Text>
        </View>
      </View>
      <View style={styles.containerInfo}>
        <ScrollView>
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
              onPress={pickImage}>
              <Text style={styles.inputValue}>Cambiar foto de perfil</Text>
            </TouchableOpacity>
            {isPressableVisible && (
              <TouchableOpacity
                style={styles.containerButtonConfirmImage}
                onPress={confirmImage}>
                <Text style={styles.inputValue}>Confirmar cambio de foto</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.containerButton}
              onPress={() => setIsMapVisible(true)}>
              <Text style={styles.inputValue}>Ver mi ubicación</Text>
            </TouchableOpacity>
            {isMapVisible && (
              <TouchableOpacity
                style={styles.containerButtonConfirmImage}
                onPress={() => setIsMapVisible(false)}>
                {myLocation ? (
                  <View style={styles.withoutLocation}>
                    <Text style={styles.inputValue}>
                      Lat: {myLocation.latitude}, Longitude:{" "}
                      {myLocation.longitude}
                    </Text>
                  </View>
                ) : (
                  <View>
                    <Text style={styles.inputValue}>{error}</Text>
                  </View>
                )}
                <Text style={styles.inputValue}>Cerrar ubicacion</Text>
              </TouchableOpacity>
            )}
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
        </ScrollView>
      </View>
    </View>
  );
};

export default Profile;
