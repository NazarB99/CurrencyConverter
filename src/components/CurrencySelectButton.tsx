import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../utils/constants';

interface CurrencySelectButtonProps {
  currencyImage: string;
  currencyCode: string;
  onPress: () => void;
}

export const CurrencySelectButton = ({
  onPress,
  currencyImage,
  currencyCode,
}: CurrencySelectButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.currencySelectButton}>
      <View style={styles.leftButtonBlock}>
        <Image style={styles.currencyIcon} source={{uri: currencyImage}} />
        <Text>{currencyCode}</Text>
      </View>
      <Image
        style={styles.chevronDown}
        source={require('@assets/images/chevron-down.png')}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  currencySelectButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: COLORS.mainGray,
  },
  currencyIcon: {
    width: 30,
    height: 20,
    borderRadius: 4,
  },
  leftButtonBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  chevronDown: {
    width: 18,
    height: 18,
  },
});
