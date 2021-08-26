import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import GlobalReducer from './Reducers/GlobalReducer';
import thunk from 'redux-thunk';
const Store = createStore(
  combineReducers({ GlobalReducer }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default Store;
