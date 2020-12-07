import { createStore, applyMiddleware } from 'redux'
import { initialState, reducer } from "./reducers/reducer";
import thunk from 'redux-thunk'

export function createStoreAndReducer() {
    return createStore(reducer, initialState, applyMiddleware(thunk))
}