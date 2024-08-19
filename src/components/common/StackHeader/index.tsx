import React from "react";

import { Stack } from "expo-router";
import { Text } from "react-native";

interface StackHeaderProps {
  title: string;
}

export default function StackHeader({ title }: StackHeaderProps) {
  return (
    <Stack.Screen
      options={{
        headerTitle: () => {
          return <Text>{title}</Text>;
        },
      }}
    />
  );
}
