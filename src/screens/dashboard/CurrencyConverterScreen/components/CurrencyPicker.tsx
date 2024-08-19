import { useCurrencyContext } from "../Provider/CurrencyConverterProvider";

import React from "react";

import { Text, View } from "react-native";

import { Picker } from "@react-native-picker/picker";

export const CurrencyPicker: React.FC = () => {
  const { baseCurrency, setBaseCurrency, targetCurrency, setTargetCurrency } =
    useCurrencyContext();

  return (
    <View>
      <Text>Base Currency</Text>
      <Picker
        selectedValue={baseCurrency}
        onValueChange={(itemValue: any) => setBaseCurrency(itemValue)}
      >
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="EUR" value="EUR" />
        <Picker.Item label="GBP" value="GBP" />
      </Picker>

      <Text>Target Currency</Text>
      <Picker
        selectedValue={targetCurrency}
        onValueChange={(itemValue: any) => setTargetCurrency(itemValue)}
      >
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="EUR" value="EUR" />
        <Picker.Item label="GBP" value="GBP" />
      </Picker>
    </View>
  );
};
