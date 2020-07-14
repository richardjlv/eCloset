import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';
import { Provider } from 'react-redux';

import Routes from './src/routes';
import { navigationRef } from '~/services/rootNavigation';
import store from '~/store';
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
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
