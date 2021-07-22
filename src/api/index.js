import axios from 'axios';

const api = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2',
  timeout: 5000,
});

export default api;
