import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, TextInput } from "react-native";

export default function AdminScreen() {
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    if (password === "0311") {
      setIsSuccess(true);
    } else {
      Alert.alert("エラー", "パスワードが違います");
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">管理者ログイン</ThemedText>

      {!isSuccess ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="パスワードを入力"
            secureTextEntry // 入力文字を隠す
            value={password}
            keyboardType="numeric"
            onChangeText={setPassword}
          />
          <Button title="ログイン" onPress={handleLogin} />
        </>
      ) : (
        <ThemedText
          type="subtitle"
          style={{ color: "#4CAF50", marginVertical: 20 }}
        >
          ✅ アクセス成功
        </ThemedText>
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
