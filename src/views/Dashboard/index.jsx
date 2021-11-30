import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import api from '../../services/api';

function Login() {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const notificarFalha = (error) => {
    toast.error(`Falha na validação dos dados`, {
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
    toast.success(`Usuario administrativo logado com sucesso!`, {
      position: 'top-right',
      onClose: () => completarLogin(response.data),
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const completarLogin = (response) => {
    sessionStorage.setItem('token', response.token);
    history.push('/gerenciarusuarios');
  };


  async function loginAdmin() {
    if (email !== /^[^\s@]+@[^\s@]+$/) {
      await api
        .post('admin/sessions', {
          apelido: email,
          senha: senha,
        }).then(function (response) {
          notificarSucessoLogin(response);
          console.log(response);
        })
        .catch(function (error) {
          notificarFalha(error);
        });
    } else {
      await api
        .post('admin/sessions', {
          email: email,
          senha: senha,
        }).then(function (response) {
          notificarSucessoLogin(response);
          console.log(response);
        })
        .catch(function (error) {
          notificarFalha(error);
        });
    }
    setEmail('');
    setSenha('');
  }
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
          <Link to="#" className="btnAdmin" onClick={loginAdmin}>
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
}
export default Login;
