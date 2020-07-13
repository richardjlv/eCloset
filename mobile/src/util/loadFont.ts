import * as Font from 'expo-font';

async function loadFont() {
  await Font.loadAsync({
    MontserratBold: require('~/assets/fonts/Montserrat-Bold.ttf'),
    MontserratMediumItalic: require('~/assets/fonts/Montserrat-MediumItalic.ttf'),
    MontserratMedium: require('~/assets/fonts/Montserrat-Medium.ttf'),
    Montserrat: require('~/assets/fonts/Montserrat-Regular.ttf'),
  });
}

export default loadFont;
