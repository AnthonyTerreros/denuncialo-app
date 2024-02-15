<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="bg-green-500">
    <nav class="max-w-screen-xl mx-auto text-white border-gray-200">
      <div class="flex flex-wrap items-center justify-between mx-auto p-4">
        <div class="inline-block">
          <img
            alt="Vue logo"
            class="logo"
            src="@/assets/logo.svg"
            width="25"
            height="25"
          />
          <h1>Denuncialo App</h1>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Abrir Menu</span>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0"
          >
            <li>
              <RouterLink to="/" class="navbar__item">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/denuncias" class="navbar__item"
                >Denuncias</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/about" class="navbar__item">About</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar__item {
  @apply block py-2 px-3 text-white border-2 rounded text-sm;
}
</style>
