import axios from 'axios';

const baseURL = window.location.hostname.includes('localhost')
  ? 'http://localhost:3333'
  : 'https://ronnyacacio-aluraflix.herokuapp.com';

const api = axios.create({
  baseURL,
});

export default api;
