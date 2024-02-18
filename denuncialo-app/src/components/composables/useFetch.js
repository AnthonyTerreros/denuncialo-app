import { reactive } from "vue";

import apiClient from "@/api/apiClient";

export async function useFetch(url) {
  const state = reactive({
    data: {},
    error: {},
    isLoading: false,
  });

  await apiClient.get;
}
