import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const GuestRoute = () => {
  const { isAuthenticated, loading } = useSelector(
    (state: RootState) => state.auth
  );

  if (loading) return <p>Loading...</p>;

  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default GuestRoute;
