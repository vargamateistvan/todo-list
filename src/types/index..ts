export interface Todo {
    userId: number,
    id: number,
    title: string
    completed: boolean
}

export type ActionType = {
    id: number,
    type: string
}

export type Todos = {
    todos: [Todo]
}