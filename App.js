import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
      <View>
        <View style={styles.box1}>
          <Text>1</Text>
        </View>
        <View style={styles.box2}>
          <Text>2</Text>
        </View>
        <View style={styles.box3}>
          <Text>3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
});
