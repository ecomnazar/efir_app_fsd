import { API_ENDPOINTS, instanceSecond } from "@/shared/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { PChannel } from "@/entities/channel/api/types";
import toast from "react-hot-toast";

// get all channels

export const getChannels = createAsyncThunk(
  "channel/getChannels",
  async (page: number) => {
    try {
      const response = await instanceSecond.get(
        `${API_ENDPOINTS.CHANNEL}?page=${page}&amount=20`
      );
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

// add channel

export const addChannel = createAsyncThunk(
  "channel/addChannel",
  async (data: PChannel) => {
    try {
      await instanceSecond.post(`${API_ENDPOINTS.CHANNEL}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Канал успешнло добавлен");
    } catch (error) {
      toast.error("Канал не добавлен");
      return Promise.reject(error);
    }
  }
);

// update channel

export const updateChannel = createAsyncThunk(
  "channel/updateChannel",
  async (data: PChannel) => {
    try {
      await instanceSecond.put(`${API_ENDPOINTS.CHANNEL}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Канал успешнло обновлен");
    } catch (error) {
      toast.error("Канал не обновлен");
      return Promise.reject(error);
    }
  }
);

// delete channel

export const deleteChannel = createAsyncThunk(
  "channel/deleteChannel",
  async (id: string) => {
    try {
      await instanceSecond.delete(`${API_ENDPOINTS.CHANNEL}`, {
        data: { id },
      });
      toast.success("Канал успешнло удален");
    } catch (error) {
      toast.error("Канал не удален");
      return Promise.reject(error);
    }
  }
);
