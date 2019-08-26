import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { State, reducer, initialState } from '../reducers'

//@ts-ignore
const store = createStore<State>(reducer, initialState, applyMiddleware(logger))

export default store