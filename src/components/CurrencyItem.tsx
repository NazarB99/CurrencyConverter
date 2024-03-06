import {COLORS} from '@src/utils/constants';
import {Currency} from '@src/utils/currenciesData';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

interface CurrencyItemProps {
  currency: Currency;
  onPress: (item: Currency) => void;
  isActive: boolean;
}

export const CurrencyItem = ({
  currency,
  isActive,
  onPress,
}: CurrencyItemProps) => {
  const handleCurrencyItemPress = () => {
    onPress(currency);
  };

  return (
    <Pressable
      onPress={handleCurrencyItemPress}
      style={styles.currencyItemContainer}>
      <View style={styles.leftBlock}>
        <Image style={styles.currencyImage} source={{uri: currency.flagSrc}} />
        <Text numberOfLines={1} style={styles.currencyText}>
          {currency.code} - {currency.name}
        </Text>
      </View>
      <View style={styles.outerDot}>
        {isActive && <View style={styles.dot} />}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  currencyItemContainer: {
    backgroundColor: COLORS.secondaryGray,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  currencyImage: {
    width: 30,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.black,
  },
  outerDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  currencyText: {
    fontSize: 16,
    fontWeight: '400',
    width: '80%',
  },
  leftBlock: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.black,
  },
});
