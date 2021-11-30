import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import API from '../../services/tmdb';
import Elenco from '../Elenco';
import MovieImages from '../MovieImages';
import Section from '../Section';
import './style.css';

const medias = {
  tv: API.tv,
  movie: API.movies,
};

function MovieDetail(props) {
  const { id, media } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [director, setDirector] = useState([]);
  const [genres, setGenres] = useState();
  const [titulo, setTitulo] = useState('');
  const [corpo, setCorpo] = useState('');
  const [nota, setNota] = useState('');
  const [veredito, setVeredito] = useState('');
  const [resenha, setResenhas] = useState([]);

  useEffect(() => {
    async function getResenha() {
      let token = sessionStorage.getItem('token');
      const options = {
        method: 'POST',
        url: 'http://localhost:3333/review/get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: { tmdbId: `${id}` }
      };

      const response = axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
      console.log(response.data);
      setResenhas(response.data);
    }
    getResenha();
    console.log(id); //mandar pro back
    medias[media].detail(id).then((r) => {
      setMovie(r.data);
      document.title = r.data.title ? r.data.title : r.data.name;
      window.scrollTo(0, 0);

      medias[media].credits(id).then((cr) => {
        setCast(cr.data.cast);
        if (media === 'movie') {
          for (let i = 0; i < cr.data.crew.length; i++) {
            let c = cr.data.crew[i];
            if (c.job === 'Director') {
              setDirector([c]);
              break;
            }
          }
        } else {
          setDirector(r.data.created_by);
        }
      });
    });
    API.genres().then((r) => {
      setGenres(r.data.genres);
    });
  }, [id, media]);

  function renderFirstActors() {
    console.log('PQ Q EU TO TRIGANDO TODA HORA?')
    return cast.slice(0, 4).map((a) => {
      return (
        <Link key={a.id} to={`/person/${a.id}`}>
          {a.name}
        </Link>
      );
    });
  }

  function renderDirectors() {
    return director.map((a) => {
      return (
        <Link key={a.id} to={`/person/${a.id}`}>
          {a.name}
        </Link>
      );
    });
  }

  function renderCompanies(data) {
    return data.map((a) => {
      return (
        <Link key={a.id} to={`/company/${a.id}`}>
          {a.name}
        </Link>
      );
    });
  }

  function renderGenres() {
    return movie.genres.map((g) => {
      return <span key={g.id}>{g.name}</span>;
    });
  }

  function renderMovieFooter(movie) {
    if (media === 'movie')
      return (
        <div>
          <div className="realease-date">
            Lançamento:{' '}
            <b>
              {formatDate(
                movie.release_date ? movie.release_date : movie.first_air_date,
              )}
            </b>
          </div>
          <div className="duration">
            Duração:{' '}
            <b>{movie.runtime ? movie.runtime : movie.episode_run_time[0]}m</b>
          </div>
          <div className="budget">
            Orçamento: <b>{formatValue(movie.budget)}</b>
          </div>
          <div className="revenue">
            Faturamento: <b>{formatValue(movie.revenue)}</b>{' '}
          </div>
        </div>
      );
    else
      return (
        <div>
          <div className="realease-date">
            Lançamento:{' '}
            <b>
              {formatDate(
                movie.release_date ? movie.release_date : movie.first_air_date,
              )}
            </b>
          </div>
          <div className="duration">
            Duração:{' '}
            <b>{movie.runtime ? movie.runtime : movie.episode_run_time[0]}m</b>
          </div>
          <div className="budget">
            Temporadas: <b>{movie.number_of_seasons}</b>
          </div>
          <div className="revenue">
            Ultimo episódio: <b>{formatDate(movie.last_air_date)}</b>{' '}
          </div>
        </div>
      );
  }

  function formatDate(date) {
    if (!date) return false;
    return date.split('-').reverse().join('/');
  }

  function formatValue(value) {
    if (!value) return false;
    let n = value.toString();
    let t = n.length;
    let money = '';
    let aux = 0;
    for (let i = t - 1; i >= 0; i--) {
      money = n[i] + money;
      aux++;
      if (aux >= 3 && i > 0) {
        money = '.' + money;
        aux = 0;
      }
    }
    return `$ ${money}`;
  }

  function salvaFilme() {
    const minhaLista = localStorage.getItem('filmes');
    let filmesSalvos = JSON.parse(minhaLista) || [];
    //Se tiver algum filme salvo com esse mesmo id precisa ignorar...
    const hasFilme = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === movie.id,
    );
    if (hasFilme) {
      console.error('Você já possui esse filme salvo.');
      return;
      //Para execuçao do código aqui...
    }
    filmesSalvos.push(movie);
    localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
    console.log('Filme salvo com sucesso!');
  }

  function idfilme() {
    console.log('id filme: ' + movie.id);
  }

  if (!movie.title && !movie.name) {
    return <span>Loading</span>;
  }

  return (
    <div>
      <div className="movie">
        <div className="movie-poster">
          <img alt={movie.title} src={API.image(movie.poster_path)} />
        </div>
        <div className="movie-detail">
          <div className="movie-header">
            <div className="movie-title">
              {movie.title ? movie.title : movie.name} |{' '}
              <small>
                {movie.original_title
                  ? movie.original_title
                  : movie.original_name}
              </small>
            </div>
            <div className="movie-rate">{movie.vote_average}</div>
          </div>
          <div className="movie-overview">{movie.overview}</div>
          <div className="movie-genres">{renderGenres()}</div>
          <div className="botoes">
            <button onClick={salvaFilme}>Adicionar aos favoritos</button>
            <a
              target="blank"
              href={`https://youtube.com/results?search_query=${movie.title} Trailer`}
            >
              Assistir Trailer
            </a>
          </div>
          <div className="movie-casting">
            <div className="movie-director">
              {media === 'tv' ? 'Criada por: ' : 'Diretor: '}
              {renderDirectors()}
            </div>

            <div className="movie-actors">Elenco: {renderFirstActors()}</div>

            <div className="movie-companies">
              Estúdio: {renderCompanies(movie.production_companies)}
            </div>
          </div>
          <div className="movie-footer">{renderMovieFooter(movie)}</div>
        </div>
      </div>

      <MovieImages id={id} api={medias[media]} />
      <Section
        title="Recomendados"
        f={() => medias[media].recommendations(id)}
        genres={genres}
        to={media}
        limit={5}
      />
      <Elenco cast={cast} />
      {/* <Comentarios /> */}
      <div className="notaResenha">
        <input
          className="editInputStyle"
          type="text"
          name="titulo"
          pattern="[^\0]"
          required=""
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <div className="movie-coments">
          <textarea
            className="text-area-movie-coments"
            placeholder="Digite sua opinião sobre o filme"
            value={corpo}
            maxLength="550"
            onChange={(e) => setCorpo(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="movie-coments-button">
        <button
          className="button-coments"
          onLoad={idfilme}
          onClick={novaResenha}
        >
          Comentar
        </button>
      </div>
    </div>
  );
  async function novaResenha() {
    let token = sessionStorage.getItem('token')
    const options = {
      method: 'POST',
      url: 'http://localhost:3333/review',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: {
        titulo: titulo,
        corpo: corpo,
        nota: nota,
        veredito: veredito,
        tmdbId: id.toString(),
      }
    };
    await axios.request(options)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log('Opa aconteceu esse erro aqui!', error);
        console.log(error);
      });
  }
}

export default MovieDetail;
