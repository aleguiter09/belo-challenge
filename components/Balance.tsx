import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";

const Balance = () => {
  const [currentBalance, setBalance] = useState(11000.89);

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, fontSize: 15 }}>Balance:</Text>
      <Text style={{ ...styles.text, fontSize: 35, fontWeight: "bold" }}>
        ${currentBalance.toFixed(2)}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon name={"north-east"} size={20} style={{ color: "white" }} />
          <Text style={styles.text}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const balance = currentBalance + 1000;
            setBalance(balance);
          }}
        >
          <Icon name={"south-west"} size={20} style={{ color: "white" }} />
          <Text style={styles.text}>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name={"compare-arrows"} size={20} style={{ color: "white" }} />
          <Text style={styles.text}>Swap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "#055C9D",
    gap: 12,
    padding: 80,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 14,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    color: "white",
    gap: 10,
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  text: {
    color: "white",
  },
});
