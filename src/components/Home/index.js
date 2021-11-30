import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../../services/tmdb';
import Section from '../Section';

function Home() {
  const [genres, setGenres] = useState();
  let history = useHistory();


  useEffect(() => {
    document.title = "Filmes | Cinefy"
    API.genres().then(r => {
      setGenres(r.data.genres);
    })
  }, []);

  if (!genres) {
    return <div></div>
  }
  if (sessionStorage.getItem('token') == null) {
    history.push('/');
    console.log("retorno");
    return (
      <div>Faça o login por favor</div>
    )
  } else {
    return (
      <div>
        <Section f={API.movies.trends} title="Tendências" genres={genres} />
        <Section f={API.movies.popular} title="Filmes Populares" genres={genres} />
        <Section f={API.movies.topRated} title="Filmes com as melhores notas" genres={genres} />
      </div>
    );
  }
}

export default Home;
