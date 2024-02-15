import apiClient from "@/api/apiClient";

export async function getAllDenuncias(page, page_size) {
  const res = await apiClient.get(
    `/denuncias?page=${page}&page_size${page_size}`
  );
  return res;
}

export async function getDenunciaById(id) {
  const res = await apiClient.get(`/denuncias/${id}`);
  return res;
}

export async function createDenuncia(data) {
  const res = await apiClient.post("/denuncias", data);
  return res;
}

export async function editDenuncia(id, data) {
  const res = await apiClient.put(`/denuncias/${id}`, data);
  return res;
}

export async function removeDenuncia(id) {
  return await apiClient.delete(`/denuncia/${id}`);
}
