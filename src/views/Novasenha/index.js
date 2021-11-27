import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

class atualizarSenha extends React.Component {
  componentDidMount() {
    let pegaToken = window.location.href;
      pegaToken = pegaToken.replace("http://localhost:3000/novasenha?token=", "");
      console.log(pegaToken);
  }

render() {
    return (
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
              />
              <label>Digite sua nova senha </label>
            </div>

            <Link to="#" onClick={atualizarSenha}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Atualizar Senha
            </Link>
            <Link to="#" >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Token
            </Link>
          </form>
          <div id="demo"></div>
        </div>
      </div>
    );
  }
}

export default atualizarSenha;
