import React, { useState } from "react";
import { Modal, TouchableOpacity, ScrollView, View, Text } from "react-native";
import styles from "./AddTaskStyle";
import { Input } from "../../../../../components";
import { useAddTaskMutation } from "../../../../../services/tasksApi";
import { useSelector } from "react-redux";

const AddTask = ({ showModalAddTask, setShowModalAddTask }) => {
  const { localId } = useSelector(state => state.auth);

  const [nuevaTarea, setNewTask] = useState({
    title: "",
    description: "",
    category: "",
    difficulty: "",
    isComplete: false,
  });

  const [addTask, { isLoading, error }] = useAddTaskMutation();

  const handleAddTask = async () => {
    try {
      const response = await addTask({
        localId: localId,
        task: nuevaTarea,
      });
      console.log("Tarea añadida:", response.data);
      setNewTask({
        title: "",
        description: "",
        category: "",
        difficulty: "",
        isComplete: false,
      });
      setShowModalAddTask(false);
    } catch (error) {
      console.error("Error al añadir la tarea:", error);
    }
  };

  return (
    <Modal visible={showModalAddTask} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.modalMessage}>
              <Text style={styles.textMessage}>Ingrese una nueva tarea</Text>
            </View>
            <Input
              placeholder="Titulo de la tarea"
              label={"Titulo"}
              value={nuevaTarea.title}
              onChange={text =>
                setNewTask(prevState => ({ ...prevState, title: text }))
              }
            />
            <Input
              placeholder="Descripción de la tarea"
              label={"Descripción"}
              value={nuevaTarea.description}
              onChange={text =>
                setNewTask(prevState => ({ ...prevState, description: text }))
              }
            />
            <Input
              placeholder="Categoria de la tarea"
              label={"Categoria"}
              value={nuevaTarea.category}
              onChange={text =>
                setNewTask(prevState => ({ ...prevState, category: text }))
              }
            />
            <Input
              placeholder="Dificultad de la tarea"
              label={"Dificultad"}
              value={nuevaTarea.difficulty}
              onChange={text =>
                setNewTask(prevState => ({ ...prevState, difficulty: text }))
              }
            />
            <View style={styles.containerButtons}>
              <TouchableOpacity
                onPress={() => setShowModalAddTask(false)}
                style={styles.buttonCancel}>
                <Text style={styles.buttonTextCancel}>CANCELAR</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleAddTask}
                style={styles.buttonDelete}>
                <Text style={styles.buttonTextDelete}>AGREGAR</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default AddTask;
