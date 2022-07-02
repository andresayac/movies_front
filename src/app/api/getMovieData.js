import axiosInstance from '../utils/axios';
const keyTemdb = process.env.REACT_APP_API_TMDB_KEY;
const language_tmdb =   process.env.REACT_APP_API_TMDB_LANGUAGE

export const getMovieData = async (id) => {
	const { data } = await axiosInstance.get(
		`/movie/${id}?api_key=${keyTemdb}&language=${language_tmdb}&append_to_response=videos`
	);
	return data;
};
