import { lighten } from 'polished';
import { StyleSheet, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { colors } from '~/styles/theme';

interface ProductSizeProps {
  selected: boolean
}

export const Container = styled.ScrollView`
  flex: 1;
`;

const height = Math.floor(Math.round(Dimensions.get('screen').height));

export const ProductImageContainer = styled.View`
  padding: 30px 60px;
  background: ${colors.white.primary};
  margin-top: 20px;
  margin-left: 40px;
  align-items: center;
  justify-content: center;

  border: 1px solid ${lighten(0.25, colors.secondary)};
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductInfo = styled.View`
  margin: 30px 0 0;
  padding: 20px 0;
  background: ${colors.white.primary};
  flex: 1;
  border: 1px solid ${lighten(0.25, colors.secondary)};
  border-top-left-radius: 30px;
`;

export const Category = styled.Text`
  font-size: 16px;
  color: ${colors.gray};
  line-height: 19px;
  letter-spacing: 1px;
  font-family: Montserrat;
  margin-bottom: 5px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: MontserratMediumItalic;
  color: ${colors.black};

  text-align: center;
  line-height: 24px;
  letter-spacing: 0.6px;

  align-self: center;
  margin: 0 30px 20px;
`;

export const Price = styled.Text`
  font-size: 30px;
  font-weight: bold;
  
  color: ${colors.primary};

  line-height: 29px;
  letter-spacing: 0.6px;

  align-self: center;
  margin-bottom: 10px;
`;

export const Divider = styled.View`
  height: ${StyleSheet.hairlineWidth}px;
  width: 100%;
  background: ${colors.secondary};
  opacity: 0.8;
  margin: 10px 0;
`;

export const ProductSizeContainer = styled.View`
  flex-direction: row;

  margin-bottom: 20px;
  align-self: center;
`;

export const ProductSize = styled.TouchableOpacity<ProductSizeProps>`
  align-items: center;
  padding: 8px 0;
  width: 35px;
  border: 1px solid ${colors.primary};
  border-radius: 10px;
  margin: 0 10px;
  align-self: center;
  background: ${(props) => (props.selected ? colors.primary : 'transparent')};
`;

export const ProductSizeText = styled.Text<ProductSizeProps>`
  font-size: 16px;
  color: ${(props) => (props.selected ? colors.white.primary : colors.primary)};
  font-family: MontserratBold;
  align-self: center;
`;

export const ProductDetails = styled.View`
  padding: 20px 40px;
  margin-bottom: 40px;
  width: 100%;
  min-height: 100%;
  align-items: flex-start;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: ${colors.black};
  font-family: MontserratMedium;

  line-height: 19px;
  letter-spacing: 1.6px;

  margin: 20px 0 10px;
  align-self: center;
`;

export const DetailsTitle = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.black};

  line-height: 17px;
  letter-spacing: 0.4px;

  margin-bottom: 5px;
  margin-top: 10px;
`;

export const DetailsInfo = styled.Text`
  font-size: 12px;
  color: ${colors.black};
  opacity: 0.7;

  line-height: 14px;
  letter-spacing: 0.3px;

  margin-bottom: 10px;
`;

export const AddButton = styled(RectButton)`
  position: absolute;
  width: 80%;
  background: ${colors.tertiary};
  left: 10%;
  top: ${height - 150}px;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
`;

export const AddButtonText = styled.Text`
  font-family: MontserratBold;
  color: ${colors.white.secondary};
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
