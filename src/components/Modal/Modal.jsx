import React from "react";
import { Modal as NewModal, View, Text, TouchableOpacity } from "react-native";
import styles from "./ModalStyle";

const Modal = ({
  visible,
  onCancel,
  onCancelText,
  onConfirm,
  onConfirmText,
  children,
}) => {
  return (
    <NewModal
      NewModal
      visible={visible}
      animationType="slide"
      transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {children}
          <View style={styles.containerButtons}>
            <TouchableOpacity style={styles.buttonCancel} onPress={onCancel}>
              <Text style={styles.buttonTextCancel}>{onCancelText}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDelete} onPress={onConfirm}>
              <Text style={styles.buttonTextDelete}>{onConfirmText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </NewModal>
  );
};

export default Modal;
