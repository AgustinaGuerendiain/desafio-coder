import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal as NewModal,
  TouchableOpacity,
} from "react-native";

const Modal = ({
  modalVisible,
  onHandleDelete,
  itemSelected,
  setModalVisible,
}) => {
  return (
    <NewModal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalMessage}>
            <Text style={styles.textMessage}>
              ¿Estas seguro de eliminar {itemSelected?.value}?
            </Text>
          </View>
          <View style={styles.containerButtons}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.buttonCancel}>
              <Text style={styles.buttonTextCancel}>CANCELAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onHandleDelete}
              style={styles.buttonDelete}>
              <Text style={styles.buttonTextDelete}>ELIMINAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </NewModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  modalMessage: {
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  textMessage: {
    fontSize: 20,
    textAlign: "center",
    color: "#004391",
  },
  containerButtons: {
    paddingTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonTextCancel: {
    fontSize: 18,
    color: "#FE8360",
  },
  buttonTextDelete: {
    fontSize: 18,
    color: "#F2F9FF",
  },
  buttonCancel: { padding: 12, borderRadius: 8, marginRight: 42 },
  buttonDelete: { backgroundColor: "#FE8360", padding: 12, borderRadius: 8 },
});
