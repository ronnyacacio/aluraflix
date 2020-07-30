import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ronnyacacio-aluraflix.herokuapp.com',
});

export default api;
