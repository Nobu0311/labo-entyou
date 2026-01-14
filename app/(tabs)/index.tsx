import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [pressed, setPressed] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="押してね" onPress={() => setPressed(true)} />
      {pressed && <Text style={styles.text}>押されました</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // 縦方向中央
    alignItems: "center", // 横方向中央
    backgroundColor: "#fff",
  },
  text: {
    marginTop: 16,
    fontSize: 18,
  },
});
