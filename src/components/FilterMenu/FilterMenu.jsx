import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FilterMenu = ({ onClose, onSelectFilter }) => {
  const filters = ["work", "personal", "fitness"];

  return (
    <View>
      {filters.map(filter => (
        <TouchableOpacity key={filter} onPress={() => onSelectFilter(filter)}>
          <Text>{filter}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={onClose}>
        <Ionicons name="close" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default FilterMenu;
