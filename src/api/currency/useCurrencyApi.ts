import { useQuery } from 'react-query';
import { fetchConversionRate } from './currency.api';

export const useCurrencyApi = (baseCurrency: string, targetCurrency: string) => {
  return useQuery(['conversionRate', baseCurrency, targetCurrency], () =>
    fetchConversionRate(baseCurrency, targetCurrency)
  );
};
