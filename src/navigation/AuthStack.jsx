import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Signup } from "../screens";

const AuthStack = createNativeStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName="Signup"
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
      })}>
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
