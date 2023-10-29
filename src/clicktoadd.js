import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import CustomButton from "./custombutton";

export default ClickToAdd = () => {
  const [count, setCount] = React.useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.testStyle}>{count}</Text>
      <CustomButton
        label="Click to add"
        onPressFun={() => setCount(count + 1)}
        buttonStyle={styles.buttonStyle}
        textStyle={styles.buttontextStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "left",
    justifyContent: "center",
    //width: "33%",
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "green",
    width: 90,
  },
  buttontextStyle: {
    fontSize: 9,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
