import { useCurrencyConverter } from "../hooks/useCurrencyConverter";

import React from "react";

import { ActivityIndicator } from "react-native";

import { ThemedText } from "@/src/components/common/ThemedText";
import { ThemedView } from "@/src/components/common/ThemedView";

export const ListCurrencies: React.FC<{ amount: number }> = ({ amount }) => {
  const { convert, isLoading, error } = useCurrencyConverter();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <ThemedText>Error fetching conversion rate</ThemedText>;
  }

  return (
    <ThemedView>
      <ThemedText>Converted Amount: {convert(amount).toFixed(2)}</ThemedText>
    </ThemedView>
  );
};
