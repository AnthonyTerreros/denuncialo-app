<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;
const querys = route.query;
</script>

<template>
  <div class="max-w-xl mx-auto">
    <p
      class="bg-purple-400 text-white text-bold flex align-center justify-center"
    >
      {{ id }}
    </p>
    <h4>Denuncia Details</h4>
    <p>{{ querys }}</p>
  </div>
</template>

<style scoped></style>
