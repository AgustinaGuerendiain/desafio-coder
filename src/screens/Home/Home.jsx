import React, { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Header } from "../../components";
import tasks from "../../data/tasks";
import { AddModal, DeleteModal, TaskItem } from "./components";
import styles from "./HomeStyle";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  toggleIsComplete,
} from "../../features/tasksSlice";

const Home = ({ navigation, route }) => {
  const taskList = useSelector(state => state.tasks);
  const [idTask, setIdTask] = useState();

  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalAddTask, setShowModalAddTask] = useState(false);

  const dispatch = useDispatch();

  const handleModalDelete = id => {
    setIdTask(id);
    setShowModalDelete(true);
  };

  const handleModalAdd = () => {
    setShowModalAddTask(true);
  };

  const handleDelete = () => {
    if (idTask) {
      dispatch(deleteTask(idTask));
    }
    setShowModalDelete(false);
  };

  const handleAddTask = newTask => {
    const ultimoID = taskList[taskList.length - 1].id;
    const nuevaTarea = {
      id: ultimoID + 1,
      ...newTask,
      isComplete: false,
    };
    dispatch(addTask(nuevaTarea));
  };

  return (
    <>
      <View style={{ marginBottom: 16 }}>
        <Header title={"Lista de Tareas"} filter />
      </View>
      <View style={styles.container}>
        <FlatList
          data={taskList}
          keyExtractor={task => task.id}
          renderItem={({ item }) => (
            <TaskItem
              handleModal={handleModalDelete}
              task={item}
              navigation={navigation}
            />
          )}
        />
        <TouchableOpacity onPress={handleModalAdd} style={styles.buttonAdd}>
          <AntDesign name="plus" size={28} color={"#f2f9ff"} />
        </TouchableOpacity>
      </View>
      <DeleteModal
        handleDelete={handleDelete}
        showModalDelete={showModalDelete}
        setShowModalDelete={setShowModalDelete}
      />
      <AddModal
        setShowModalAddTask={setShowModalAddTask}
        showModalAddTask={showModalAddTask}
        addTask={handleAddTask}
      />
    </>
  );
};

export default Home;
