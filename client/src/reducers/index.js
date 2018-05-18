import C from '../constants'
import { combineReducers } from 'redux'

const isStoreWorking = (state = {}, action) => {
  switch (action.type) {
    case C.STORE_IS_WORKING:
      return action.isStoreWorking;
    default:
      return state;
  }
}

export default combineReducers({
    isStoreWorking
});
