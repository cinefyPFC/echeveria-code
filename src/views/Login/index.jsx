import React from 'react';
import { Link } from 'react-router-dom';
import './style/login.css';

function Login() {
  return (
    <div className="body">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Usuário</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Senha</label>
          </div>
          <Link className="esqueci-senha" to="#">
            esqueci a senha
          </Link>
          <Link to="/perfil">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Entrar
          </Link>
          <Link to="/cadastro" className="btnCadastrar">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Cadastrar
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
