import React from "react";
import { View, Text } from "react-native";
import styles from "./DeleteTaskStyle";
import Modal from "../../../../../components/Modal/Modal";
import { useDeleteTaskMutation } from "../../../../../services/tasksApi";
import { useSelector } from "react-redux";

const DeleteTask = ({ showModalDelete, setShowModalDelete }) => {
  const { localId } = useSelector(state => state.auth);
  const [deleteTask, { isLoading, error }] = useDeleteTaskMutation();

  const handleDelete = async () => {
    try {
      await deleteTask({ localId: localId, taskId: "idDeLaTarea" });
      setShowModalDelete(false);
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
    }
  };

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
