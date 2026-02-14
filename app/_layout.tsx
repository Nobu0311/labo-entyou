import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "名前入力" }} />
      <Stack.Screen name="quiz" options={{ title: "クイズ" }} />
      <Stack.Screen name="result" options={{ title: "結果" }} />
      <Stack.Screen name="miyata" options={{ title: "宮田" }} />
    </Stack>
  );
}
