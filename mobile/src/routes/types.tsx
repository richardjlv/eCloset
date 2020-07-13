import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Dashboard: undefined;
  Cart: undefined;
  Product: { id: number } | undefined;
};

export type DashboardScreenRouteProp = RouteProp<RootStackParamList, 'Dashboard'>;

export type DashboardScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Dashboard'
>;

export type CartScreenRouteProp = RouteProp<RootStackParamList, 'Cart'>;

export type CartScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Cart'
>;

export type ProductScreenRouteProp = RouteProp<RootStackParamList, 'Product'>;

export type ProductScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Product'
>;
