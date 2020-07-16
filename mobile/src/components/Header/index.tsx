// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';

import {
  Wrapper, Logo, ButtonContainer, AmountCart, RouteTitle, Amount,
} from './styles';
import { CartState } from '~/store/modules/cart/types';
import { ApplicationState } from '~/store/types';

const Header: React.FC = () => {
  const { products } = useSelector<ApplicationState, CartState>((state) => state.cart);

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
      <Logo />
      {/* <RouteTitle>eCloset</RouteTitle> */}
      <ButtonContainer onPress={navigateToCart}>
        <MaterialIcons name="shopping-cart" size={32} color="rgba(255,255,255,0.7)" />
        {products.length !== 0 && (
          <AmountCart>
            <Amount>{products.length}</Amount>
          </AmountCart>
        )}
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
            {products.length !== 0 && (
              <AmountCart>
                <Amount>{products.length}</Amount>
              </AmountCart>
            )}
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
