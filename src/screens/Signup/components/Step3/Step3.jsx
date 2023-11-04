import { View, Text } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { colors } from "../../../../contants/colors";
import styles from "./Step3Style";

const Step3 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ya casi terminamos</Text>
      <View style={styles.checkbox}>
        <BouncyCheckbox
          isChecked={false}
          onPress={() => {}}
          fillColor={colors.accent}
          unfillColor={colors.secondary}
          iconStyle={{ borderColor: "#f2f9ff" }}
          innerIconStyle={{
            borderWidth: 2,
            borderRadius: 8,
            borderColor: "#41A4FF",
          }}
        />
        <Text style={styles.label}>Acepto las bases y condiciones</Text>
      </View>
      <View style={styles.checkbox}>
        <BouncyCheckbox
          isChecked={false}
          onPress={() => {}}
          fillColor={colors.accent}
          unfillColor={colors.secondary}
          iconStyle={{ borderColor: "#f2f9ff" }}
          innerIconStyle={{
            borderWidth: 2,
            borderRadius: 8,
            borderColor: "#41A4FF",
          }}
        />
        <Text style={styles.label}>Acepto las políticas de privacidad</Text>
      </View>
      <View style={styles.checkbox}>
        <BouncyCheckbox
          isChecked={false}
          onPress={() => {}}
          fillColor={colors.accent}
          unfillColor={colors.secondary}
          iconStyle={{ borderColor: "#f2f9ff" }}
          innerIconStyle={{
            borderWidth: 2,
            borderRadius: 8,
            borderColor: "#41A4FF",
          }}
        />
        <Text style={styles.label}>Deseo recibir comunicación de Elan ©</Text>
      </View>
    </View>
  );
};

export default Step3;
