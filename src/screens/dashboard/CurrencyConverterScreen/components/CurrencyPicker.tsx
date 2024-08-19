import { useCurrencyContext } from "../Provider/CurrencyConverterProvider";

import React from "react";

import { ThemedText } from "@/src/components/common/ThemedText";
import { ThemedView } from "@/src/components/common/ThemedView";
import { useThemeColor } from "@/src/hooks/useThemeColor";
import { Picker } from "@react-native-picker/picker";

export const CurrencyPicker: React.FC = () => {
  const { baseCurrency, setBaseCurrency, targetCurrency, setTargetCurrency } =
    useCurrencyContext();
  const color = useThemeColor({ light: undefined, dark: undefined }, "text");

  return (
    <ThemedView>
      <ThemedText>Base Currency</ThemedText>
      <Picker
        selectedValue={baseCurrency}
        onValueChange={(itemValue: any) => setBaseCurrency(itemValue)}
      >
        <Picker.Item label="USD" value="USD" color={color} />
        <Picker.Item label="EUR" value="EUR" color={color} />
        <Picker.Item label="GBP" value="GBP" color={color} />
      </Picker>

      <ThemedText>Target Currency</ThemedText>
      <Picker
        selectedValue={targetCurrency}
        onValueChange={(itemValue: any) => setTargetCurrency(itemValue)}
      >
        <Picker.Item label="USD" value="USD" color={color} />
        <Picker.Item label="EUR" value="EUR" color={color} />
        <Picker.Item label="GBP" value="GBP" color={color} />
      </Picker>
    </ThemedView>
  );
};
