import { Home, Task } from "./src/screens";
import { useFonts } from "expo-font";
import fonts from "./src/global/fonts";
import { useState } from "react";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  const [taskSelected, setTaskSelected] = useState("");

  const handleBackButton = () => {
    setTaskSelected("");
  };

  if (!fontsLoaded) {
    return null;
  }

  return taskSelected ? (
    <Task task={taskSelected} onBack={handleBackButton} />
  ) : (
    <Home setTaskSelected={setTaskSelected} />
  );
}
