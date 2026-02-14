import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useLocalSearchParams, useRouter } from "expo-router"; // useLocalSearchParams を追加
import React, { useState } from "react"; // React と useState をインポート
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function DetailsScreen() {
  const { labName } = useLocalSearchParams(); // 前の画面からデータを受け取る
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">申請 2/3</ThemedText>

      <View style={styles.form}>
        <ThemedText style={styles.label}>研究室: {labName}</ThemedText>

        <ThemedText style={styles.label}>日付</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="例: 2月14日"
          value={date}
          onChangeText={setDate}
        />

        <ThemedText style={styles.label}>終了予定時間</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="例: 21:00"
          value={time}
          onChangeText={setTime}
        />
      </View>

      <View style={styles.buttonGroup}>
        {date.length > 0 && time.length > 0 && (
          <Button
            title="確認画面へ"
            onPress={() =>
              router.push({
                pathname: "/confirm",
                params: { labName, date, time },
              })
            }
          />
        )}
        <Button title="戻る" color="gray" onPress={() => router.back()} />
      </View>
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
  form: { width: "100%", marginVertical: 20 },
  label: { fontSize: 16, marginBottom: 5 },
  input: {
    height: 45,
    width: "100%",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  buttonGroup: { width: "100%", gap: 10 },
});
