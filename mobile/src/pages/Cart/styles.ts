// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { lighten, transparentize } from 'polished';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { colors } from '~/styles/theme';

export const Wrapper = styled.View``;

export const Container = styled.View`
  background: ${colors.white.primary};
  width: 90%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  margin-top: 25px;
  align-self: flex-end;
  border: 1px solid ${lighten(0.25, colors.primary)};
`;

export const EmptyText = styled.Text`
  color: ${colors.primary};
  opacity: 0.7;
  font-family: MontserratBold;
  font-size: 16px;
  margin-bottom: 15px;
  align-self: center;
`;

export const EmptySubText = styled.Text`
  font-family: Montserrat;
  font-size: 14px;
  text-align: center;
  color: ${colors.primary};
  opacity: 0.7;
  align-self: center;
  margin: 0 20px 25px;
`;

export const EmptyIcon = styled(MaterialIcons).attrs({
  size: 140,
  color: colors.primary,
  name: 'remove-shopping-cart',
})`
  opacity: 0.7;
  margin-vertical: 20px;
  align-self: center;
`;

export const ProductItem = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 150px;
  padding: 10px 20px 50px 10px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const ProductDetails = styled.View`
  margin: 0 25px 0 20px;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
  margin-bottom: -25px;
`;

export const ProductName = styled.Text.attrs({
  numberOfLines: 2,
  ellipsizeMode: 'tail',
})`
  font-family: MontserratMediumItalic;
  color: ${colors.black};
  max-width: 160px;
  margin-bottom: 5px;
`;

export const DeleteProductIcon = styled(MaterialCommunityIcons).attrs({
  size: 26,
  color: colors.tertiary,
  name: 'delete-empty',
})`
`;

export const ProductInfo = styled.View`
  background: ${transparentize(0.85, colors.primary)};
  position: absolute;
  bottom: -1px;
  right: 0;
  width: 76%;
  height: 48px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.black};
  margin-bottom: 5px;
`;

export const ProductSubTotal = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${colors.secondary};
`;

export const AmountContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const IconButton = styled.TouchableOpacity`
  align-items: center;
`;

export const Amount = styled.Text`
  margin: 0 8px;
  font-family: MontserratMedium;
  padding: 2px 20px 2px 5px;
  border-radius: 4px;
  background: ${colors.white.primary};
`;

export const TotalText = styled.Text`
  margin-top: 50px;
  font-family: Montserrat;
  align-self: center;
  color: ${colors.gray};
`;

export const Total = styled.Text`
  font-weight: bold;
  align-self: center;
  font-size: 26px;
  margin-bottom: 30px;
`;

export const Order = styled(RectButton)`
  align-self: center;
  width: 80%;
  background: ${colors.tertiary};
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

export const OrderText = styled.Text`
  font-family: MontserratBold;
  color: ${colors.white.secondary};
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
