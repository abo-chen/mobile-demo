import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.copyRightText}>© 2023</Text>
      <View style={styles.icons}>
        <TouchableOpacity>
          <Text style={styles.icon}>🐦</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.icon}>📘</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.icon}>📸</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f0f0f0", // 淡灰色背景
    borderTopWidth: 1,
    borderColor: "#e7e7e7",
  },
  copyRightText: {
    fontSize: 16,
  },
  icons: {
    flexDirection: "row",
    width: 80,
    justifyContent: "space-between",
  },
  icon: {
    fontSize: 24,
  },
});

export default Footer;
