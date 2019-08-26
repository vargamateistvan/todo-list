import { combineReducers } from 'redux'
import * as todos from './todos'

export interface State {
  todos: todos.State
}

export const initialState: State = {
  todos: todos.initialState
}

export const reducer = combineReducers<State>({
  //@ts-ignore
  todos: todos.reducer
})