import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react"; // 追加
import { Button, StyleSheet, View } from "react-native";

// 「export default」が必須です
export default function ConfirmScreen() {
  const router = useRouter();
  const { labName, date, time } = useLocalSearchParams();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">入力内容の確認</ThemedText>

      <View style={styles.infoBox}>
        <ThemedText style={styles.label}>研究室名</ThemedText>
        <ThemedText style={styles.value}>{labName}</ThemedText>

        <ThemedText style={styles.label}>日付</ThemedText>
        <ThemedText style={styles.value}>{date}</ThemedText>

        <ThemedText style={styles.label}>終了予定時間</ThemedText>
        <ThemedText style={styles.value}>{time}</ThemedText>
      </View>

      <View style={styles.buttonGroup}>
        <Button
          title="この内容で申請する"
          onPress={() => router.push("/congrats")}
        />
        <Button
          title="修正する"
          color="#FF5252"
          onPress={() => router.replace("/apply")}
        />
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
  infoBox: {
    width: "100%",
    backgroundColor: "rgba(150, 150, 150, 0.1)",
    padding: 20,
    borderRadius: 10,
    marginVertical: 30,
  },
  label: { fontSize: 12, opacity: 0.6 },
  value: { fontSize: 18, fontWeight: "bold", marginBottom: 15 },
  buttonGroup: { width: "100%", gap: 15 },
});
