import { FormEvent, useState } from "react";
import Spinner from "./Spinner";
import { loginUser } from "../apis/auth_api";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth(); // Use login function from context

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (!password || !email) {
      setIsLoading(false);
      console.error("All fields are required");
    }
    const data = await loginUser(email, password);
    if (data) {
      login(data.token); // Update auth state
      navigate("/dashboard");
    }
    setIsLoading(false);
  };

  return (
    <section className="flex justify-center items-center py-8 w-[90vw] max-w-[1120px] mx-auto">
      <form
        className="w-[90vw] max-w-[400px] bg-white rounded-md shadow-md p-8 mb-12"
        onSubmit={handleSubmit}
      >
        <h5 className="text-center text-lg font-normal capitalize tracking-wide mb-6">
          Login
        </h5>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm mb-2 capitalize tracking-wide"
          >
            email
          </label>
          <input
            type="email"
            className="w-full p-2.5 rounded-md bg-[#f8fafc] border border-[#e2e8f0] text-gray-900 placeholder-gray-400"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm mb-2 capitalize tracking-wide"
          >
            password
          </label>
          <input
            type="password"
            className="w-full p-2.5 rounded-md bg-[#f8fafc] border border-[#e2e8f0] text-gray-900 placeholder-gray-400"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#645cff] text-white rounded-md p-2.5 text-sm capitalize tracking-wide shadow-sm transition duration-300 hover:bg-[#3c3799] hover:shadow-md flex justify-center items-center"
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : "Login"}
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
