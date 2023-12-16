import { RootState } from "@/app/appStore";
import { API_ENDPOINTS, instance } from "@/shared/api";
import { saveToken } from "@/shared/lib/helpers/token";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

type Params = {
  username: string;
  password: string;
};

export const loginThunk = createAsyncThunk<void, Params, { state: RootState }>(
  "authentication/login",
  async (body: Params) => {
    try {
      const response = await instance.post(API_ENDPOINTS.LOGIN, body);
      const token = response.data.token;
      saveToken(token);
      window.location.replace("/")
    } catch (error) {
      // if(axios.isAxiosError(error)) {
      //     const serverError = error as AxiosError
      //     if(serverError && serverError.response) {
      //         return Promise.reject(serverError.response.data)
      //     }
      // }
      toast.error("Неправильный логин или пароль");
    }
  }
);
