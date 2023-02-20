import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '1d07b43ee88662f0299d6a2910f723af';
export const fetchFilmsData = async () => {
  const { data } = await axios.get(
    `https://${BASE_URL}/trending/all/day?${API_KEY}`
  );

  return data.results;
};
