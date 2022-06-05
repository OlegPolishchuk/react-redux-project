import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';

import { loginReducer } from './reducers/login';
import { profileReducer } from './reducers/profile';

const rootReducer = combineReducers({
  profile: profileReducer,
  login: loginReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
