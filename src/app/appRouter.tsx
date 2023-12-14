import LoginPage from "@/pages/login";
import { createBrowserRouter } from "react-router-dom";

const appRouter = () =>
  createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

export default appRouter;
