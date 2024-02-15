<script setup>
import CustomInput from "@/components/shared/CustomInput.vue";
import { ref } from "vue";
const name = ref("xd");
</script>

<template>
  <main class="max-w-lg mx-auto">
    <h2 class="text-lg font-semibold">Bienvenido Usuario!</h2>
    <section class="h-40 mx-auto max-w-5xl">
      <CustomInput
        label="Name"
        name="name"
        type="text"
        model=""
        @update:model="(newValue) => (name = newValue)"
      />
      <p class="ps-2">{{ name }}</p>
    </section>
  </main>
</template>
