import React from "react";

import { TextInput, TextInputProps } from "react-native";

import { useThemeColor } from "@/src/hooks/useThemeColor";

interface InputProps extends TextInputProps {}

export default function Input({ ...props }: InputProps) {
  const color = useThemeColor({ light: undefined, dark: undefined }, "text");

  return (
    <TextInput
      placeholder="Enter amount"
      keyboardType="numeric"
      style={{
        borderWidth: 1,
        borderRadius: 8,
        borderColor: color,
        color: color,
        padding: 14,
        marginVertical: 8,
      }}
      {...props}
    />
  );
}
