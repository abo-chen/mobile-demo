import React, { useState } from "react";
import { StyleSheet, Pressable, Text, View, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import ToDoForm from "./src/ToDoForm";

const App = () => {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  function ToDoList({ tasks }) {
    return (
      <ScrollView>
        {tasks.map((task, index) => (
            <View style={[styles.task]} key={index}>
              <Text style={styles.taskText}>{task}</Text>
            </View>
        ))}
      </ScrollView>
    );
  }

  const addTask = (newTask) => {
    
    setTasks((currentTasks) => {
      // Check if the newTask is already in the currentTasks list
      if (currentTasks.includes(newTask)) {
        alert(`${newTask} already exists.`); // Or handle duplicates in another way
        return currentTasks; // Return the current list without adding the duplicate
      }
  
      // If it's not a duplicate, add the new task to the list
      return [...currentTasks, newTask];
    });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
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
