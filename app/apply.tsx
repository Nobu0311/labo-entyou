import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";
import React, { useState } from "react"; // ここが重要です
import { Button, StyleSheet, TextInput } from "react-native";

export default function ApplyScreen() {
  const [labName, setLabName] = useState("");
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">申請 1/3</ThemedText>
      <ThemedText style={{ marginTop: 10 }}>
        研究室名を入力してください
      </ThemedText>
      <TextInput
        style={styles.input}
        placeholder="例: 宮田研究室"
        value={labName}
        onChangeText={setLabName}
      />
      {labName.length > 0 && (
        <Button
          title="次へ"
          onPress={() =>
            router.push({ pathname: "/details", params: { labName } })
          }
        />
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
