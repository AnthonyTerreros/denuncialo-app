<script setup>
import * as z from "zod";
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const formData = ref({
  email: "",
  password: "",
});

const formSchema = z.object({
  email: z.string(),
  password: z.string().min(3),
});

const authStore = useAuthStore();
const router = useRouter();
async function handleSubmitLogin() {
  console.log("");
  const validSchema = formSchema.safeParse(formData.value);
  if (!validSchema.success) {
    alert("Llena los campos");
    return;
  }
  console.log(formData.value);
  const res = await authStore.login(formData.value);
  if (res.status === 200) {
    router.push({ name: "home", path: "/home" });
  }
  alert(
    "No se pudo comprobar la veracidad de las credenciales. Intenta de Nuevo"
  );
}
</script>

<template>
  <div
    class="bg-gray-50 max-w-full min-h-screen mx-auto flex flex-col md:flex-row text-black"
  >
    <div
      class="w-full md:w-1/2 max-h-full flex flex-col justify-center align-center"
    >
      <h2 class="my-2 text-4xl font-semibold text-center text-black">Login</h2>
      <form
        @submit.prevent="handleSubmitLogin()"
        class="flex flex-col gap-3 w-2/5 mx-auto"
      >
        <div class="form-group">
          <label for="email">Email</label>
          <input
            class="input"
            type="email"
            name="email"
            id="email"
            v-model="formData.email"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            class="input"
            type="password"
            name="password"
            id="password"
            v-model="formData.password"
          />
        </div>
        <RouterLink to="/register">
          <p class="text-sm">
            No tienes una cuenta?
            <span class="text-blue-500 font-medium">Creala aqui</span>
          </p>
        </RouterLink>
        <div>
          <button
            class="btn btn-success hover:btn-outline text-white"
            label="Sign In"
            type="submit"
          >
            Iniciar Sesion
          </button>
        </div>
      </form>
    </div>
    <div class="w-1/2 bg-cover min-h-screen bg-background-banner"></div>
  </div>
</template>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  gap: 5;
}

.input {
  padding: 1 2;
  background-color: white;
  border: 1px solid black;
  color: black;
}

label {
  font-weight: 600;
  color: black;
}
</style>
