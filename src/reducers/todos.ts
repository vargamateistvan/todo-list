import { Todo } from "../types/index.";
import { ActionTypes, Action } from '../actions/todos'

import data from '../data.json'

export interface State {
    todos: Todo[]
}

export const initialState: State = {
    todos: data
}

export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_TODO:
            console.log("STATE", state)
            //@ts-ignore
            return state.todos.map((todo: Todo) =>
            (todo.id === action.id)
                ? {...todo, completed: !todo.completed}
                : todo
            )
        default:
            return state
    }
}
  