import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import API from '../../services/tmdb';
import Elenco from '../Elenco';
import MovieImages from '../MovieImages';
import Section from '../Section';
import './style.css';
import { AiFillDislike, AiFillLike, AiFillStar } from 'react-icons/ai';

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
        data: { tmdbId: `${id}` },
      };

      const response = axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
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
    console.log('PQ Q EU TO TRIGANDO TODA HORA?');
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


      <div className="movie-list-coments">
        <div className="img-fluid img-coments">
          <img className="user-coments-img" src="" alt="Imagem Usuário" />
        </div>
        <div className="movie-user-coments">
          <h4 className="user-coments=name">Fanta Sabor original</h4>
          <p className="user-coments">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&aposs standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="avaliacacaoResenha">
            <div className="radio-image">
              <label
                htmlFor="gostei"
                className="radio-custom-label gostei"
                value="gostei"
              >
                <input
                  id="gostei"
                  name="radio-group"
                  type="radio"
                  value="true" //BOOLEAN
                  onChange={(e) => setVeredito(e.target.value)}
                />
                <AiFillLike />
              </label>
              <label
                htmlFor="naogostei"
                className="radio-custom-label naogostei"
              >
                <input
                  id="naogostei"
                  name="radio-group"
                  type="radio"
                  value="false" //BOOLEAN
                  onChange={(e) => setVeredito(e.target.value)}
                />
                <AiFillDislike />
              </label>
            </div>
          </div>
        </div>
      </div>
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
        <div className="notaTitulo">
          <h4>Seleciona sua nota</h4>
          <div className="estrelas">
            <label htmlFor="cm_star-1" className="nota" title="nota 1">
              <input
                type="radio"
                id="cm_star-1"
                name="fb"
                value="1"
                onChange={(e) => setNota(e.target.value)}
              />
              <AiFillStar />
            </label>
            <label htmlFor="cm_star-2" className="nota" title="nota 2">
              <input
                type="radio"
                id="cm_star-2"
                name="fb"
                value="2"
                onChange={(e) => setNota(e.target.value)}
              />
              <AiFillStar />
            </label>
            <label htmlFor="cm_star-3" className="nota" title="nota 3">
              <input
                type="radio"
                id="cm_star-3"
                name="fb"
                value="3"
                onChange={(e) => setNota(e.target.value)}
              />
              <AiFillStar />
            </label>
            <label htmlFor="cm_star-4" className="nota" title="nota 4">
              <input
                type="radio"
                id="cm_star-4"
                name="fb"
                value="4"
                onChange={(e) => setNota(e.target.value)}
              />
              <AiFillStar />
            </label>
            <label htmlFor="cm_star-5" className="nota" title="nota 5">
              <input
                type="radio"
                id="cm_star-5"
                name="fb"
                value="5"
                onChange={(e) => setNota(e.target.value)}
              />
              <AiFillStar />
            </label>
          </div>
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
    let token = sessionStorage.getItem('token');
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
      },
    };
    await axios
      .request(options)
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
