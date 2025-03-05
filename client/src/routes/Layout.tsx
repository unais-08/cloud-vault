import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="p-4 bg-gray-300 min-h-screen">
        <Outlet /> {/* This renders the matched child route */}
      </main>
    </div>
  );
};

export default Layout;
