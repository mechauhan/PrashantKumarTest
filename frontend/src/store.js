import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {
  registerReducer,
  getUsersReducer,
  removeUserReducer,
} from './reducer/userReducer';

const initialState = {};
const reducer = combineReducers({
  registerData: registerReducer,
  allUsersData: getUsersReducer,
  removedUser: removeUserReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
