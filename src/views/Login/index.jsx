import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import api from '../../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <div className="body">
      <div className="cadastro-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              name="email"
              pattern="/^[^\s@]+@[^\s@]+$/"
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Usuário</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="senha"
              required=""
              pattern="[^\0]"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <label>Senha</label>
          </div>
          <Link className="esqueci-senha" to="#">
            esqueci a senha
          </Link>
          <Link to="#" onClick={loginUsuario}>
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

  async function loginUsuario() {
    await api
      .post('sessions', {
        email: email,
        senha: senha,
      })
      .then(function (response) {
        console.log(response);
        // Redirect('/perfil');
      })
      .catch(function (error) {
        console.log(error);
      });
    setEmail('');
    setSenha('');
  }
}

export default Login;
