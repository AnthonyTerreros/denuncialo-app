<script setup>
import { useAuthStore } from "@/stores/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";
import * as z from "zod";

const registerForm = ref({
  names: "",
  lastnames: "",
  email: "",
  password: "",
});

const router = useRouter();
const authStore = useAuthStore();

const registerSchema = z.object({
  names: z.string(),
  lastnames: z.string(),
  email: z.string(),
  password: z.string(),
});

async function onSubmitRegister() {
  let validRegisterForm = registerSchema.safeParse(registerForm.value);
  if (!validRegisterForm.success) {
    alert("Rellena los campos");
    return;
  }
  const result = await authStore.register({ ...registerForm.value });
  if (result.status === 404) {
    alert("No existe las credenciales ingresadas. Crea una cuenta");
    router.push({ name: "register", path: "/register" });
    return;
  }
  if (result.status === 200) {
    router.push({ name: "login", path: "/login" });
    return;
  }
  alert("Estamos fuera de servicio. Intentalo mas tarde");
}
</script>

<template>
  <div
    class="bg-gray-50 max-w-full min-h-screen mx-auto flex flex-col md:flex-row text-black"
  >
    <div class="w-1/3 bg-cover min-h-screen bg-background-banner"></div>
    <div
      class="w-full md:w-2/3 max-h-full flex flex-col justify-center align-center"
    >
      <h2 class="my-2 text-4xl font-semibold text-center text-black">
        Register
      </h2>
      <p class="block text-sm text-center">
        Crea una cuenta para poder ingresar tus denuncias.
      </p>
      <form
        @submit.prevent="onSubmitRegister()"
        class="flex flex-col gap-3 w-2/5 mx-auto"
      >
        <div class="form-group">
          <label for="names">Names</label>
          <input
            class="input"
            type="text"
            name="names"
            id="names"
            v-model="registerForm.names"
          />
        </div>
        <div class="form-group">
          <label for="lastnames">Last names</label>
          <input
            class="input"
            type="text"
            name="lastnames"
            id="lastnames"
            v-model="registerForm.lastnames"
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            class="input"
            type="email"
            name="email"
            id="email"
            v-model="registerForm.email"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            class="input"
            type="password"
            name="password"
            id="password"
            v-model="registerForm.password"
          />
        </div>
        <RouterLink to="/login">
          <p class="text-sm">
            Ya tienes una cuenta?
            <span class="text-blue-500 font-medium">Ingresa aqui</span>
          </p>
        </RouterLink>
        <div>
          <button
            class="btn btn-success hover:btn-outline text-white"
            label="Sign In"
            type="submit"
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  gap: 5;
}

.input {
  padding: 0.3rem 0.8rem;
  background-color: white;
  border: 1px solid black;
  color: black;
}

label {
  font-weight: 600;
  color: black;
}
</style>
