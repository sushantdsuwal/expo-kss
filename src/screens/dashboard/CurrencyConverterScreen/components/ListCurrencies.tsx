import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useCurrencyConverter } from '../hooks/useCurrencyConverter';

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
