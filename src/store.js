// import create store applyMiddleWare
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// equals empty object
const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleWare(...middleware),
    window.devToolsExtension ? window.devToolsExtensions() : f => f
  )
)
export default store;
