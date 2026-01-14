import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function CongratsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>🎉 おめでとう 🎉</Text>
      <Button title="最初のページに戻る" onPress={() => router.push("/")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 28,
    marginBottom: 20,
  },
});
