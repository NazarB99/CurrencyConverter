import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationType} from '@src/navigation/MainStack/MainStack';
import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';

export const BackButton = () => {
  const {goBack} = useNavigation<MainStackNavigationType>();

  const handleBackPress = () => {
    goBack();
  };

  return (
    <Pressable onPress={handleBackPress}>
      <Image
        style={styles.backImage}
        source={require('@assets/images/back-btn.png')}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  backImage: {
    width: 14,
    height: 14,
  },
});
