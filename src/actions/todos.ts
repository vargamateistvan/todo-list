export enum ActionTypes {
    TOGGLE_TODO = 'TOGGLE_TODO'
}

export interface ToggleTodoAction { type: ActionTypes.TOGGLE_TODO, id: number }

export const toggleTodo = (id: number): ToggleTodoAction => ({
    type: ActionTypes.TOGGLE_TODO,
    id
})

export type Action = ToggleTodoAction