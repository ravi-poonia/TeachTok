import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://cross-platform.rp.devfactory.com/',
});
