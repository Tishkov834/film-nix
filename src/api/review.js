import axiosInstance from './axiosInstance';
import { REVIEWS_URL } from '../constants/endpoints';

export const createReview = (review) => axiosInstance.post(REVIEWS_URL, review);

export const getFilmReviews = (filmId) => axiosInstance.get(`${REVIEWS_URL}?filmId=${filmId}`);

export const removeReview = (id) => axiosInstance.delete(`${REVIEWS_URL}/${id}`);
