import React, { createContext, useState, useContext, ReactNode } from 'react';

type CurrencyContextType = {
  baseCurrency: string;
  targetCurrency: string;
  setBaseCurrency: (currency: string) => void;
  setTargetCurrency: (currency: string) => void;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyConverterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');

  return (
    <CurrencyContext.Provider value={{ baseCurrency, targetCurrency, setBaseCurrency, setTargetCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrencyContext = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrencyContext must be used within a CurrencyConverterProvider');
  }
  return context;
};
