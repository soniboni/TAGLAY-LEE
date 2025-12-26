import axios from 'axios';
import constants from '../constants';

const API = axios.create({
  baseURL: 'http://localhost:8000/api/articles', // must match backend
});

export const fetchArticles = () => API.get('/');
export const fetchArticleByName = (name) => API.get(`/${name}`);
export const createArticle = (article) => API.post('/', article);
export const updateArticle = (id, article) => API.put(`/${id}`, article);
export const toggleArticleStatus = (id) => API.patch(`/${id}/toggle`);