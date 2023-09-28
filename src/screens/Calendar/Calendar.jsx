import { View, Text } from "react-native";
import React from "react";
import { Calendar as CalendarLibrary } from "react-native-calendars";
import { Header } from "../../components";
import { colors } from "../../contants/colors";
import styles from "./CalendarStyle";

const Calendar = () => {
  return (
    <View style={styles.containerGeneral}>
      <Header title={"Calendario"} />
      <CalendarLibrary
        current={"2023-09-01"}
        minDate={"2023-09-01"}
        maxDate={"2023-09-30"}
        markedDates={{
          "2023-09-27": {
            selected: true,
            marked: true,
            selectedColor: colors.accent,
          },
        }}
        style={styles.calendar}
      />
      <View style={styles.container}>
        <Text style={styles.noTask}>No hay tareas en el día.</Text>
      </View>
    </View>
  );
};

export default Calendar;
