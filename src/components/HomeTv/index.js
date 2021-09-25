import React, { useState, useEffect } from 'react';
import API from '../../services/tmdb'
import Section from '../Section';

function Home() {
	const [genres, setGenres] = useState();

	useEffect(() => {
		document.title = "Séries | React Movies"
		API.genres().then(r => {
			setGenres(r.data.genres);
		})
	}, []);

	if(!genres){
		return <div></div>
	}

	return (
		<div>
			<Section f={API.tv.trends} title="Tendências" genres={genres} to="tv" />
			<Section f={API.tv.popular} title="Séries Populares" genres={genres} to="tv" />
			<Section f={API.tv.topRated} title="Séries com as melhores notas" genres={genres} to="tv" />
		</div>
	);
}

export default Home;
