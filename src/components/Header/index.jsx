import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style/header.css';
import ImgLogo from './img/CinefyLogo.png';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Link to="/" className="logo">
            <img src={ImgLogo} alt="Cinefy" />
          </Link>
          <nav className="navbar">
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
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
