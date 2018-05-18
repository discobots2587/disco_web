import C from '../constants'

export const checkForValidStore = () => {
  let action = {
    type: C.STORE_IS_WORKING,
    isStoreWorking: true
  };
  return action;
}
