import {COLORS} from '@src/utils/constants';
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface InputProps {
  label?: string;
  placeholder?: string;
  onChange?: (text: string) => void;
}

export const Input = ({label = '', placeholder = '', onChange}: InputProps) => {
  return (
    <View>
      {label !== '' ? <Text>{label}</Text> : null}
      <TextInput
        style={styles.amountInput}
        placeholder={placeholder}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  amountInput: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 8,
    marginTop: 8,
  },
});
