import { Ionicons } from '@expo/vector-icons';
import { darken } from 'polished';
import React from 'react';

import {
  Container,
  EmptyText,
  EmptySubText,
  EmptyIcon,
  ProductDetails,
  ProductItem,
  ProductPrice,
  ProductName,
  ProductImage,
  DeleteProductIcon,
  ProductInfo,
  AmountContainer,
  IconButton,
  Amount,
  ProductSubTotal,
  TotalText,
  Total,
  TotalContainer,
  Wrapper,
  Order,
  OrderText,
} from './styles';
import { colors } from '~/styles/theme';

const Cart: React.FC = () => {
  const product = {
    name: 'Camiseta Brasil Nike',
    category: 'Corrida',
    formattedPrice: 'R$129,99',
    image: {
      url: 'https://images.lojanike.com.br/1024x1024/produto/193551_2060463_20200414160429.png',
    },
  };
  const cart = {
    product,
  };

  return (
    <Container>
      {cart ? (
        <>
          <ProductItem>
            <ProductImage source={{ uri: cart.product.image.url }} />
            <ProductDetails>
              <ProductName>
                {cart.product.name}
              </ProductName>
              <ProductPrice>{cart.product.formattedPrice}</ProductPrice>
            </ProductDetails>
            <IconButton>
              <DeleteProductIcon />
            </IconButton>
            <ProductInfo>
              <AmountContainer>
                <IconButton>
                  <Ionicons name="ios-remove-circle-outline" size={24} color={darken(0.1, colors.tertiary)} />
                </IconButton>
                <Amount>3</Amount>
                <IconButton>
                  <Ionicons name="ios-add-circle-outline" size={24} color={darken(0.1, colors.tertiary)} />
                </IconButton>
              </AmountContainer>
              <ProductSubTotal>{cart.product.formattedPrice}</ProductSubTotal>
            </ProductInfo>
          </ProductItem>
          <TotalText>Total</TotalText>
          <Total>{cart.product.formattedPrice}</Total>
          <Order>
            <OrderText>Finalizar pedido</OrderText>
          </Order>
        </>
      )
        : (
          <>
            <EmptyIcon />
            <EmptyText>Seu carrinho está vázio</EmptyText>
            <EmptySubText>Explore a loja e adicione os produtos que você mais gostar</EmptySubText>
          </>
        )}
    </Container>
  );
};

export default Cart;
