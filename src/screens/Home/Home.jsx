import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Header } from "../../components";
import { AddModal, DeleteModal, TaskItem } from "./components";
import styles from "./HomeStyle";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  useGetTasksQuery,
  useAddTaskMutation,
  useDeleteTaskMutation,
} from "../../services/tasksApi";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  toggleIsComplete,
} from "../../features/tasksSlice";

const Home = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { localId } = useSelector(state => state.auth);
  const { data: tasksFromApi, error: getTasksError } =
    useGetTasksQuery(localId);
  const [idTask, setIdTask] = useState();
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalAddTask, setShowModalAddTask] = useState(false);

  const [addTaskApi, { isLoading: addingTask, error: addTaskError, refetch }] =
    useAddTaskMutation();
  const [deleteTaskApi, { isLoading: deletingTask, error: deleteTaskError }] =
    useDeleteTaskMutation();

  const handleModalDelete = id => {
    setIdTask(id);
    setShowModalDelete(true);
  };

  const handleModalAdd = () => {
    setShowModalAddTask(true);
  };

  const handleDelete = async () => {
    try {
      await deleteTaskApi({ localId: localId, taskId: idTask });
      setShowModalDelete(false);
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
    }
  };

  const handleAddTask = async newTask => {
    try {
      const response = await addTaskApi({
        localId: localId,
        task: newTask,
      });
      const addedTask = {
        id: response.data.name,
        ...newTask,
        isComplete: false,
      };
      dispatch(addTask(addedTask));
      refetch();
      setShowModalAddTask(false);
    } catch (error) {
      console.error("Error al añadir la tarea:", error);
    }
  };

  const [tasksArray, setTasksArray] = useState([]);

  useEffect(() => {
    if (tasksFromApi) {
      const updatedTasksArray = Object.values(tasksFromApi);
      setTasksArray(updatedTasksArray);
    }
  }, [tasksFromApi]);

  console.log(tasksFromApi);

  return (
    <>
      <View style={{ marginBottom: 16 }}>
        <Header title={"Lista de Tareas"} filter />
      </View>
      <View style={styles.container}>
        <FlatList
          data={tasksArray}
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
