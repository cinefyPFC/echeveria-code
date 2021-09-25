import React from 'react';
import { Link } from 'react-router-dom';
import './style/erro.css';
export default function Erro() {
  return (
    <div>
      <h1>Hum, parece que essa pagina nao existe!</h1>
      <br />
      <span>Você pode estar procurando:</span>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/cadastro">Cadastro</Link>
        </li>

        <li>
          <Link to="/admin">Administrador</Link>
        </li>
      </ul>
    </div>
  );
}
