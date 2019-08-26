import React from 'react';
import { Link } from "react-router-dom";
import { List } from 'antd'
import TodoCard from './TodoCard'
import { Todo } from '../types/index.';
import store from '../store';

// TODO Toogle todo

const TodoList: React.FC = () => {
    const todos = store.getState().todos.todos

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