import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';
import Routes from './src/routes';
import { colors } from '~/styles/theme';
import loadFont from '~/util/loadFont';

const App: React.FC = () => {
  const [isReady, setIsReady] = useState(true);

  if (isReady) {
    return (
      <AppLoading
        startAsync={loadFont}
        onFinish={() => setIsReady(false)}
      />
    );
  }
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
