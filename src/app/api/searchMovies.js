import axiosInstance from '../utils/axios';
const keyTemdb = process.env.REACT_APP_API_TMDB_KEY;
const language_tmdb =   process.env.REACT_APP_API_TMDB_LANGUAGE

export const searchMovies = async (query) => {
	const { data } = await axiosInstance.get(
		`/search/movie?query=${query}&api_key=${keyTemdb}&language=${language_tmdb}`
	);
	return data.results;
};
