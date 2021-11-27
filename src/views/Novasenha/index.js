import React from 'react';
import { Link } from 'react-router-dom';

function atualizarSenha() {
  console.log('senha atualizada');
}

function Login() {
  return (
    <div className="body">
      <div className="cadastro-box">
        <h2>Nova Senha</h2>
        <form>
          <div className="user-box">
            <input
              type="password"
              name="senha"
              pattern="/^[^\s@]+@[^\s@]+$/"
              required=""


            />
            <label>Digite sua nova senha </label>
          </div>

          <Link to="#" onClick={atualizarSenha}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Atualizar Senha
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
