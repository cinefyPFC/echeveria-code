import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cadastro from '../views/Cadastro';
import Admin from '../views/Dashboard';
import Erro from '../views/Error';
import Home from '../views/Home';
import Login from '../views/Login';
import Profile from '../views/Perfil';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/perfil" component={Profile} />
        <Route path="*" component={Erro} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
