import { createStore, combineReducers } from 'redux';
import handleChangeReducer from './reducers/handleChangeReducer';

const reducer = combineReducers({
  handleChangeReducer
});

const store = createStore(reducer);

export default store;
