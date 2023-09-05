import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Modal from "./components/Modal";
import List from "./components/List";
import Input from "./components/Input";

export default function App() {
  const [itemsList, setItemsList] = useState([]);
  const [itemSelected, setItemSelected] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  const onHandleDelete = () => {
    let arr = itemsList;
    arr.splice(itemSelected, 1);
    setItemsList(arr);
    setModalVisible(false);
  };

  const onHandleModal = index => {
    setModalVisible(true);
    setItemSelected(index);
  };

  return (
    <>
      <StatusBar barStyle="default" />
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Tareas</Text>
      </View>
      <View style={styles.container}>
        <Input setItemsList={setItemsList} />
        {itemsList.length == 0 ? (
          <View style={styles.containerEmptyText}>
            <Text style={styles.textEmpty}>Comienza hoy</Text>
          </View>
        ) : (
          <List
            itemsList={itemsList}
            onHandleModal={onHandleModal}
            setItemsList={setItemsList}
          />
        )}
        <Modal
          modalVisible={modalVisible}
          onHandleDelete={onHandleDelete}
          itemSelected={itemsList[itemSelected]}
          setModalVisible={setModalVisible}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#edf2f4",
  },
  containerTitle: {
    backgroundColor: "#41A4FF",
    width: "100%",
    height: 56,
    justifyContent: "center",
  },
  containerEmptyText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#F2F9FF",
    paddingLeft: 16,
  },
  textEmpty: {
    fontSize: 30,
    textAlign: "center",
    color: "#004391",
  },
});
