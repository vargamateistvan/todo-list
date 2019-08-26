import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import TodoPage from './components/TodoPage';
import TodoList from './components/TodoList';

const routing = (
    <Router>
        <Switch>
            <Route path="/" component={App} />
            <Route path="/todos" component={TodoList} />
            <Route path="/todo/:id" component={TodoPage} />
        </Switch>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
