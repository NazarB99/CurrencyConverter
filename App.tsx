import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {MainStack} from './src/navigation/MainStack/MainStack';
import {NavigationContainer} from '@react-navigation/native';
import {COLORS} from '@src/utils/constants';
import {CurrencyProvider} from '@src/providers/CurrencyProvider';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: COLORS.white,
  };

  return (
    <CurrencyProvider>
      <NavigationContainer>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <MainStack />
        </SafeAreaView>
      </NavigationContainer>
    </CurrencyProvider>
  );
}

export default App;
