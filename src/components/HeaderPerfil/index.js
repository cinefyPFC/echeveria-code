import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


function HeaderPerfil() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  let history = useHistory();

  function handleChange(e) {
    setSearch(e.target.value);
  }
  function logout() {
    sessionStorage.removeItem('token')
    history.push('/')
  }
  useEffect(() => {
    let token = sessionStorage.getItem('token');
    if (search.length > 2) {
      console.log(search)
      const options = {
        method: 'POST',
        url: 'http://localhost:3333/users/search',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        data: { apelido: `${search}` }
      };
      axios.request(options)
        .then(r => {
          document.getElementsByClassName('search-result')[0].style.display = 'block';
          setResults(r.data.results);
          console.log(r.data);
          // renderResults(r)
        }).catch(function (error) {
          console.error(error);
        });
    }
    else {
      document.getElementsByClassName('search-result')[0].style.display = 'none';
    }
  }, [search])

  return (
    <header>

      <div className="down-header">
        <div className="search">
          <input type="text" value={search} onChange={handleChange} placeholder="Buscar usuário" autoComplete="off" />
          <div className="search-result">
            {}
          </div>
        </div>


        <div className="navbar">
          <ul>
            <li><Link to="/filmes">Filmes</Link></li>
            <li><Link to="/tv">Séries</Link></li>
            <li><Link to="/discovery">Descubra novos filmes</Link></li>
            <li><Link to="/perfil">Perfil</Link></li>
            <li><Link to="/favoritos">Favoritos</Link></li>
            <li className="Logout-Lista"><Link to="#"className="Logout" onClick={logout}>Sair</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}


// function renderResults(r) {
//   console.log(r)
//   return (
//     r.slice(0, 10).map(r => {
//       return <div key={r.id} onClick={() => { document.getElementsByClassName('search-result')[0].style.display = 'none' }}>
//         <Link to={`/Usuario/${r.id}`}>
//           <div className='search-image'>
//             {/* <img src={API.image(r.logo_path, 'w200')} alt="Produtoras" /> */}
//           </div>

//           <div className="search-content">
//             <div className="search-name">
//               {r}
//             </div>
//           </div>
//         </Link>
//       </div>
//     })
//   )
// }


export default HeaderPerfil;
