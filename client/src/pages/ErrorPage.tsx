import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-5xl font-bold text-red-600">Oops!</h1>
      <p className="text-xl text-gray-700 mt-2">Something went wrong.</p>

      <Link
        to="/login"
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
