import React, { useState } from "react";
import { Typeahead, withAsync } from 'react-bootstrap-typeahead';
import { searchMovies } from '../api/searchMovies';
import Card from './Card';

const AsyncTypeahead = withAsync(Typeahead);

const Search = function (props) {
	const TMDBLogo =
		'https://skempin.github.io/reactjs-tmdb-app/images/tmdb.svg';

	const [options, setOptions] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [selected, setSelected] = useState();

	console.log('selected', selected);

	const handleSearch = async (query) => {
		setIsLoading(true);
		const results = await searchMovies(query);
		results && setOptions(results);
		setIsLoading(false);
	};
	return (
		<>
			<div className='col-xs-12 search-container nopadding'>
				<div className='row'>
					<div className='col-xs-12 col-sm-6 col-lg-5'>
						<a href='./' title='ReactJS TMDb Movie Search'>
							<img
								src={TMDBLogo}
								className='logo'
								alt='The Movie Database'
							/>
						</a>
					</div>
					<div className='col-xs-12 col-sm-6 col-lg-7'>
						<form className='searchbox'>
							<AsyncTypeahead
								isLoading={isLoading}
								labelKey={(option) =>
									`${option.original_title}`
								}
								id='search'
								onChange={(selected) =>
									setSelected(selected[0])
								}
								onSearch={(query) => {
									handleSearch(query);
								}}
								options={options}
								placeholder ="Buscar..."
							/>
						</form>
					</div>
				</div>
			</div>
			{selected && <Card data={selected} />}
		</>
	);
};

export default Search;

