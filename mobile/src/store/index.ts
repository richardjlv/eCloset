import {
  createStore, compose, applyMiddleware, Store,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { ApplicationState } from './types';

const sagaMonitor = __DEV__
  ? console.tron.createSagaMonitor()
  : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const enhancer = __DEV__
  ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
  : applyMiddleware(sagaMiddleware);

const store: Store<ApplicationState> = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
