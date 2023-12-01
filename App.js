import { FlatList, StyleSheet, View } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(newGoal) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: newGoal, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(goalId) {
    console.log("deleteGoalHandler", goalId);
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter(({ id }) => id !== goalId)
    );
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          keyExtractor={({ id }) => id}
          renderItem={({ item: { text, id } }) => (
            <GoalItem text={text} id={id} onDeleteGoal={deleteGoalHandler} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 8,
  },
});
