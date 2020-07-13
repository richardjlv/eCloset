import { API_URL } from 'react-native-dotenv';
import Reactotron from 'reactotron-react-native';

declare global {
  interface Console {
    tron: typeof Reactotron
  }
}

if (__DEV__) {
  const tron = Reactotron
    .configure({ host: API_URL })
    .useReactNative()
    .connect();

  tron.clear;
  console.tron = tron;
}
