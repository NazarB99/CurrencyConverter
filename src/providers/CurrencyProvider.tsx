import {BASE_URL} from '@src/utils/constants';
import {Currency, currencies} from '@src/utils/currenciesData';
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';

interface CurrencyProviderProps {
  children: ReactNode;
}

interface CurrencyContextType {
  currencyIn: Currency;
  setCurrencyIn: (currency: Currency) => void;
  currencyOut: Currency;
  setCurrencyOut: (currency: Currency) => void;
  rate: number | null;
  fetchCurrencyRate?: () => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined,
);

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};

export const CurrencyProvider = ({children}: CurrencyProviderProps) => {
  const [currencyIn, setCurrencyIn] = useState(currencies[0]);
  const [currencyOut, setCurrencyOut] = useState(currencies[1]);
  const [rate, setRate] = useState(null);

  const fetchCurrencyRate = useCallback(async () => {
    try {
      const response = await fetch(
        `${BASE_URL}latest?base=${currencyIn.code}&currencies=${currencyOut.code}&resolution=1m&amount=1&places=3&format=json&api_key=fxr_live_8c530825b2f8dae21e832c0d56a3b5c89e59`,
      );
      const data = await response.json();
      const currentRate = data.rates[currencyOut.code];
      setRate(currentRate);
    } catch (error) {
      console.error('Failed to fetch currency rate:', error);
    }
  }, [currencyIn, currencyOut]);

  // Effect to fetch the rate when currencies change
  useEffect(() => {
    fetchCurrencyRate();
  }, [currencyIn, currencyOut, fetchCurrencyRate]);

  return (
    <CurrencyContext.Provider
      value={{currencyIn, setCurrencyIn, currencyOut, setCurrencyOut, rate}}>
      {children}
    </CurrencyContext.Provider>
  );
};
