import axiosInstance from './axiosInstance';
import { FILMS_URL } from '../constants/endpoints';

export const createFilm = (filmData) => axiosInstance.post(FILMS_URL, filmData);

export const getAllFilms = () => axiosInstance.get(FILMS_URL);

export const getFilm = (id) => axiosInstance.get(`${FILMS_URL}/${id}`);
