import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";

export default function ApplyScreen() {
  const [labName, setLabName] = useState("");
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">申請フォーム</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="研究室名を入力"
        value={labName}
        onChangeText={setLabName}
      />
      {labName.length > 0 && (
        <Button title="延長申請する" onPress={() => router.push("/congrats")} />
      )}
      <Button
        title="最初に戻る"
        color="gray"
        onPress={() => router.replace("/")}
      />
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
    height: 45,
    width: "100%",
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});
