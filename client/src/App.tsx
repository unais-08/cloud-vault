import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./pages/Layouts/ProtectedRoute";
import ErrorPage from "./pages/ErrorPage";
import GuestRoute from "./pages/Layouts/GuestRoute";
import Layout from "./pages/Layouts/Layout";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { checkAuth } from "./redux/features/authSlice";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
        ],
      },
      {
        path: "/auth",
        element: <GuestRoute />,
        children: [
          {
            path: "register",
            element: <RegisterPage />,
          },
          {
            path: "login",
            element: <LoginPage />,
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
