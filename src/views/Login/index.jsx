import React, { useState } from 'react';
import api from '../../services/api';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function Login() {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const notificarFalha = (error) => {
    toast.error(`${error.response.data.erro}`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notificarSucessoLogin = (response) => {
    toast.success(
      `Usuario ${response.data.usuario.apelido} logado com sucesso!`,
      {
        position: 'top-right',
        onClose: () => completarLogin(response.data),
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      },
    );
  };

  const completarLogin = (response) => {
    sessionStorage.setItem('token', response.token);
    history.push('/perfil');
  };

  return (
    <div className="body">
      <ToastContainer />
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
            <label>Usuário/E-mail</label>
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

  // function redirectiones() {
  //   console.log('asudaudshauhsduahds');
  //   return <Redirect to="/perfil" />;
  // }

  async function loginUsuario() {
    await api
      .post('sessions', {
        email: email,
        senha: senha,
      })
      .then(function (response) {
        notificarSucessoLogin(response);
        console.log(response);
        // if response = 200, então salva o token no sessionStorage, manda um tostezada de sucesso e redireciona. Na pg de perfil
        // receber fazendo o showUsuario para mostrar o perfil do usuario que acabou de logar passando o token
      })
      .catch(function (error) {
        notificarFalha(error);
      });
    setEmail('');
    setSenha('');
  }
}

export default Login;
