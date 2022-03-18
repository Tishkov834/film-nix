import axiosInstance from './axiosInstance';
import { FILMS_URL } from '../constants/endpoints';

export const createFilm = (filmData) => axiosInstance.post(FILMS_URL, filmData);

export const getAllFilms = () => axiosInstance.get(FILMS_URL);

export const getFilm = (id) => axiosInstance.get(`${FILMS_URL}/${id}`);

export const getUserFilms = (userId) => axiosInstance.get(`${FILMS_URL}?userId=${userId}`);

export const removeFilm = (id) => axiosInstance.delete(`${FILMS_URL}/${id}`);

export const searchFilms = (query) => axiosInstance.get(`${FILMS_URL}?q=${query}`);
