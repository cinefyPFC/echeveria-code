import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '../components/Container';
//import Favoritos from '../components/Favoritos';
import Favoritos from '../components/Favoritos/index.jsx';
import gerenciarResenha from '../components/GerenciamentoReseha';
import gerenciarUsuario from '../components/GerenciamentoUsuario';
import Comentarios from '../components/resenha';
import Cadastro from '../views/Cadastro';
import Admin from '../views/Dashboard';
import Dashboard from '../views/Dashboard/Profile';
import Erro from '../views/Error';
import recuperarSenha from '../views/EsqueciSenha';
import Index from '../views/Home';
import Login from '../views/Login';
import novaSenha from '../views/Novasenha';
import Perfil from '../views/Perfil';

const Home = lazy(() => import('../components/Home'));
const HomeTv = lazy(() => import('../components/HomeTv'));
const MovieDetail = lazy(() => import('../components/MovieDetail'));
const Discovery = lazy(() => import('../components/Discovery'));
const Person = lazy(() => import('../components/Person'));
const Company = lazy(() => import('../components/Company'));


function Routes() {

  return (
    <Router>
      <Suspense fallback={<span>Loading...</span>}>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/resenha" component={Comentarios} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recuperarsenha" component={recuperarSenha} />
          <Route exact path="/novasenha" component={novaSenha} />
          <Route exact path="/cadastro" component={Cadastro} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/dash" component={Dashboard} />
          <Route exact path="/perfil" component={Perfil} />
          <Route exact path="/gerenciarusuarios" component={gerenciarUsuario} />
          <Route exact path="/gerenciarresenhas" component={gerenciarResenha} />

          <Route exact path="/favoritos">
            <Container>
              <Favoritos />
            </Container>
          </Route>

          <Route exact path="/filmes">
            <Container>
              <Home />
            </Container>
          </Route>

          <Route exact path="/tv">
            <Container>
              <HomeTv />
            </Container>
          </Route>

          <Route exact path="/discovery">
            <Container>
              <Discovery />
            </Container>
          </Route>

          <Route exact path="/person/:id">
            <Container>
              <Person />
            </Container>
          </Route>

          <Route exact path="/company/:id">
            <Container>
              <Company />
            </Container>
          </Route>

          <Route extac path="/:media/:id">
            <Container>
              <MovieDetail />
            </Container>
          </Route>
          <Route exact path="/*" component={Erro} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes;
