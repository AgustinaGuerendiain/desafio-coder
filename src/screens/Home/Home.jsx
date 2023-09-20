import React, { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Header } from "../../components";
import tasks from "../../data/tasks";
import { AddModal, DeleteModal, TaskItem } from "./components";
import styles from "./HomeStyle";
import AntDesign from "@expo/vector-icons/AntDesign";

const Home = ({ navigation, route }) => {
  const [taskList, setTaskList] = useState(tasks);
  const [idTask, setIdTask] = useState();

  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalAddTask, setShowModalAddTask] = useState(false);

  const toggleTaskComplete = taskId => {
    const updatedTasks = taskList.map(task =>
      task.id === taskId ? { ...task, isComplete: !task.isComplete } : task,
    );
    setTaskList(updatedTasks);
  };

  const handleModalDelete = id => {
    setIdTask(id);
    setShowModalDelete(true);
  };

  const handleModalAdd = () => {
    setShowModalAddTask(true);
  };

  const handleDelete = () => {
    if (idTask) {
      const updatedTasks = taskList.filter(task => task.id !== idTask);
      setTaskList(updatedTasks);
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
    setTaskList([...taskList, nuevaTarea]);
  };

  return (
    <>
      <Header title={"Lista de Tareas"} filter />
      <View style={styles.container}>
        <FlatList
          data={taskList}
          keyExtractor={task => task.id}
          renderItem={({ item }) => (
            <TaskItem
              setShowModalDelete={setShowModalDelete}
              showModalDelete={showModalDelete}
              handleDelete={handleDelete}
              handleModal={handleModalDelete}
              toggleTaskComplete={toggleTaskComplete}
              setTaskList={setTaskList}
              taskList={taskList}
              task={item}
              navigation={navigation}
            />
          )}
        />
        <TouchableOpacity onPress={handleModalAdd} style={styles.buttonAdd}>
          <AntDesign name="plus" size={38} color={"#f2f9ff"} />
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
