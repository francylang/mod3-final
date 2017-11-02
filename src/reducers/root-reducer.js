import { combineReducers } from 'redux';
import { houseReducer } from './houseReducer';
import { swornMemberReducer } from './memberReducer';

const rootReducer = combineReducers({
  houses: houseReducer,
  swornMembers: swornMemberReducer
});


export default rootReducer;
