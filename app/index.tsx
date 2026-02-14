import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router"; // 画面遷移用
import React, { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";

export default function HomeScreen() {
  const [labName, setLabName] = useState("");
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">延長申請</ThemedText>

      <TextInput
        style={styles.input}
        placeholder="研究室名を入力してください"
        value={labName}
        onChangeText={setLabName}
      />

      {/* 入力がある時だけボタンを表示 */}
      {labName.length > 0 && (
        <Button title="延長申請する" onPress={() => router.push("/congrats")} />
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    width: "100%",
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});
