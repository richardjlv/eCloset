// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';
import { darken } from 'polished';
import React from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {
  Wrapper,
  Container,
  EmptyText,
  EmptySubText,
  EmptyIcon,
  ProductDetails,
  ProductItem,
  ProductPrice,
  ProductName,
  ProductSize,
  ProductImage,
  DeleteProductIcon,
  ProductInfo,
  AmountContainer,
  IconButton,
  Amount,
  ProductSubTotal,
  TotalText,
  Total,
  Order,
  OrderText,
} from './styles';
import * as CartActions from '~/store/modules/cart/actions';
import { Product } from '~/store/modules/cart/types';
import { ApplicationState } from '~/store/types';
import { colors } from '~/styles/theme';
import { formatPrice } from '~/util/format';

const Cart: React.FC = () => {
  const products = useSelector<ApplicationState, Product[]>((state) => state.cart.products.map((product) => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })));

  const total = formatPrice(
    products.reduce((sumTotal, product) => sumTotal + product.price * product.amount, 0),
  );

  const dispatch = useDispatch();

  function increment(index) {
    dispatch(CartActions.updateAmountRequest(
      products[index].id,
      products[index].size,
      products[index].amount + 1,
    ));
  }

  function decrement(index) {
    dispatch(CartActions.updateAmountRequest(
      products[index].id,
      products[index].size,
      products[index].amount - 1,
    ));
  }

  function remove(index) {
    dispatch(CartActions.removeFromCart(products[index].id, products[index].size));
  }

  return (
    <Wrapper>
      {products.length ? (
        <Container>
          {products.map((product, index) => (
            <ProductItem key={String(index)}>
              <ProductImage source={{ uri: product.image.url }} />
              <ProductDetails>
                <ProductName>
                  {product.name}
                </ProductName>
                <ProductSize>
                  {`Tamanho: ${product.size}`}
                </ProductSize>
                <ProductPrice>{product.priceFormatted}</ProductPrice>
              </ProductDetails>
              <IconButton onPress={() => remove(index)}>
                <DeleteProductIcon />
              </IconButton>
              <ProductInfo>
                <AmountContainer>
                  <IconButton onPress={() => decrement(index)}>
                    <Ionicons name="ios-remove-circle-outline" size={24} color={darken(0.1, colors.tertiary)} />
                  </IconButton>
                  <Amount>{product.amount}</Amount>
                  <IconButton onPress={() => increment(index)}>
                    <Ionicons name="ios-add-circle-outline" size={24} color={darken(0.1, colors.tertiary)} />
                  </IconButton>
                </AmountContainer>
                <ProductSubTotal>{product.subTotal}</ProductSubTotal>
              </ProductInfo>
            </ProductItem>
          ))}
          <TotalText>Total</TotalText>
          <Total>{total}</Total>
          <Order>
            <OrderText>Finalizar pedido</OrderText>
          </Order>
        </Container>
      )
        : (
          <>
            <EmptyIcon />
            <EmptyText>Seu carrinho está vázio</EmptyText>
            <EmptySubText>Explore a loja e adicione os produtos que você mais gostar</EmptySubText>
          </>
        )}
    </Wrapper>
  );
};

export default Cart;
