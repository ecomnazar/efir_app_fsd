import { API_ENDPOINTS, instance } from "@/shared/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { PAdmin } from "@/entities/admin/api/types"
import toast from "react-hot-toast";

export const getAdmins = createAsyncThunk('admin/getAdmins', async () => {
    try {
        const response = await instance.get(`${API_ENDPOINTS.ADMINS}`)
        return response.data
    } catch (error) {
        return Promise.reject(error)
    }
})

export const addAdmin = createAsyncThunk('admin/addAdmin', async (data: PAdmin) => {
    try {
        await instance.post(`${API_ENDPOINTS.ADMINS}`, data)
        toast.success('Админ успешнло добавлен')
    } catch (error) {
        toast.error('Админ не добавлен')
        return Promise.reject(error)
    }
})

export const deleteAdmin = createAsyncThunk('admin/deleteAdmin', async ( id: string ) => {
    try {
        await instance.delete(`${API_ENDPOINTS.ADMINS}`, {
            data: { id }
        })
        toast.success('Админ успешнло удален')
    } catch (error) {
        toast.error('Админ не удален')
        return Promise.reject(error)        
    }
})