import { API_ENDPOINTS, instance } from "@/shared/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { PUser } from "@/entities/user/api/types"
import toast from "react-hot-toast";

export const getUsers = createAsyncThunk('user/getUsers', async (page: number) => {
    try {
        const response = await instance.get(`${API_ENDPOINTS.USERS}?is_channel=True&page=${page}&amount=20`)
        return response.data
    } catch(error) {
        return Promise.reject(error)
    }
})

export const getUser = createAsyncThunk('user/getUser', async (id: string) => {
    try {
        const response = await instance.get(`${API_ENDPOINTS.USER}/${id}`)
        return response.data
    } catch(error) {
        return Promise.reject(error)
    }
})

export const addUser = createAsyncThunk('user/addUser', async (data: PUser) => {
    try {
        await instance.post(`${API_ENDPOINTS.USERS}`, data)
        toast.success('Пользователь успешно добавлен')
    } catch(error) {
        toast.error('Пользователь не добавлен')
        return Promise.reject(error)
    }
})

export const updateUser = createAsyncThunk('user/updateUser', async (data: PUser) => {
    try {
        await instance.put(`${API_ENDPOINTS.USERS}`, data)
        toast.success('Пользователь успешно обновлен')
    } catch(error) {
        toast.error('Пользователь не обновлен')
        return Promise.reject(error)
    }
})

export const deleteUser = createAsyncThunk('user/deleteUser', async (id: string) => {
    try {
        await instance.delete(`${API_ENDPOINTS.USERS}`, {
            data: { id }
        })
        toast.success('Пользователь успешно удален')
    } catch(error) {
        toast.error('Пользователь не удален')
        return Promise.reject(error)
    }
})