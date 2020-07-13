import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';

import {
  Wrapper, Logo, ButtonContainer, AmountCart, RouteTitle, Amount,
} from './styles';

const Header: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const navigateToCart = () => {
    navigation.navigate('Cart');
  };
  const navigateToBack = () => {
    navigation.goBack();
  };

  const MainHeader = () => (
    <Wrapper>
      {/* <Logo /> */}
      <RouteTitle>eCloset</RouteTitle>
      <ButtonContainer onPress={navigateToCart}>
        <MaterialIcons name="shopping-cart" size={32} color="rgba(255,255,255,0.7)" />
        <AmountCart>
          <Amount>2</Amount>
        </AmountCart>
      </ButtonContainer>
    </Wrapper>
  );

  const OthersHeader = () => (
    <Wrapper>
      <ButtonContainer onPress={navigateToBack}>
        <MaterialIcons name="arrow-back" size={32} color="rgba(255,255,255,0.7)" />
      </ButtonContainer>
      {route.name === 'Cart'
        ? <RouteTitle>Carrinho</RouteTitle>
        : (
          <ButtonContainer onPress={navigateToCart}>
            <MaterialIcons name="shopping-cart" size={32} color="rgba(255,255,255,0.7)" />
            <AmountCart>
              <Amount>2</Amount>
            </AmountCart>
          </ButtonContainer>
        )}
    </Wrapper>
  );

  return (
    <>
      {route.name === 'Dashboard' ? <MainHeader /> : <OthersHeader />}
    </>
  );
};

export default Header;
