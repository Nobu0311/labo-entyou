import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";
import { Button, StyleSheet, View } from "react-native";

export default function RoleSelectionScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">研究室延長申請システム</ThemedText>
      <ThemedText style={styles.subtitle}>
        あなたの役割を選択してください
      </ThemedText>

      <View style={styles.buttonContainer}>
        <Button
          title="申請者として進む"
          onPress={() => router.push("/apply")}
        />
        <View style={{ height: 20 }} />
        <Button
          title="管理者としてログイン"
          color="#f4511e"
          onPress={() => router.push("/admin")}
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
  subtitle: { marginVertical: 20, opacity: 0.7 },
  buttonContainer: { width: "100%", marginTop: 20 },
});
