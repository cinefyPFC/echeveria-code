import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function AtualizarSenha() {
  const [input, setInput] = useState('');
  let history = useHistory();

  useEffect(() => {
    async function token() {
      let pegaToken = window.location.href;
      pegaToken = pegaToken.replace(
        'http://localhost:3000/novasenha?token=',
        '',
      );
      console.log(pegaToken);
      sessionStorage.setItem('pegaToken', pegaToken);
    }
    token();
  }, []);

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

  const notificarSucesso = (response) => {
    toast.success(
      `Senha mudad com sucesso!`,
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

  function SenhaAtualizada() {
    const tokenzin = sessionStorage.getItem('pegaToken');
    console.log(tokenzin)
    const options = {
      method: 'PUT',
      url: 'http://localhost:3333/users/newpass',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenzin}`,
      },
      data: { senha: input },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        notificarSucesso()
        history.push('/login');
      })
      .catch(function (error) {
        console.error(error);
        notificarFalha()
      });
  }

  return (
    <div>
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
                value={input}
                onInput={(e) => setInput(e.target.value)}
              />
              <label>Digite sua nova senha </label>
            </div>
            <Link to="#" onClick={SenhaAtualizada}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Atualizar Senha
            </Link>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AtualizarSenha;
