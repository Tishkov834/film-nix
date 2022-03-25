import axiosInstance from './axiosInstance';
import { REVIEWS_URL } from '../constants/endpoints';

export const createReview = (review) => axiosInstance.post(REVIEWS_URL, review);
