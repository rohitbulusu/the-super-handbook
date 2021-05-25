import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://comicvine.gamespot.com/api/',
});

export default instance;
