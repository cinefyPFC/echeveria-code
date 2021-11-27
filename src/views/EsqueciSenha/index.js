import React from 'react';
import { Link } from 'react-router-dom';

function recuperarSenha(){
  console.log("email enviado");
}

function Login() {
  return (
    <div className="body">
      <div className="cadastro-box">
        <h2>Recuperar Senha</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              name="email"
              pattern="/^[^\s@]+@[^\s@]+$/"
              required=""
            />
            <label>Digite seu email </label>

          </div>
          <div className="user-box">
            <input
              type="text"
              name="email"
              pattern="/^[^\s@]+@[^\s@]+$/"
              required=""
            />
            <label>Digite seu personagem favorito </label>

          </div>

          <Link to="#" onClick={recuperarSenha}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Recuperar Senha
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
