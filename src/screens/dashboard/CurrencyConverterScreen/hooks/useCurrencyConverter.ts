import { useCurrencyContext } from "../Provider/CurrencyConverterProvider";

import { useCurrencyApi } from "@/src/api/currency/useCurrencyApi";

export const useCurrencyConverter = () => {
  const { baseCurrency, targetCurrency } = useCurrencyContext();
  const {
    data: conversionRate,
    error,
    isLoading,
  } = useCurrencyApi(baseCurrency, targetCurrency);

  const convert = (amount: number): number => {
    if (!conversionRate) return 0;
    return amount * conversionRate;
  };

  return { conversionRate, convert, error, isLoading };
};
