import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Coin({ coin }) {
  return (
    <View style={styles.container}>
      <View style={styles.coinContainer}>
        <Image
          style={styles.coinImage}
          source={{
            uri: coin.image,
          }}
        />
        <View>
          <Text style={styles.coinTitle}>{coin.name}</Text>
          <Text style={styles.coinSymbol}>{coin.symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.amount}>0.1 {coin.symbol}</Text>
        <Text style={styles.amountInDollars}>$40.00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
  coinContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  amount: {
    fontSize: 16,
    fontWeight: "500",
    textTransform: "uppercase",
    textAlign: "right",
  },
  amountInDollars: { textAlign: "right", color: "grey", fontWeight: "500" },
  coinImage: { width: 42, height: 42 },
  coinTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  coinSymbol: {
    textTransform: "uppercase",
    color: "grey",
  },
});
