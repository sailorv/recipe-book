import Axios from 'axios';

const buildQuery = searchArray => {
  const APP_ID = "ee56a5ed";
  const APP_KEY = "3684f9dc26416d50582c78cf6df501d5";
  const query = searchArray.join(',');
  const api = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  return api;
};

const getAll = async searchArray => {
  const result = await Axios.get(buildQuery(searchArray));
  return result.data.hits;
};

export default { getAll };
