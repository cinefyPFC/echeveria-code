import React, { useState } from 'react';
import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';
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
        <h2>Administrativo</h2>
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
          <Link to="#" className="btnAdmin" onClick={console.log('Logou')}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Entrar
          </Link>
        </form>
      </div>
    </div>
  );

  async function loginAdmin() {
    await api
      .post('sessions', {
        email: email,
        senha: senha,
      })
      .then(function (response) {
        notificarSucessoLogin(response);
        console.log(response);
      })
      .catch(function (error) {
        notificarFalha(error);
      });
    setEmail('');
    setSenha('');
  }
}
export default Login;
