import React from 'react';
import { Link } from 'react-router-dom';

// const [senha, setSenha] = useState('');
class atualizarSenha extends React.Component {
  componentDidMount() {
    let pegaToken = window.location.href;
    pegaToken = pegaToken.replace('http://localhost:3000/novasenha?token=', '');
    console.log(pegaToken);
  }

  // novaSenha() {
  //   console.log(pegaToken);
  //   const options = {
  //     method: 'PUT',
  //     url: 'http://localhost:3333/users/newpass',
  //     headers: {
  //       'Content-Type': 'application/json',

  //       Authorization: `Bearer ${pegaToken}`,

  //     },
  //     data: { senha: senha }
  //   };

  //   axios.request(options).then(function (response) {
  //     console.log(response.data);
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // }
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

            <Link to="#" onClick={""}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Atualizar Senha
            </Link>
          </form>
        </div>
      </div>
    );
  }


}

export default atualizarSenha;
