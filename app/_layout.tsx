import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Stack>
      {/* name属性はファイル名（拡張子なし）と一致させる必要があります。
        optionsで各画面のヘッダータイトルなどを設定できます。
      */}
      <Stack.Screen name="index" options={{ title: "役割選択" }} />
      <Stack.Screen name="apply" options={{ title: "研究室入力" }} />
      <Stack.Screen name="details" options={{ title: "日時入力" }} />
      <Stack.Screen name="confirm" options={{ title: "内容確認" }} />
      <Stack.Screen name="congrats" options={{ title: "完了" }} />
      <Stack.Screen name="admin" options={{ title: "管理者ログイン" }} />

      {/* もし「quiz」や「result」などの警告が出る場合は、
        ここにそれらの名前のScreenが残っていないか確認してください。
      */}
    </Stack>
  );
}
