import { API_URL } from 'react-native-dotenv';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

declare global {
  interface Console {
    tron: typeof Reactotron
  }
}

if (__DEV__) {
  const tron = Reactotron
    .configure({ host: API_URL })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear;
  console.tron = tron;
}
