import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default ClickToAdd = () => {
  const [count, setCount] = React.useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.testStyle}>{count}</Text>
      <Button onPress={() => setCount(count + 1)} title="Click to add"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: "#fff",
    alignItems: "left",
    justifyContent: "center",
    width: "33%",
  },
  testStyle: {
    color: "red",
    fontSize: 50,
  },
});
