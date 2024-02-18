<script setup>
const props = defineProps({
  denuncias: Array,
});
</script>

<template>
  <div class="flex flex-col space-y-2">
    <Card v-for="denuncia in props.denuncias" :key="denuncia.id" />
  </div>
</template>

<style scoped></style>
