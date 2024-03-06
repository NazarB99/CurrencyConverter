import {currencies} from './currenciesData';

export function searchCurrency(searchTerm: string) {
  const lowerCaseQuery = searchTerm.toLowerCase();

  return currencies.filter(
    currency =>
      currency.name.toLowerCase().includes(lowerCaseQuery) ||
      currency.code.toLowerCase() === lowerCaseQuery ||
      currency.symbol === searchTerm,
  );
}
