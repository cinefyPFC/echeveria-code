import axios from 'axios';
import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';


function Comentarios() {
  const [titulo, setTitulo] = useState('');
  const [corpo, setCorpo] = useState('');
  const [nota, setNota] = useState('');
  const [veredito, setVeredito] = useState('');
  const [movie, setMovie] = useState({});
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
        tmdbId: movie.id.toString(),
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
  function idfilme() {
    console.log('id filme: ' + movie.id);
  }
  return (
    <>

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
              <input type="radio" id="cm_star-1" name="fb" value="1" onChange={(e) => setNota(e.target.value)} />
              <AiFillStar />
            </label>
            <label htmlFor="cm_star-2" className="nota" title="nota 2">
              <input type="radio" id="cm_star-2" name="fb" value="2" onChange={(e) => setNota(e.target.value)} />
              <AiFillStar />
            </label>
            <label htmlFor="cm_star-3" className="nota" title="nota 3">
              <input type="radio" id="cm_star-3" name="fb" value="3" onChange={(e) => setNota(e.target.value)} />
              <AiFillStar />
            </label>
            <label htmlFor="cm_star-4" className="nota" title="nota 4">
              <input type="radio" id="cm_star-4" name="fb" value="4" onChange={(e) => setNota(e.target.value)} />
              <AiFillStar />
            </label>
            <label htmlFor="cm_star-5" className="nota" title="nota 5">
              <input type="radio" id="cm_star-5" name="fb" value="5" onChange={(e) => setNota(e.target.value)} />
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
    </>
  )

}
export default Comentarios;
