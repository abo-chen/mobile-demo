import React, { useState } from "react";
import { StyleSheet, Pressable, Text, View, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  function ToDoList({ tasks }) {
    return (
      <ScrollView>
        {tasks.map((task, index) => (
          <Pressable key={index}>
            <View style={[styles.task]}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ToDoList tasks={tasks} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
  taskText: {
    fontSize: 16,
  },
});
