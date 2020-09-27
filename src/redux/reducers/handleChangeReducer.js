import './initialText';

const DEFAULT_STATE = require('./initialText.json');

const handleChangeReducer = (state = DEFAULT_STATE.text, {type, payload}) =>{
  switch (type) {
    case 'TEXT':
      return payload;
    default:
      return state;
  }
}

export default handleChangeReducer;
