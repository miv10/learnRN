import { FlatList, StyleSheet, View, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(newGoal) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: newGoal, id: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  }

  function deleteGoalHandler(goalId) {
    console.log("deleteGoalHandler", goalId);
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter(({ id }) => id !== goalId)
    );
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function cancelGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#b180f0"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          onCancelGoal={cancelGoalHandler}
          visible={modalIsVisible}
        />
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
    </>
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
