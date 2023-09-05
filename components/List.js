import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const List = ({ itemsList, onHandleModal, setItemsList }) => {
  const toggleTaskComplete = index => {
    const updatedTasks = [...itemsList];
    updatedTasks[index].isComplete = !updatedTasks[index].isComplete;
    setItemsList(updatedTasks);
  };

  const renderListItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <View style={styles.containerTitleTask}>
        <BouncyCheckbox
          isChecked={item.isComplete}
          onPress={() => toggleTaskComplete(index)}
          fillColor="#FE8360"
          unfillColor="#F2F9FF"
          iconStyle={{ borderColor: "#000" }}
          innerIconStyle={{
            borderWidth: 2,
            borderRadius: 8,
            borderColor: "#41A4FF",
          }}
        />
        <Text
          style={[
            styles.textItem,
            item.isComplete ? styles.completedText : null,
          ]}>
          {item?.value}
        </Text>
      </View>
      <TouchableOpacity
        disabled={itemsList[index].isComplete}
        style={styles.containerDeleteButton}
        onPress={() => onHandleModal(index)}>
        <AntDesign
          name="delete"
          size={20}
          color={item.isComplete ? "#C9C9C9" : "#FF4444"}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={itemsList}
        renderItem={renderListItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 25,
    marginBottom: 80,
  },
  itemContainer: {
    height: 50,
    borderRadius: 10,
    backgroundColor: "#F2F9FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  containerTitleTask: {
    flexDirection: "row",
    marginLeft: 16,
    alignItems: "center",
  },
  textItem: {
    fontSize: 20,
    paddingLeft: 8,
    color: "#004391",
  },
  containerDeleteButton: {
    marginRight: 16,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#C9C9C9",
  },
});
