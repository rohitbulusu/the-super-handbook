import axios from 'axios';

const instance = axios.create({
  baseURL: `https://cors.bridged.cc/https://comicvine.gamespot.com/api/`,
});

export default instance;
