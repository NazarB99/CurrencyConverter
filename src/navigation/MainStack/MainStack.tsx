import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import {MainScreen} from './screens/MainScreen';
import {CurrencySelectScreen} from './screens/CurrencySelectScreen';
import {RouteProp, useRoute} from '@react-navigation/native';

const Stack = createStackNavigator();

type MainStackParamList = {
  MainScreen: undefined;
  CurrencySelect: {convertType: 'in' | 'out'};
};
export type MainStackNavigationType = StackNavigationProp<MainStackParamList>;
type RouteParams<Screen extends keyof MainStackParamList> = RouteProp<
  MainStackParamList,
  Screen
>;

export function useTypedRoute<Screen extends keyof MainStackParamList>() {
  return useRoute<RouteParams<Screen>>();
}

export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="CurrencySelect" component={CurrencySelectScreen} />
    </Stack.Navigator>
  );
};
