import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cadastro from '../views/Cadastro';
import Erro from '../views/Error';
import Home from '../views/Home';
import Login from '../views/Login';
import Profile from '../views/Perfil';
import Admin from '../views/Dashboard';
import Dashboard from '../views/Dashboard/Profile';
import Usuario from '../views/GerenciamentoUsuario';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/perfil" component={Profile} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/usuarios" component={Usuario} />
        <Route path="*" component={Erro} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
