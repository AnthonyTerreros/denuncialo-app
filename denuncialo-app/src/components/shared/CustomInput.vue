<script setup>
const props = defineProps({
  name: String,
  label: String,
  type: String,
  model: String,
});
</script>

<template>
  <div class="flex flex-col gap-3 w-auto h-auto">
    <label :for="name">{{ label }}</label>
    <input
      class="border-2"
      :type="type"
      :id="name"
      :value="model"
      @input="$emit('update:model', $event.target.value)"
      :name="name"
    />
  </div>
</template>

<style scoped></style>
