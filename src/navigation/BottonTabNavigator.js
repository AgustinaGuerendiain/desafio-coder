import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";
import Feather from "@expo/vector-icons/Feather";
import { colors } from "../contants/colors";
import { StyleSheet, Text } from "react-native";
import { Calendar, Profile } from "../screens";
import { useIsFocused } from "@react-navigation/native";

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const isFocused = useIsFocused();

  return (
    <BottomTab.Navigator
      initialRouteName="Tareas"
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
      })}>
      <BottomTab.Screen
        name="Tareas"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="file-text"
              size={24}
              color={focused ? colors.secondary : colors.primaryDark}
            />
          ),
          tabBarLabel: ({ focused }) => {
            let labelColor = focused ? colors.secondary : colors.primaryDark;
            return (
              <Text style={{ ...styles.tabBarLabel, color: labelColor }}>
                Tareas
              </Text>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Calendario"
        component={Calendar}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="calendar"
              size={24}
              color={focused ? colors.secondary : colors.primaryDark}
            />
          ),
          tabBarLabel: ({ focused }) => {
            let labelColor = focused ? colors.secondary : colors.primaryDark;
            return (
              <Text style={{ ...styles.tabBarLabel, color: labelColor }}>
                Calendario
              </Text>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? colors.secondary : colors.primaryDark}
            />
          ),
          tabBarLabel: ({ focused }) => {
            let labelColor = focused ? colors.secondary : colors.primaryDark;
            return (
              <Text style={{ ...styles.tabBarLabel, color: labelColor }}>
                Perfil
              </Text>
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.primary,
    height: 73,
    paddingBottom: 8,
  },
  tabBarLabel: {
    fontFamily: "MontserratSemiBold",
    fontSize: 14,
  },
});
