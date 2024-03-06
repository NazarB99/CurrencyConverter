import {useCurrency} from '@src/providers/CurrencyProvider';
import {formatNumber} from '@src/utils/formatNumber';
import React, {useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ConversionResultProps {
  amount: number;
}

export const ConversionResult = ({amount}: ConversionResultProps) => {
  const {currencyIn, currencyOut, rate} = useCurrency();

  const calculatedAmount = useMemo(() => {
    if (rate) {
      const result = (rate * amount).toFixed(2);
      const formattedResult = formatNumber(result);
      return formattedResult;
    }
    return 1;
  }, [amount, rate]);

  return (
    <View style={styles.conversionResultContainer}>
      <Text style={styles.convertInText}>
        {formatNumber(amount)}
        {currencyIn.symbol} =
      </Text>
      <Text style={styles.convertOutText}>
        {calculatedAmount} {currencyOut.symbol}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conversionResultContainer: {
    marginTop: 24,
  },
  convertInText: {
    fontSize: 16,
    fontWeight: '400',
  },
  convertOutText: {
    fontSize: 42,
    fontWeight: '400',
  },
});
