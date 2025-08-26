import { ApiResponse } from '@/types/response/ApiError';
import axios from 'axios'

const API_URL = 'http://localhost:5000/api/users'

export const getUserProfile = async (id: string) => {
    try {
        const res = await axios.get(`${API_URL}/${id}`);
        console.log('connected', res.data)
        return res.data
    } catch (err) {
        throw new Error(err.response?.data?.message)
    }
}

export const updateUserProfile = async (id: string, data: unknown) => {
    try {
        const res = await axios.put(`${API_URL}/${id}`, data);
        console.log('connected', res.data)
        return res.data
    } catch (err) {
        throw new Error(err.response?.data?.message)
    }
}

export const signUp = async (data: {
  name: string
  email: string
  avatarUrl?: string
  location?: string
  bio?: string
  phone: string
  password: string
}) : Promise<ApiResponse<{
    message: string,
    email?: string
}>> => {
  try {
    const res = await axios.post(`${API_URL}`, data);
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message);
  }
}

export const verifyEmailForSignUp = async (data: { email: string; otpCode: string }) : Promise<ApiResponse<{
  message: string
}>> => {
  try {
    const res = await axios.post(`${API_URL}/verify-email`, data);
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message);
  }
}