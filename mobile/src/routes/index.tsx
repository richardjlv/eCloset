import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { RootStackParamList } from './types';
import Header from '~/components/Header';
import Cart from '~/pages/Cart';
import Dashboard from '~/pages/Dashboard';
import Product from '~/pages/Product';
import { colors } from '~/styles/theme';

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.secondary,
        },
        header: () => <Header />,
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
      />
      <Stack.Screen
        name="Product"
        component={Product}
      />
    </Stack.Navigator>
  );
}
