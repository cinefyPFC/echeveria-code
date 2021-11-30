import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import API from '../../services/tmdb';
import Section from '../Section';
import './style.css';


function Company() {
  const { id } = useParams();
  const [genres, setGenres] = useState([]);
  const [company, setCompany] = useState({});
  let history = useHistory();

  useEffect(() => {
    API.genres().then(r => {
      setGenres(r.data.genres);
    });

    API.company(id).then(r => {
      setCompany(r.data);
    });

  }, [id]);
  if (sessionStorage.getItem('token') == null) {
    history.push('/');
    console.log("retorno");
    return (
      <div>Faça o login por favor</div>
    )
  } else {
    return (
      <div>
        <div className="company">
          <div className="company-poster">
            <img alt={company.name} src={API.image(company.logo_path)} />
          </div>
          <div className="company-detail">
            <div className="company-header">
              <div className="company-title">{company.name} | {company.origin_country}</div>
            </div>
            <div className="company-overview">{company.description}</div>
            <div className="company-genres">
            </div>
            <div className="company-casting">
              <div className="company-director">
                Localizado em: {company.headquarters}
              </div>

            </div>
            <div className="company-footer">
              Site: <a href={company.homepage}>{company.homepage}</a>
            </div>
          </div>
        </div>

        <Section title="Filmes" f={() => API.movies.discovery({ with_companies: id })} genres={genres} to='movie' />
        <Section title="Séries" f={() => API.tv.discovery({ with_companies: id })} genres={genres} to='movie' />

      </div>
    );
  }
}

export default Company;
