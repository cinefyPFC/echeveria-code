import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';


function HeaderPerfil() {
  let history = useHistory();

  function logout() {
    sessionStorage.removeItem('token')
    history.push('/')
  }
  useEffect(() => {
    let token = sessionStorage.getItem('token');
  })

  return (
    <header>

      <div className="down-header">



        <div className="navbar">
          <ul>
            <li><Link to="/filmes">Filmes</Link></li>
            <li><Link to="/tv">Séries</Link></li>
            <li><Link to="/discovery">Descubra novos filmes</Link></li>
            <li><Link to="/perfil">Perfil</Link></li>
            <li><Link to="/lista">Lista</Link></li>
            <li className="Logout-Lista"><Link to="#" className="Logout" onClick={logout}>Sair</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default HeaderPerfil;
