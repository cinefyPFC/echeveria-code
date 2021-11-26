import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HeaderPerfil() {
	const [search, setSearch] = useState('');

	function handleChange(e){
		setSearch(e.target.value);
	}


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
            <li><Link to="/favoritos">Favoritos</Link></li>
            <li className="Logout-Lista"><Link className="Logout">Sair</Link></li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default HeaderPerfil;
