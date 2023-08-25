import { View, StyleSheet } from "react-native";
import Balance from "../components/Balance";
import TabList from "../components/TabList";

export default function Home() {
  return (
    <View style={styles.container}>
      <Balance />
      <TabList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 35,
  },
});
