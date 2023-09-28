import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Card } from "../../../../components";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from "./TaskItemStyle";
import { colors } from "../../../../contants/colors";
import { useDispatch } from "react-redux";
import { toggleIsComplete } from "../../../../features/tasksSlice";

const TaskItem = ({ task, handleModal, navigation }) => {
  const dispatch = useDispatch();

  const toggleTaskComplete = () => {
    dispatch(toggleIsComplete(task.id));
  };

  return (
    <Card style={styles.cardContainer}>
      <View style={styles.containerLeft}>
        <BouncyCheckbox
          isChecked={task?.isComplete}
          onPress={() => toggleTaskComplete(task?.id)}
          fillColor={colors.accent}
          unfillColor={colors.secondary}
          iconStyle={{ borderColor: "#f2f9ff" }}
          innerIconStyle={{
            borderWidth: 2,
            borderRadius: 8,
            borderColor: "#41A4FF",
          }}
        />
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[
            styles.textItem,
            task.isComplete ? styles.completedText : null,
          ]}>
          {task?.title}
        </Text>
      </View>
      <View style={styles.containerRight}>
        <TouchableOpacity
          disabled={task.isComplete}
          onPress={() => navigation.navigate("Task", { task })}>
          <AntDesign
            name="arrowsalt"
            size={20}
            color={task.isComplete ? colors.disabled : colors.primaryDark}
          />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={task?.isComplete}
          style={styles.containerDeleteButton}
          onPress={() => handleModal(task?.id)}>
          <AntDesign
            name="delete"
            size={20}
            color={task.isComplete ? colors.disabled : colors.danger}
          />
        </TouchableOpacity>
      </View>
    </Card>
  );
};

export default TaskItem;
