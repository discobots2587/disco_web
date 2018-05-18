import C from '../constants'
import appReducer from '../reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reduxLogger from 'redux-logger'
import initialData from './initialState'

let logger = store => next => action => {
    // Suppressing messages, not doing anything with info
    return next(action)
}

if (process.env.NODE_ENV !== 'production') {
    logger = reduxLogger
}

// const storeFactory = (initialState={}) => {
//     return applyMiddleware(thunk,logger)(createStore)(appReducer, initialState)
// }

const initialState = (localStorage["tradenba-store"]) ?
    JSON.parse(localStorage["tradenba-store"]) :
    initialData

const storeFactory = (initialState={}) => {
  return createStore(
    appReducer,
    initialState,
    applyMiddleware(thunk,logger)
  );
}

const saveState = () =>
    localStorage["tradenba-store"] = JSON.stringify(store.getState())

const store = storeFactory(initialState)
store.subscribe(saveState)

export default store
