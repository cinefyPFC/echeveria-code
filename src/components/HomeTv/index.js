import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import API from '../../services/tmdb';
import Section from '../Section';

function Home() {
  const [genres, setGenres] = useState();
  let history = useHistory();


  useEffect(() => {
    document.title = "Séries | Cinefy"
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
        <Section f={API.tv.trends} title="Tendências" genres={genres} to="tv" />
        <Section f={API.tv.popular} title="Séries Populares" genres={genres} to="tv" />
        <Section f={API.tv.topRated} title="Séries com as melhores notas" genres={genres} to="tv" />
      </div>
    );
  }
}

export default Home;
