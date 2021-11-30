import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import API from '../../services/tmdb.js';
import './favoritos.css';

export default function Favoritos() {
  const [movie, setMovie] = useState([]);
  let history = useHistory();
  useEffect(() => {
    const minhaLista = localStorage.getItem('filmes');
    setMovie(JSON.parse(minhaLista) || []);
  }, []);

  function handleDelete(id) {
    let filtroFilmes = movie.filter((item) => {
      return item.id !== id;
    });
    setMovie(filtroFilmes);
    localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
    toast.success('Filme excluido com sucesso!');
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
        <h1 className="text-center">Minha lista</h1>
        {movie.length === 0 && <span>Você não possui itens na lista </span>}
        <div id="meus-filmes">
          <ul className="UlFavorito">
            {movie.map((item) => {
              return (
                <li className="listaFavoritos" key={item.id}>
                  <span className="listaFavoritosID">{item.id}</span>
                  <img
                    className="listaFavoritosImagem"
                    src={API.image(item.poster_path)}
                    alt={item.title ? item.title : item.name}
                  />
                  <div className="divCenter">
                    <span className="listaFavoritosNome">
                      {item.title ? item.title : item.name}{' '}
                    </span>
                  </div>
                  <div className="divCenter">
                    <button
                      className="listaFavoritosBotao"
                      onClick={() => handleDelete(item.id)}
                    >
                      Remover
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
