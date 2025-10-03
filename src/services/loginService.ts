import axiosInstance from "./axiosInstance";

export const login = async (email: string, password: string) => {
  const res = await axiosInstance.post("/auth/login", { email, password });
  localStorage.setItem("token", res.data.token);
  return res.data;
};

export const getProfile = async () => {
  const res = await axiosInstance.get("/auth/me");
  return res.data;
};
