import API from "../utils/axiosInstance";

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await API.post("/signup", { name, email, password });
    console.log(response.data.message);

    return response.data;
  } catch (error: any) {
    console.error(
      "Registration failed:",
      error.response?.data?.message || error.message
    );
  }
};
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await API.post("/login", { email, password });
    console.log(response.data.message);
    return response.data;
  } catch (error: any) {
    console.error(
      "Registration failed:",
      error.response?.data?.message || error.message
    );
  }
};
