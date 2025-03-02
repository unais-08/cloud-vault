import { Route, Routes } from "react-router";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <>
      <div className="bg-gray-500 h-screen flex items-center justify-center">
        <Routes>
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<DashboardPage />} />}
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
