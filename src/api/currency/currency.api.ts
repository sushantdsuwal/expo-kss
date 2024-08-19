import axios from "axios";

const API_URL = "https://api.apilayer.com/exchangerates_data/latest";

export const fetchConversionRate = async (
  baseCurrency: string,
  targetCurrency: string,
) => {
  const response = await axios.get(API_URL, {
    headers: {
      apikey: process.env.EXPO_PUBLIC_EXCHANGE_RATE_API_KEY,
    },
    params: {
      base: baseCurrency,
      symbols: targetCurrency,
    },
  });

  return response.data.rates[targetCurrency];
};
