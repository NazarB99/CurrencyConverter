import {CurrencyItem} from '@src/components/CurrencyItem';
import {Header} from '@src/components/Header';
import {Input} from '@src/components/Input';
import {Currency, currencies} from '@src/utils/currenciesData';
import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {MainStackNavigationType, useTypedRoute} from '../MainStack';
import {useCurrency} from '@src/providers/CurrencyProvider';
import {useNavigation} from '@react-navigation/native';
import {searchCurrency} from '@src/utils/searchCurrency';

export const CurrencySelectScreen = () => {
  const {currencyIn, setCurrencyIn, currencyOut, setCurrencyOut} =
    useCurrency();
  const {goBack} = useNavigation<MainStackNavigationType>();
  const {params} = useTypedRoute<'CurrencySelect'>();
  const [filteredCurrencies, setFilteredCurrencies] = useState(currencies);

  const handleCurrencyItemPress = (item: Currency) => {
    if (params.convertType === 'in') {
      setCurrencyIn(item);
    }
    if (params.convertType === 'out') {
      setCurrencyOut(item);
    }
    goBack();
  };

  const getActiveState = (item: Currency) => {
    if (params.convertType === 'in') {
      return item.code === currencyIn.code;
    }
    if (params.convertType === 'out') {
      return item.code === currencyOut.code;
    }

    return false;
  };

  const handleRenderItem = ({item}: {item: Currency}) => {
    return (
      <CurrencyItem
        isActive={getActiveState(item)}
        onPress={handleCurrencyItemPress}
        currency={item}
      />
    );
  };

  const handleChangeSearchInput = (text: string) => {
    const result = searchCurrency(text);
    setFilteredCurrencies(result);
  };

  return (
    <View style={styles.container}>
      <Header headerText="Currency Select" />
      <View style={styles.wrapper}>
        <Input
          placeholder="Search currency"
          onChange={handleChangeSearchInput}
        />
        <FlatList
          data={filteredCurrencies}
          renderItem={handleRenderItem}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  listContainer: {
    marginTop: 16,
    paddingBottom: 200,
  },
});
