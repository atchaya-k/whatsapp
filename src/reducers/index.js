import { combineReducers } from 'redux';
import chatlistreducer from './chatlistreducer'
import getSingleChatName from './getSingleChatName'
import getSingleConvo from './getSingleConvo'
const rootReducer = combineReducers({
  chatlist : chatlistreducer,
  singleChatName: getSingleChatName,
  singleConvo: getSingleConvo,
})
export default rootReducer;
