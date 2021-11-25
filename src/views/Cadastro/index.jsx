import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import api from '../../services/api';
// import ImageUploader from 'react-images-upload';
import './style/cadastro.css';


function Cadastro() {
  let history = useHistory();
  const [apelido, setApelido] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [personagem, setPersonagem] = useState('');
  const [emailSecundario, setEmailSecundario] = useState('');
  const [dtNascimento, setDtnascimento] = useState('');
  const [avatar, setAvatar] = useState('');

  const notificarSucessoCadastro = (response) => {
    toast.success(
      'Usuario ' + response.data.apelido + ' cadastrado com sucesso!',
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

  return (
    <div className="body">
      <div className="cadastro-box">
        <h2>Cadastro</h2>
        <form>
          <div className="user-box">
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
            <input
              type="text"
              name="apelido"
              pattern="[^\0]"
              required=""
              value={personagem}
              onChange={(e) => setPersonagem(e.target.value)}
            />

            <label>Personagem Favorito</label>
          </div>
          <div className="user-box">
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
            <input
              type="text"
              pattern="/^[^\s@]+@[^\s@]+$/"
              name=""
              required=""
              value={emailSecundario}
              onChange={(e) => setEmailSecundario(e.target.value)}
            />

            <label>Email Secundário</label>
          </div>

          <div className="user-box">
            <input
              type="password"
              pattern="[^\0]"
              name="password"
              required="Digite a senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <label>Senha</label>
          </div>

          <div className="user-box">
            <input
              type="Date"
              name=""
              placeholder="Data Nascimento"
              date-format="MM DD YYYY"
              max="2019-12-31"
              maxLength="8"
              required="Digite sua data de nascimento"
              value={dtNascimento}
              onChange={(e) => setDtnascimento(e.target.value)}
            />
          </div>
          <div className="user-box">
            <input
              id="upload"
              name=""
              type="file"
              className="file-input"
              accept="image/*"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            //onChange={(e)=> { this.readFile(e) }}
            />
          </div>

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
        personagemFav: personagem,
        emailSecundario: emailSecundario,
        dtNascimento: dtNascimento,

      })
      .then(function (response) {
        notificarSucessoCadastro(response);
      })
      .catch(function (error) {
        console.log('Opa aconteceu esse erro aqui!', error.toJSON());
        notificarFalha(error);
      });


  }
}

export default Cadastro;
