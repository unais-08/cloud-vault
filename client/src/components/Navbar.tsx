import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { logoutUser } from "../store/features/authSlice";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, user, loading } = useSelector(
    (state: RootState) => state.auth
  );

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 items-center">
        {isAuthenticated ? (
          <>
            <li className="text-white">Welcome, {user?.name} 🎉</li>
            <li>
              <Link to="/" className="text-white hover:text-gray-400">
                Dashboard
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="text-white hover:text-gray-400"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/auth/login" className="text-white hover:text-gray-400">
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/auth/register"
                className="text-white hover:text-gray-400"
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
