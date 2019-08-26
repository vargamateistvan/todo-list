import React from 'react';
import {Link } from "react-router-dom";
import { List } from 'antd'
import TodoCard from './TodoCard'
import { Todo, Todos } from '../types/index.';

// TODO Toogle todo

const TodoList: React.FC<Todos> = (props) => {
    console.log("ASD", props)

    const { todos } = props

    return (
      <List
      dataSource={todos}
      renderItem={(todo: Todo) => {
        return (
          <List.Item>
            <Link to={`/todo/${todo.id}`}>
              <TodoCard
                userId={todo.userId}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
              ></TodoCard>
            </Link>
          </List.Item>
        )
      }}
    >
    </List>
    )
}

export default TodoList