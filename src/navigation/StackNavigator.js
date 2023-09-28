import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Task } from "../screens";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Task" component={Task} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
