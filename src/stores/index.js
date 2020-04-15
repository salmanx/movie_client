import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../redux/reducers";
import rootSaga from "../redux/sagas";
import logger from "redux-logger";

const bindMiddleware = middleware => {
  const { composeWithDevTools } = require("redux-devtools-extension"); // eslint-disable-line  global-require
  return composeWithDevTools(applyMiddleware(...middleware, logger));
  // if (process.env.NODE_ENV !== 'production') {
  //   const {composeWithDevTools} = require('redux-devtools-extension'); // eslint-disable-line  global-require
  //   return composeWithDevTools(applyMiddleware(...middleware));
  // }
  // return applyMiddleware(...middleware);
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
sagaMiddleware.run(rootSaga);

export default store;
