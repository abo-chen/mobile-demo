import React from 'react';
import {
  SafeAreaView,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import ToDoList from "./src/ToDoList";
import ToDoForm from "./src/ToDoForm";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ToDoList />
        <ToDoForm />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

