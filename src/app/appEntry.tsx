import React from "react";
import ReactDOM from "react-dom/client";
import '@/shared/main.css'
import { RouterProvider } from "react-router-dom";
import appRouter from "@/app/appRouter";
import { Provider } from "react-redux";
import store from "@/app/appStore";
import { Toaster } from "react-hot-toast";

const root = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(
    <Provider store={store}>
      <RouterProvider router={appRouter()} />
      <Toaster />
    </Provider>
)