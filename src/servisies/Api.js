import axios from 'axios';
import defaultImg from '../images/default-photo.jpeg';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '1d07b43ee88662f0299d6a2910f723af';

export const fetchFilmsData = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
  );

  // console.log('details', data.results);
  return data.results;
};

export const searchFilmsData = async query => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );

  // console.log('details', data);
  return data.results;
};

// searchFilmsData(avatar);

export const getFilmsDataById = async moviesId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${moviesId}?api_key=${API_KEY}&language=en-US`
  );

  const {
    poster_path,
    original_title,
    overview,
    vote_average,
    genres,
    release_date,
  } = data;
  // console.log('data', data);

  return {
    poster_path: getPoster(poster_path),
    original_title,
    overview,
    vote_average,
    genres: genres.map(({ name }) => name).join(', '),
    release_date: release_date.slice(0, 4),
  };
};

export const getFilmsCredits = async moviesId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${moviesId}/credits?api_key=${API_KEY}&language=en-US`
  );

  // console.log(data.cast);
  return data.cast;
};

export const getFilmsReviews = async moviesId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${moviesId}/reviews?api_key=${API_KEY}&language=en-US`
  );

  // console.log('ddd', data.results);
  return data.results;
};

const getPoster = url =>
  url ? 'https://image.tmdb.org/t/p/w500' + url : defaultImg;
