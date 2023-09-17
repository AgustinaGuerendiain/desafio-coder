import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Header } from "../../components";
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from "./TaskStyle";
import { RenderItem } from "./components";

const Task = ({ task, onBack }) => {
  return (
    <View style={styles.container}>
      <Header title="Tu tarea" />

      <RenderItem title="Tarea" value={task?.title} />
      <RenderItem title="Categoria" value={task?.category} />
      <RenderItem title="Descripción" value={task?.description} />
      <RenderItem title="Dificultad" value={task?.difficulty} />

      <TouchableOpacity onPress={onBack} style={styles.buttonBack}>
        <AntDesign name="back" size={38} color={"#f2f9ff"} />
      </TouchableOpacity>
    </View>
  );
};

export default Task;
