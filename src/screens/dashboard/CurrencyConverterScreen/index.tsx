import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { CurrencyConverterProvider } from './Provider/CurrencyConverterProvider';
import { CurrencyPicker } from './components/CurrencyPicker';
import { ListCurrencies } from './components/ListCurrencies';
import StackHeader from '@/src/components/common/StackHeader';

export const CurrencyConverterScreen: React.FC = () => {
  const [amount, setAmount] = useState(1);

  return (
    <CurrencyConverterProvider>
      <StackHeader title='Currency Converter' />
      <View style={{ padding: 16 }}>
        <CurrencyPicker />
        <TextInput
          placeholder='Enter amount'
          keyboardType='numeric'
          value={amount.toString()}
          onChangeText={(text) => setAmount(Number(text))}
          style={{
            borderWidth: 1,
            padding: 8,
            marginVertical: 8,
          }}
        />
        <ListCurrencies amount={amount} />
      </View>
    </CurrencyConverterProvider>
  );
};
