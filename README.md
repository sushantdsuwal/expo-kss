src
├── api
│ ├── currency
│ │ ├── currency.api.ts
│ │ └── useCurrencyApi.ts
├── screens
│ └── dashboard
│ └── CurrencyConverterScreen
│ ├── Provider
│ │ └── CurrencyConverterProvider.tsx
│ ├── hooks
│ │ └── useCurrencyConverter.ts
│ └── components
│ ├── CurrencyPicker.tsx
│ └── ListCurrencies.tsx

#Explanation and Key Points

1. API Integration
   currency.api.ts: Handles the API call to fetch currency conversion rates.
   useCurrencyApi.ts: Utilizes react-query to fetch and cache the conversion rates for efficient data retrieval.

2. Provider Context
   CurrencyConverterProvider.tsx: Manages the state for base and target currencies, making the state accessible throughout the module.

3. Custom Hook
   useCurrencyConverter.ts: Combines API data with the context state to provide conversion logic. It also handles loading and error states, ensuring a smooth user experience.

Components

1. CurrencyPicker.tsx
   A component that allows users to select currencies from a dropdown menu.

2. ListCurrencies.tsx
   Displays the converted amount, dynamically updating based on changes in state and API data.

#Modularity and Scalability

Modular Structure: Each file in this module has a single responsibility, making the code easy to understand and maintain.

Scalability: The structure allows for easy expansion by adding more currencies, integrating additional API endpoints, or enhancing features related to currency conversion.
