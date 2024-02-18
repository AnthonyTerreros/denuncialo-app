import { logoutUser, signin, signup } from "@/services/auth";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user = ref({});
  // const $cookies = inject($cookies);

  async function login(loginData) {
    const authRes = await signin(loginData);
    $cookies.set("auth", authRes.data);
    user.value = authRes.data;
  }

  async function register(registerData) {
    const registerResponse = await signup(registerData);
    return registerResponse;
  }

  async function logout() {
    const logoutResponse = await logoutUser(id, token);
    $cookies.remove("auth");
    return logoutResponse.status;
  }

  const getIdUser = () => {
    return user.value.id;
  };

  const getAuthToken = () => {
    const userAuth = $cookies.get("auth");
    return userAuth;
  };

  return { user, login, register, logout, getIdUser, getAuthToken };
});
