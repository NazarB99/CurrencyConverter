import {COLORS} from '@src/utils/constants';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BackButton} from './BackButton';

interface HeaderProps {
  headerText: string;
}

export const Header = ({headerText}: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <BackButton />
      <Text style={styles.headerText}>{headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.white,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
  },
});
