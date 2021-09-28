import React, { useState, useEffect } from 'react';
import API from '../../services/tmdb'
import Section from '../Section';

function Home() {
	const [genres, setGenres] = useState();

	useEffect(() => {
		document.title = "Filmes | Cinefy"
		API.genres().then(r => {
			setGenres(r.data.genres);
		})
	}, []);

	if(!genres){
		return <div></div>
	}

	return (
		<div>
			<Section f={API.movies.trends} title="Tendências" genres={genres} />
			<Section f={API.movies.popular} title="Filmes Populares" genres={genres} />
			<Section f={API.movies.topRated} title="Filmes com as melhores notas" genres={genres} />
		</div>
	);
}

export default Home;
