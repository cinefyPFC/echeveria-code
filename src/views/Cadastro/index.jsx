import React, { useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
// import ImageUploader from 'react-images-upload';
import './style/cadastro.css';

function Cadastro() {
  const [apelido, setApelido] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  // const [foto, setFoto] = useState('');

  // const onDrop = (foto) => {
  //   setFoto([...foto]);
  // };
  const notificarSucesso = (response) => {
    toast.success('Usuario ' + response.apelido + ' cadastrado com sucesso!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notificarFalha = (error) => {
    toast.error(`${error.response.data.erro} dos dados`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="body">
      <div className="cadastro-box">
        <h2>Cadastro</h2>
        <form>
          <div className="user-box">
            {/* <input type="text" name="apelido" required="" /> */}
            <input
              type="text"
              name="apelido"
              pattern="[^\0]"
              required=""
              value={apelido}
              onChange={(e) => setApelido(e.target.value)}
            />

            <label>Apelido</label>
          </div>
          <div className="user-box">
            {/* <input type="email" name="" required="" /> */}
            <input
              type="text"
              pattern="/^[^\s@]+@[^\s@]+$/"
              name=""
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Email</label>
          </div>
          <div className="user-box">
            {/* <input type="password" name="" required="" /> */}
            <input
              type="password"
              pattern="[^\0]"
              name="password"
              required=""
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <label>Senha</label>
          </div>
          {/* <div className="user-box">
            <ImageUploader
              withIcon={true}
              onChange={onDrop}
              imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg']}
              maxFileSize={5242880}
            />
          </div> */}
          <Link to="/login">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Entrar
          </Link>
          <Link to="#" className="btnCadastrar" onClick={novoUsuario}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Cadastrar
          </Link>
        </form>
      </div>
      <ToastContainer />
    </div>
  );

  async function novoUsuario() {
    await api
      .post('users', {
        apelido: apelido,
        email: email,
        senha: senha,
      })
      .then(function (response) {
        notificarSucesso(response);
      })
      .catch(function (error) {
        notificarFalha(error);
      });
    setApelido('');
    setEmail('');
    setSenha('');
  }
}

export default Cadastro;
