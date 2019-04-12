import { combineReducers } from 'redux';
import formReducer from './formReducer';
import navReducer from './navReducer';

export default combineReducers({
  form: formReducer,
  navbar: navReducer,
});
