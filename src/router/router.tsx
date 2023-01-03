import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@/components/Layout/Layout";
import { Home } from "@/pages/home/Home";
import { Login } from "@/pages/login/Login";
import { Register } from "@/pages/register/Register";

import { ProtectedRouter } from "./ProtectedRouter";
import { Profile } from "@/pages/profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRouter>
        <Layout />
      </ProtectedRouter>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
