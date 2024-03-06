import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {CurrencySelectButton} from '../../../components/CurrencySelectButton';
import {SwapCurrencyButton} from '@src/components/SwapCurrencyButton';
import {Input} from '@src/components/Input';
import {ConversionResult} from '@src/components/ConversionResult';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationType} from '../MainStack';
import {useCurrency} from '@src/providers/CurrencyProvider';

export const MainScreen = () => {
  const {currencyIn, currencyOut} = useCurrency();
  const [amount, setAmount] = useState(1);
  const {navigate} = useNavigation<MainStackNavigationType>();

  const handleCurrencyInSelectPress = () => {
    navigate('CurrencySelect', {convertType: 'in'});
  };

  const handleCurrencyOutSelectPress = () => {
    navigate('CurrencySelect', {convertType: 'out'});
  };

  const handleChangeAmount = (newAmount: string) => {
    const newAmountNumber = newAmount === '' ? 1 : parseFloat(newAmount);
    setAmount(newAmountNumber);
  };

  return (
    <View style={styles.container}>
      <View style={styles.currenciesSelectionBlock}>
        <CurrencySelectButton
          currencyCode={currencyIn.code}
          currencyImage={currencyIn.flagSrc}
          onPress={handleCurrencyInSelectPress}
        />
        <SwapCurrencyButton />
        <CurrencySelectButton
          currencyCode={currencyOut.code}
          currencyImage={currencyOut.flagSrc}
          onPress={handleCurrencyOutSelectPress}
        />
      </View>
      <Input
        label="Amount:"
        placeholder="Enter amount"
        onChange={handleChangeAmount}
      />
      <ConversionResult amount={amount} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  currenciesSelectionBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 16,
  },
});
