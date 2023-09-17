import { View, Text, Modal, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "./AddTaskStyle";
import { Input } from "../../../../../components";

const AddTask = ({ showModalAddTask, setShowModalAddTask, addTask }) => {
  const [nuevaTarea, setNewTask] = useState({
    title: "",
    description: "",
    category: "",
    difficulty: "",
  });

  const handleAddTask = () => {
    addTask(nuevaTarea);
    setNewTask({
      title: "",
      description: "",
      category: "",
      difficulty: "",
    });
    setShowModalAddTask(false);
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
