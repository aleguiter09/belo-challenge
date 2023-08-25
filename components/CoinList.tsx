import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import React from "react";
import Coin from "./Coin";

export default function CoinList() {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getCoinsFromGecko = async (currentPage) => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=${10}&page=${currentPage}`
      );
      const arrayofCoins = await response.json();
      setCoins(arrayofCoins);
    } catch (e) {
      console.log(e);
    }
    return [];
  };

  useEffect(() => {
    setLoading(true);
    getCoinsFromGecko(page);
    setLoading(false);
  }, [page]);

  return (
    <>
      {loading ? (
        <Text>Loading.. </Text>
      ) : (
        <ScrollView style={{ width: "90%" }}>
          {coins &&
            coins.map((coin) => {
              return <Coin key={coin.id} coin={coin} />;
            })}
        </ScrollView>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const newPage = page - 1;
            setPage(newPage > 0 ? newPage : 0);
          }}
        >
          <Icon name={"arrow-back-ios"} size={15} />
        </TouchableOpacity>
        <Text>Page {page}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const newPage = page + 1;
            setPage(newPage);
          }}
        >
          <Icon name={"arrow-forward-ios"} size={15} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    color: "black",
    padding: 12,
  },
});
