import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(payload) {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, payload]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          keyExtractor={({ id }) => id}
          renderItem={({ item: { text } }) => <GoalItem text={text} />}
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
