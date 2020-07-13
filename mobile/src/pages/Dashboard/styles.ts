import { lighten, darken } from 'polished';
import { StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '~/styles/theme';

interface FilterContainerProps {
  filterIsOpen: boolean
}

interface FilterOptionsProps {
  selected: boolean
}

const height = Math.floor(Math.round(Dimensions.get('screen').height));

export const Container = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: center;
  margin-top: 15px;
`;

export const FilterButton = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.white.primary};
  border-right-width: 1px;
  border-right-color: ${colors.white.primary};
  border-bottom-right-radius: 4px;
  margin: 5px 40px;
  padding: 0 6px 2px;
`;

export const FilterText = styled.Text`
  font-size: 18px;
  color: ${colors.white.primary};
  font-family: Montserrat;
`;

export const FilterContainer = styled.ScrollView<FilterContainerProps>`
  position: absolute;
  top: 50px;
  right: 40px;
  z-index: 5;
  padding: 0px 20px;
  background: ${darken(0.06, colors.primary)};
  border: 1px solid ${lighten(0.01, colors.primary)};
  border-radius: 10px;
  border-top-right-radius: 0;
  max-height: ${height * 0.6}px;
  height: auto;
`;

export const FilterType = styled.Text`
  color: ${colors.white.primary};
  text-align: right;
  font-family: MontserratMediumItalic;
  margin-bottom: 2px;
  margin-top: 20px;
`;

export const Divider = styled.View`
  height: ${StyleSheet.hairlineWidth}px;
  width: 100%;
  background: ${colors.white.primary};
  opacity: 0.8;
  margin-bottom: 8px;
`;

export const FilterOptionsButton = styled.TouchableOpacity<FilterOptionsProps>`
  padding: 6px 20px;
  background: ${(props) => (props.selected ? colors.primary : 'transparent')};
  margin-bottom: 10px;
  border-radius: 4px;
`;

export const FilterOptionsText = styled.Text<FilterOptionsProps>`
  color: ${colors.white.primary};
  font-family: ${(props) => (props.selected ? 'MontserratMedium' : 'Montserrat')};
  text-align: right;
`;

export const ProductList = styled.FlatList`
  padding: 20px 0;
  margin: 0 auto;
`;

export const ProductItem = styled.TouchableOpacity`
  background: ${colors.white.primary};
  margin: 15px;
  border-radius: 5px;
  border: 1px solid ${lighten(0.25, colors.secondary)};
`;

export const ProductImage = styled.Image`
  width: 110px;
  height: 110px;
  margin: 15px 20px;
`;

export const ProductDetails = styled.View`
  align-items: center;
  justify-content: center;

  margin: auto;
`;

export const Category = styled.Text`
  color: ${colors.gray};
  font-size: 10px;
  letter-spacing: 1px;
  line-height: 13px;
  font-family: Montserrat;

  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: ${colors.black};
  text-align: center;
  font-family: MontserratMediumItalic;

  max-width: 100px;
  line-height: 15px;
`;

export const Price = styled.Text`
  font-size: 14px;
  color: ${colors.primary};
  font-weight: bold;
  line-height: 17px;
  
  margin: 10px 0 15px 0;
`;
