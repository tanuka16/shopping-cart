import { combineReducers } from 'redux';
import promoCodeReducer from './promoCodeReducer'

export default combineReducer({
  promoCode: promoCodeReducer
});
