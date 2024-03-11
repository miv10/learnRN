import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimarryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#4e0329",
    // Android Only
    elevation: 4, // android only specific used for box-shadow
    // iOS Only
    shadowColor: "#000", // ios only specific used for box-shadow
    shadowOffset: {
      width: 0,
      height: 2,
    }, // ios only specific used for box-shadow
    shadowRadius: 6, // ios only specific used for box-shadow
    shadowOpacity: 0.25, // ios only specific used for box-shadow
  },
  numberInput: {
    height: 40,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb527",
    borderBottomWidth: 2,
    color: "#ddb527",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
