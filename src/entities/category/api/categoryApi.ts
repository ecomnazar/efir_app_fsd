import { API_ENDPOINTS, instanceSecond } from "@/shared/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { UCategory } from "@/entities/category/api/types";

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async () => {
    try {
      const response = await instanceSecond.get(`${API_ENDPOINTS.CATEGORY}?page=1&amount=30`);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const addCategory = createAsyncThunk(
  "category/addCategory",
  async (name: string) => {
    try {
      await instanceSecond.post(`${API_ENDPOINTS.CATEGORY}`, { name });
      toast.success("Категория успешно добавлена");
    } catch (error) {
      toast.error("Категория не добавлена");
      return Promise.reject(error);
    }
  }
);

export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  async (data: UCategory) => {
    try {
      await instanceSecond.patch(`${API_ENDPOINTS.CATEGORY}`, data);
      toast.success("Категория успешно обновлена");
    } catch (error) {
      toast.error("Категория не обновлена");
      return Promise.reject(error);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (id: string) => {
    try {
      await instanceSecond.delete(`${API_ENDPOINTS.CATEGORY}`, {
        data: { id },
      });
      toast.success("Категория успешно удалена");
    } catch (error) {
      toast.error("Категория не удалена");
      return Promise.reject(error);
    }
  }
);
