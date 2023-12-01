import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ id, text, onDeleteGoal }) {
  return (
    <View style={styles.goalItemContainer}>
      <Pressable
        android_ripple={{ color: "#a180cb", borderless: true }}
        onPress={onDeleteGoal.bind(this, id)}
        style={({ pressed }) => {
          return pressed ? styles.pressedItem : null;
        }}
      >
        <Text style={styles.goalItemText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItemContainer: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalItemText: {
    color: "#ffffff",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
