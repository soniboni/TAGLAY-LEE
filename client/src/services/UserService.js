import axios from 'axios';
import constants from '../constants';

const API = axios.create({
  baseURL: "http://localhost:8000/api/users",
});


// Login user
export const loginUser = (credentials) => API.post('/login', credentials);


// Other user operations (optional)
export const fetchUsers = () => API.get('/users');
export const createUser = (user) => API.post('/users', user);
export const updateUser = (id, user) => API.put(`/users/${id}`, user);
export const deleteUser = (id) => API.delete(`/users/${id}`);
