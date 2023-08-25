import { View, StyleSheet } from "react-native";
import { useState } from "react";
import CoinList from "./CoinList";
import React from "react";
import Tab from "./Tab";

export default function TabList() {
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <Tab
          title={"Coins"}
          tabIndex={0}
          active={index === 0}
          setIndex={setIndex}
        />
        <Tab
          title={"Portfolio"}
          tabIndex={1}
          active={index === 1}
          setIndex={setIndex}
        />
        <Tab
          title={"History"}
          tabIndex={2}
          active={index === 2}
          setIndex={setIndex}
        />
      </View>
      {index === 0 && <CoinList />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 230,
    backgroundColor: "white",
    alignItems: "center",
    width: "90%",
    maxHeight: 580,
    borderRadius: 15,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  tabContainer: {
    flexDirection: "row",
    gap: 15,
    paddingBottom: 15,
  },
});
