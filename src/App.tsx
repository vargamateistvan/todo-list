import React from 'react';
import { Provider } from 'react-redux'
import { Route, Link } from "react-router-dom";

import store from './store'
import './App.css';
import TodoPage from './components/TodoPage';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  console.log("STORE", store.getState())

  return (
      <Provider store={store}>
        <div className="App">
          <Link to="/todos">Todos</Link>

          <Route 
            path="/todos"
            component={TodoList}
          />

          <Route 
            path="/todo/:id"
            component={TodoPage}
          />
        </div>
      </Provider>
  );
}

export default App;
