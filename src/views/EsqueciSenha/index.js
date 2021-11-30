import axios from "axios";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';



function Login() {
  const notificarFalha = (error) => {
    toast.error(`Erro na validação de dados`, {
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
      `Email enviado com sucesso!`,
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      },
    );
  };

  const [email, setEmail] = useState('');
  const [emailSecundario, setEmailSecundario] = useState('');
  const [personagemFav, setPersonagemFav] = useState('');
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Digite seu email </label>

          </div>
          <div className="user-box">
            <input
              type="text"
              name="emailSecundario"
              pattern="/^[^\s@]+@[^\s@]+$/"
              required=""
              value={emailSecundario}
              onChange={(e) => setEmailSecundario(e.target.value)}
            />
            <label>Digite seu email secundario</label>

          </div>
          <div className="user-box">
            <input
              type="text"
              name="email"
              pattern="/^[^\s@]+@[^\s@]+$/"
              required=""
              value={personagemFav}
              onChange={(e) => setPersonagemFav(e.target.value)}
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
      <ToastContainer />
    </div>
  );

  function recuperarSenha() {
    const options = {
      method: 'POST',
      url: 'http://localhost:3333/users/forgotpassword',
      headers: { 'Content-Type': 'application/json' },
      data: {
        email: email,
        emailSecundario: emailSecundario,
        personagemFav: personagemFav,
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      notificarSucessoLogin(response)
      setEmail('');
      setEmailSecundario('');
      setPersonagemFav('');
    }).catch(function (error) {
      console.error(error);
      notificarFalha(error)
    });
  }
}

export default Login;
