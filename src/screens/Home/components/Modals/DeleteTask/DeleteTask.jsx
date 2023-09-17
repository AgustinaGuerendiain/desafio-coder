import { View, Text } from "react-native";
import React from "react";
import styles from "./DeleteTaskStyle";
import Modal from "../../../../../components/Modal/Modal";

const DeleteTask = ({ showModalDelete, setShowModalDelete, handleDelete }) => {
  return (
    <Modal
      visible={showModalDelete}
      onCancel={() => setShowModalDelete(false)}
      onCancelText="CANCELAR"
      onConfirm={handleDelete}
      onConfirmText="ELIMINAR">
      <View style={styles.modalMessage}>
        <Text style={styles.textMessage}>
          ¿Estas seguro de eliminar esta tarea?
        </Text>
      </View>
    </Modal>
  );
};

export default DeleteTask;
