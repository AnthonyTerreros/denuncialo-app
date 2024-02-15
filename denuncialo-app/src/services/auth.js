import apiClient from "@/api/apiClient";

export async function signin(dataLogin) {
  const response = await apiClient.post("/auth/login", dataLogin);
  return response;
}

export async function signup(dataRegister) {
  const response = await apiClient.post("/auth/register", dataRegister);
  return response;
}

export async function logoutUser(id, token) {
  return await apiClient.post("/denuncia/", { id, token });
}
