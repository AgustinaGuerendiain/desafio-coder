import { View } from "react-native";
import React from "react";
import { Header } from "../../components";
import styles from "./TaskStyle";
import { RenderItem } from "./components";

const Task = ({ navigation, route }) => {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Header title={task?.title} navigation={navigation} />

      <RenderItem title="Tarea" value={task?.title} />
      <RenderItem title="Categoria" value={task?.category} />
      <RenderItem title="Descripción" value={task?.description} />
      <RenderItem title="Dificultad" value={task?.difficulty} />
    </View>
  );
};

export default Task;
