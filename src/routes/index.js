import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TodoPage from '../components/TodoPage';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/todo/:id" component={TodoPage}/>
        </Switch>
    </BrowserRouter>
);

export default Routes