import { View, Text, Button, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";

const AboutScreen = ({ navigation }) => {
  const currentDate = new Date().toLocaleDateString();
  const [easterEggActive, setEasterEggActive] = useState(false);

  const handleNamePress = () => {
    setEasterEggActive(true);
    Alert.alert("Easter Egg", "You found the hidden message!");
  };
  return (
    <MainLayout>
      <View>
        <Text>About Screen</Text>
        <Text>App Name: ToDoList</Text>
        <TouchableOpacity onPress={handleNamePress}>
          <Text>I'm Qingfeng(Abel) Chen</Text>
        </TouchableOpacity>
        {easterEggActive && (
          <Text>Here's a special hidden message just for finding this!</Text>
        )}
        <Text>Current Date: {currentDate}</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </MainLayout>
  );
};

export default AboutScreen;
