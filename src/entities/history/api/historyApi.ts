import { API_ENDPOINTS, instanceSecond } from "@/shared/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { PHistoryImage, PHistoryVideo } from "@/entities/history/api/types"
import toast from "react-hot-toast";

// get all histories

export const getHistories = createAsyncThunk('history/getHistories', async (page: number) => {
    try {
        const response = await instanceSecond.get(`${API_ENDPOINTS.STORIES}?page=${page}&amount=20`)
        return response.data
    } catch (error) {
        return Promise.reject(error)
    }
})

// add history image

export const addHistoryImage = createAsyncThunk('history/addHistoryImage', async (data: any) => {
    try {
        const response = await instanceSecond.post(`${API_ENDPOINTS.STORIES}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        toast.success('Изображение успешнло добавлено')
        return response.data
    } catch(error) {
        toast.error('Изображение не добавлено')
        return Promise.reject(error)
    }
})

// add history video

export const addHistoryVideo = createAsyncThunk('history/addHistoryVideo', async (data: PHistoryVideo) => {
    try {
        await instanceSecond.post(`${API_ENDPOINTS.STORIES}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        toast.error('Видео успешнло добавлено')
    } catch (error) {
        toast.error('Видео не добавлено')
        return Promise.reject(error)
    }
})

// delete history

export const deleteHistory = createAsyncThunk('history/deleteHistory', async (id: string) => {
    try {
        await instanceSecond.delete(`${API_ENDPOINTS.STORIES}`, {
            data: { id }
        })
        toast.success('История успешнло удалена')
    } catch (error) {
        toast.error('История не удалена')
        return Promise.reject(error)
    }
})