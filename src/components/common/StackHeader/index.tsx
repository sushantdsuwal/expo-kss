import { ThemedText } from "../ThemedText";

import React from "react";

import { Stack } from "expo-router";

import { useThemeColor } from "@/src/hooks/useThemeColor";

interface StackHeaderProps {
  title: string;
}

export default function StackHeader({ title }: StackHeaderProps) {
  const backgroundColor = useThemeColor(
    { light: undefined, dark: undefined },
    "background",
  );

  return (
    <Stack.Screen
      options={{
        headerTitle: () => {
          return <ThemedText>{title}</ThemedText>;
        },
        headerStyle: {
          backgroundColor: backgroundColor,
        },
      }}
    />
  );
}
