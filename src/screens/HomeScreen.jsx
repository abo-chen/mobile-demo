import React, { useState } from "react";
import { Button } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import MainLayout from "../layouts/MainLayout";

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

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
      <MainLayout>
        <SafeAreaView>
          <ToDoList tasks={tasks} />
          <ToDoForm addTask={addTask} />
          <Button
            title="Go to About"
            onPress={() => navigation.navigate("About")}
          />
        </SafeAreaView>
      </MainLayout>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
