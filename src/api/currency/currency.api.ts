import axios from 'axios';

const API_URL = 'https://api.apilayer.com/exchangerates_data/latest';
const API_KEY = 'QowpGeAE4Tm8Vdh6yGaaBxevZYkUUJGC';

export const fetchConversionRate = async (baseCurrency: string, targetCurrency: string) => {
  const response = await axios.get(API_URL, {
    headers: {
      apikey: API_KEY,
    },
    params: {
      base: baseCurrency,
      symbols: targetCurrency,
    },
  });

  return response.data.rates[targetCurrency];
};
