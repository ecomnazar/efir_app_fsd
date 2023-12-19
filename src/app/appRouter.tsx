import { DashboardPage } from "@/pages/dashboard";
import { LoginPage } from "@/pages/login";
import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "@/app/layouts/BaseLayout";
import { UsersPage } from "@/pages/users";
import { HistoryPage } from "@/pages/history";
import { PostsPage } from "@/pages/posts";
import { CategoriesPage } from "@/pages/categories";
import { ChannelsPage } from "@/pages/channels";
import { AdminsPage } from "@/pages/admins";
import PrivateRoutes from "@/shared/lib/helpers/PrivateRoutes";
import { UserPage } from "@/pages/user";

const appRouter = () =>
  createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      element: <PrivateRoutes />,
      children: [
        {
          element: <BaseLayout />,
          children: [
            {
              path: "/",
              element: <DashboardPage />,
            },
            {
              path: "/users",
              element: <UsersPage />,
            },
            {
              path: '/user/:id',
              element: <UserPage />
            },
            {
              path: "/history",
              element: <HistoryPage />,
            },
            {
              path: "/posts",
              element: <PostsPage />,
            },
            {
              path: "/categories",
              element: <CategoriesPage />,
            },
            {
              path: "/channels",
              element: <ChannelsPage />,
            },
            {
              path: "/admins",
              element: <AdminsPage />,
            },
          ],
        },
      ],
    },
  ]);

export default appRouter;
