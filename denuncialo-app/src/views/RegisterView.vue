<script setup>
import { ref } from "vue";

const onSubmitRegister = () => {};

const registerForm = ref({
  names: "",
  lastnames: "",
  email: "",
  password: "",
});
</script>

<template>
  <div
    class="bg-red-50 max-w-full min-h-screen mx-auto flex flex-col md:flex-row text-black"
  >
    <div class="w-1/3 bg-cover min-h-screen bg-background-banner"></div>
    <div
      class="w-full md:w-2/3 max-h-full flex flex-col justify-center align-center"
    >
      <h2 class="my-2 text-4xl font-semibold text-center text-black">
        Register
      </h2>
      <form
        @submit.prevent="onSubmitRegister()"
        class="flex flex-col gap-3 w-2/5 mx-auto"
      >
        <!-- <div class="form-group">
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
        </div> -->
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
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
