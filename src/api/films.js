import axiosInstance from './axiosInstance';
import { FILMS_URL } from '../constants/endpoints';

export const createFilm = (filmData) => axiosInstance.post(FILMS_URL, filmData);
