import React, { useEffect } from "react";
import { getMovieData } from '../api/getMovieData';
import Trailer from './Trailer';

let numeral = require('numeral');

const Card = function ({ data }) {

	const [showYoutube, setShowYoutube] = React.useState(false)
	const [movieID] = React.useState(data.id)
	const [dataMovie, setdataMovie] = React.useState([])

	let poster_img = 'https://image.tmdb.org/t/p/w500' + data.poster_path;
	let total_revenue = '';
	let vote_average = '';
	let production_list = arrayDataToString(dataMovie?.production_companies);
	let genresList = arrayDataToString(dataMovie?.genres);
	

	dataMovie?.vote_average === 0 ? (vote_average = '-') : (vote_average = dataMovie.vote_average + ' / 10');
	dataMovie?.revenue === 0 ? (total_revenue = '-') : (total_revenue = numeral(dataMovie.revenue).format('($0,0)'));

	let url_trailer = "https://www.youtube.com/embed/" + dataMovie?.videos?.results[0]?.key;

	function arrayDataToString(array) {
		let array_tmp = [];
		if (array !== undefined) {
			array.forEach(function (item) {
				array_tmp.push(item.name);
			});
		}
		return array_tmp.join(', ');
	}

	const getData = async () => {
		const data_api = await getMovieData(movieID);
		setdataMovie(data_api);
	}

	useEffect(() => {
		let backdrop_img = 'https://image.tmdb.org/t/p/original' + data.backdrop_path;
		document.body.style.backgroundImage = 'url(' + backdrop_img + ')';
		getData();
	}, []);

	return (
		<div className='col-xs-12 cardcont nopadding'>
			<div className='meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5'>
				<h1>{dataMovie.original_title}</h1>

				<span className='tagline'>{dataMovie.tagline}</span>
				<p>{dataMovie.overview}</p>
				<div className='additional-details'>
					<span className='genre-list'>{genresList}</span>
					<span className='production-list'>{production_list}</span>
					<div className='row nopadding release-details'>
						<div className='col-xs-6'>
							{' '}
							Original Release:{' '}
							<span className='meta-data'>
								{dataMovie.release_date}
							</span>
						</div>
						<div className='col-xs-6'>
							{' '}
							Running Time:{' '}
							<span className='meta-data'>
								{dataMovie.runtime} mins
							</span>{' '}
						</div>
						<div className='col-xs-6'>
							{' '}
							Box Office:{' '}
							<span className='meta-data'>{total_revenue}</span>
						</div>
						<div className='col-xs-6'>
							{' '}
							Vote Average:{' '}
							<span className='meta-data'>
								{vote_average}
							</span>
						</div>
						<div className='col-xs-6'>
							<i className="fa fa-youtube-play"></i>
							{dataMovie?.videos?.results[0]?.key && <button className="btn btn-danger" onClick={() => setShowYoutube(!showYoutube)}>YouTube</button>}
						</div>
					</div>
				</div>
			</div>
			<div className='poster-container nopadding col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 '>
				<img id='postertest' className='poster' src={poster_img} />
			</div>
			{showYoutube && <div className='container'>
				<div className="col-xs-12 justify-content-center align-items-center">
					<div className="embed-responsive  embed-responsive-16by9">
						<Trailer data={url_trailer} />
					</div>
				</div>
			</div>}
		</div>
	);
};

export default Card;

