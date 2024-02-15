<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function nagivateToDenunciaById(id) {
  router.push(`/denuncias/${id}`);
}
</script>

<template>
  <div class="max-w-lg mx-auto">
    <h4 class="text-semibold text-lg ps-2">Denuncias View</h4>
    <button type="button" @click="nagivateToDenunciaById(1)">Denuncia 1</button>
  </div>
</template>

<style scoped></style>
