import {useCurrency} from '@src/providers/CurrencyProvider';
import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';

export const SwapCurrencyButton = () => {
  const {currencyIn, currencyOut, setCurrencyIn, setCurrencyOut} =
    useCurrency();

  const handleSwapCurrenciesPress = () => {
    setCurrencyIn(currencyOut);
    setCurrencyOut(currencyIn);
  };

  return (
    <Pressable onPress={handleSwapCurrenciesPress}>
      <Image
        style={styles.swapImage}
        source={require('@assets/images/convert.png')}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  swapImage: {
    width: 36,
    height: 36,
  },
});
