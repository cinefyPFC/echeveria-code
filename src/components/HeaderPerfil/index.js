// import { response } from 'express';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function HeaderPerfil() {
	const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  let token = sessionStorage.getItem('token');
	function handleChange(e){
		setSearch(e.target.value);
	}

  useEffect( () => {
		if(search.length > 2){
			const options = {
        method: 'GET',
        url: 'http://localhost:3333/users/search',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTYzNzcxMzkxMiwiZXhwIjoxNjM4MzE4NzEyfQ.jyFTxRHld4KnEC-HLw8zBRrx8iS8JhEwuRwXgrRwcmI'
        },
        data: {apelido: 'a'}
      };
      axios.request(options).then(r => {
          document.getElementsByClassName('search-result')[0].style.display = 'block';
          setResults(r.data.results);
          console.log(r.data)
        }).catch(function (error) {
          console.error(error);
      });
    }
		else{
      console.log('asudhjausdhaushduhasudhau')
			document.getElementsByClassName('search-result')[0].style.display = 'none';
		}
	}, [search])



	return (
		<header>

			<div className="down-header">
				<div className="search">
					<input type="text" value={search} onChange={handleChange} placeholder="Buscar usuário" autoComplete="off"/>
					<div className="search-result">

					</div>
				</div>


				<div className="navbar">
					<ul>
						<li><Link to="/filmes">Filmes</Link></li>
						<li><Link to="/tv">Séries</Link></li>
						<li><Link to="/discovery">Descubra novos filmes</Link></li>
            <li><Link to="/perfil">Perfil</Link></li>
            <li className="Logout-Lista"><Link className="Logout">Sair</Link></li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default HeaderPerfil;
