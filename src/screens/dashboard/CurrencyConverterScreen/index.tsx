import { CurrencyConverterProvider } from "./Provider/CurrencyConverterProvider";
import { CurrencyPicker } from "./components/CurrencyPicker";
import { ListCurrencies } from "./components/ListCurrencies";

import React, { useState } from "react";

import StackHeader from "@/src/components/common/StackHeader";
import { ThemedView } from "@/src/components/common/ThemedView";
import Input from "@/src/components/common/input";

export const CurrencyConverterScreen: React.FC = () => {
  const [amount, setAmount] = useState(1);

  return (
    <ThemedView style={{ flex: 1 }}>
      <CurrencyConverterProvider>
        <StackHeader title="Currency Converter" />
        <ThemedView style={{ padding: 16 }}>
          <CurrencyPicker />
          <Input
            placeholder="Enter amount"
            keyboardType="numeric"
            value={amount.toString()}
            onChangeText={(text) => setAmount(Number(text))}
          />
          <ListCurrencies amount={amount} />
        </ThemedView>
      </CurrencyConverterProvider>
    </ThemedView>
  );
};
