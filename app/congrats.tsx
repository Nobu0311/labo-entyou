import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";
import { Button, StyleSheet } from "react-native";

export default function CongratsScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">申請が完了しました！</ThemedText>
      <ThemedText style={styles.margin}>
        お疲れ様です。研究頑張ってください。
      </ThemedText>

      {/* 最初に戻るボタン */}
      <Button title="最初に戻る" onPress={() => router.replace("/")} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  margin: {
    marginVertical: 20,
  },
});
