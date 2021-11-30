import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AtualizarSenha() {
  const [input, setInput] = useState('');

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
  function SenhaAtualizada() {
    const tokenzin = sessionStorage.getItem('pegaToken');
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
      })
      .catch(function (error) {
        console.error(error);
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
    </div>
  );
}

export default AtualizarSenha;
