import Constants from 'expo-constants';
import styled from 'styled-components/native';

import logo from '~/assets/logo.png';
import { colors } from '~/styles/theme';

export const Wrapper = styled.SafeAreaView`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: ${Constants.statusBarHeight + 2}px 0;
  background: ${colors.primary};
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  height: 50px;
  width: 147.48px;
  margin-left: 30px;
`;

export const RouteTitle = styled.Text`
  font-size: 24px;
  margin: 0 30px;
  color: ${colors.white.tertiary};
  font-family: MontserratMedium;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 32px;
  margin: 0 30px;
`;

export const AmountCart = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: ${colors.tertiary};
  position: absolute;
  top: -5px;
  right: -5px;

  align-items: center;
  justify-content: center;
`;

export const Amount = styled.Text`
  font-family: MontserratBold;
  color: ${colors.white.secondary};
  position: absolute;
  top: -2px;
`;
