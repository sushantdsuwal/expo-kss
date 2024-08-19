import { fetchConversionRate } from "./currency.api";

import { useQuery } from "react-query";

export const useCurrencyApi = (
  baseCurrency: string,
  targetCurrency: string,
) => {
  return useQuery(["conversionRate", baseCurrency, targetCurrency], () =>
    fetchConversionRate(baseCurrency, targetCurrency),
  );
};
