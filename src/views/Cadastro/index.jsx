import React from 'react';
import { Link } from 'react-router-dom';
import './style/cadastro.css';

function Cadastro() {
  return (
    <div className="body">
      <div className="cadastro-box">
        <h2>Cadastro</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Apelido</label>
          </div>
          <div className="user-box">
            <input type="email" name="" required="" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Senha</label>
          </div>
          <Link to="/login">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Entrar
          </Link>
          <Link to="/login" className="btnCadastrar">
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

export default Cadastro;
