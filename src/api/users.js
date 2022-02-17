import axiosInstance from './axiosInstance';
import { LOGIN_URL, REGISTER_URL } from '../constants/endpoints';

export const register = (userData) => axiosInstance.post(REGISTER_URL, userData);

export const login = (userData) => axiosInstance.post(LOGIN_URL, userData);
