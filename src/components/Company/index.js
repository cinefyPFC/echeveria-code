import React, { useEffect, useState } from 'react';

import './style.css';
import { useParams } from 'react-router-dom';
import Section from '../Section';
import API from '../../services/tmdb'

function Company() {
	const {id} = useParams();
	const [genres, setGenres] = useState([]);
	const [company, setCompany] = useState({});
	useEffect( () => {
		API.genres().then(r => {
			setGenres(r.data.genres);
		});

		API.company(id).then(r => {
			setCompany(r.data);
		});

	}, [id]);

	return (
		<div>
			<div className="company">
				<div className="company-poster">
					<img alt={company.name} src={API.image(company.logo_path)}/>
				</div>
				<div className="company-detail">
					<div className="company-header">
						<div className="company-title">{ company.name } | {company.origin_country}</div>
					</div>
					<div className="company-overview">{ company.description }</div>
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

			<Section title="Filmes" f={() => API.movies.discovery({with_companies: id})} genres={genres} to='movie'/>
			<Section title="Séries" f={() => API.tv.discovery({with_companies: id})} genres={genres} to='movie'/>

		</div>
	);
}

export default Company;
