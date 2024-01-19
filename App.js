import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return <StartGameScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
