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