import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../../services/tmdb';
import './style.css';

function Header() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [resultsTv, setResultsTv] = useState([]);
  const [resultsPerson, setResultsPerson] = useState([]);
  const [resultsCompany, setResultsCompany] = useState([]);

  useEffect(() => {
    if (search.length > 3) {
      API.search.movie(search).then(r => {
        document.getElementsByClassName('search-result')[0].style.display = 'block';
        setResults(r.data.results);
        API.search.tv(search).then(t => {
          setResultsTv(t.data.results);
          API.search.person(search).then(p => {
            setResultsPerson(p.data.results);
            API.search.company(search).then(p => {
              setResultsCompany(p.data.results);
            });
          });
        })
      })
    }
    else {
      document.getElementsByClassName('search-result')[0].style.display = 'none';
    }
  }, [search])

  function handleChange(e) {
    setSearch(e.target.value);
  }


  function renderResultsPerson() {
    return resultsPerson.slice(0, 10).map(r => {
      return <div key={r.id} onClick={() => { document.getElementsByClassName('search-result')[0].style.display = 'none' }}>
        <Link to={`/person/${r.id}`}>
          <div className='search-image'>
            <img src={API.image(r.profile_path, 'w200')} alt="Celebridade" />
          </div>

          <div className="search-content">
            <div className="search-name">
              {r.name}
            </div>

            <div className="search-description">
              {r.known_for_department}
            </div>
          </div>
        </Link>
      </div>
    })
  }


  function renderResultsTv() {
    return resultsTv.slice(0, 10).map(r => {
      return <div key={r.id} onClick={() => { document.getElementsByClassName('search-result')[0].style.display = 'none' }}>
        <Link to={`/tv/${r.id}`}>
          <div className='search-image'>
            <img src={API.image(r.poster_path, 'w200')} alt="S??ries" />
          </div>

          <div className="search-content">
            <div className="search-name">
              {r.name}
            </div>

            <div className="search-description">
              {r.overview}
            </div>
          </div>
        </Link>
      </div>
    })
  }


  function renderResults() {
    return (
      results.slice(0, 10).map(r => {
        return <div key={r.id} onClick={() => { document.getElementsByClassName('search-result')[0].style.display = 'none' }}>
          <Link to={`/movie/${r.id}`}>
            <div className='search-image'>
              <img src={API.image(r.poster_path, 'w200')} alt="Filmes" />
            </div>

            <div className="search-content">
              <div className="search-name">
                {(r.title ? r.title : r.name)}
              </div>

              <div className="search-description">
                {r.overview}
              </div>
            </div>
          </Link>
        </div>
      })
    )
  }


  function renderResultsCompany() {
    return (
      resultsCompany.slice(0, 10).map(r => {
        return <div key={r.id} onClick={() => { document.getElementsByClassName('search-result')[0].style.display = 'none' }}>
          <Link to={`/company/${r.id}`}>
            <div className='search-image'>
              <img src={API.image(r.logo_path, 'w200')} alt="Produtoras" />
            </div>

            <div className="search-content">
              <div className="search-name">
                {r.name}
              </div>
            </div>
          </Link>
        </div>
      })
    )
  }

  return (
    <header>

      <div className="down-header">
        <div className="search">
          <input type="text" value={search} onChange={handleChange} placeholder="Busque por filmes, s??ries ou celebridades" autoComplete="off" />
          <div className="search-result">
            {/* Filmes */}
            {renderResults()}
            {/* S??ries */}
            {renderResultsTv()}
            {/* Celebridades */}
            {renderResultsPerson()}
            {renderResultsCompany()}
          </div>
        </div>


        <div className="navbar">
          <ul>
            <li><Link to="/filmes">Filmes</Link></li>
            <li><Link to="/tv">S??ries</Link></li>
            <li><Link to="/discovery">Descubra novos filmes</Link></li>
            <li><Link to="/perfil">Perfil</Link></li>
            <li><Link to="/lista">Lista</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
