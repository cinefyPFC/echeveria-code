import React, { Component } from 'react';
import './style/home.css';
import imgFilme from './img/img1.jpg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <div className="estrutura">
        <main className="content">
          <div className="titulo">
            <h1>Cinefy</h1>
            <span>sua plataforma de trailers</span>
          </div>
          <img className="imagem-1" src={imgFilme} alt="IMG SERIE" />
          <img className="imagem-2" src={imgFilme} alt="IMG FILME" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <blockquote className="citacao col-wide">
            <p>
              “Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys”
            </p>
          </blockquote>
          <ul className="atributos">
            <li>Membros: 12.000</li>
            <li>Tipo: Trailers</li>
            <li>Projeto: 1 anos</li>
            <li>+ de 1000 Filmes</li>
            <li>+ de 1000 Documentário</li>
            <li>+ de 1000 Séries </li>
            <li>+ de 1000 Séries </li>
            <li>+ de 1000 Séries </li>
          </ul>

          <div className="informacoes">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
