import { useCurrencyConverter } from "../hooks/useCurrencyConverter";

import React from "react";

import { ActivityIndicator, Text, View } from "react-native";

export const ListCurrencies: React.FC<{ amount: number }> = ({ amount }) => {
  const { convert, isLoading, error } = useCurrencyConverter();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error fetching conversion rate</Text>;
  }

  return (
    <View>
      <Text>Converted Amount: {convert(amount).toFixed(2)}</Text>
    </View>
  );
};
