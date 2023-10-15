import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import exampleReducer from './test.reducer';
import { authReducer } from './reducers/authReducer'
import {messengerReducer} from './reducers/messengerReducer';

// Import your reducers here and add them to combineReducers
// For example:
// import someReducer from './someReducer';

const rootReducer = combineReducers({
  // Add your reducers here
  // someReducer,
  auth: authReducer,
  messenger : messengerReducer
  // example: exampleReducer,
});

const middleware = [thunkMiddleware];

// Use conditional logic to apply Redux DevTools extension middleware
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;