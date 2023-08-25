import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Tab({ active, title, setIndex, tabIndex }) {
  return (
    <TouchableOpacity
      style={active ? styles.tabActive : styles.tab}
      onPress={() => setIndex(tabIndex)}
    >
      <Text style={active ? styles.tabTextActive : styles.tabText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tab: {
    paddingTop: 15,
    padding: 10,
  },
  tabActive: {
    paddingTop: 15,
    padding: 10,
    borderBottomColor: "#055C9D",
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  tabTextActive: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#055C9D",
  },
});
