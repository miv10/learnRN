import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ id, text, onDeleteGoal }) {
  return (
    <Pressable onPress={onDeleteGoal.bind(this, id)}>
      <View style={styles.goalItemContainer}>
        <Text style={styles.goalItemText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItemContainer: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalItemText: {
    color: "#ffffff",
  },
});

export default GoalItem;
