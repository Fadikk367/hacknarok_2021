import axios from 'axios';

const baseURL = 'http://localhost:5000/';

const instance = axios.create({ baseURL });

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers['x-access-tokens'] = token;

  return config;
});


export default instance;