import axiosInstance from './axiosInstance';
import { REGISTER_URL } from '../constants/endpoints';

export const register = (userData) => axiosInstance.post(REGISTER_URL, userData);
