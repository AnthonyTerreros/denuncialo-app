<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  title: String,
  description: String,
  url_images: Array,
  city: String,
  user: Object,
  created_at: String,
  category: String,
});

const router = useRouter();

function seeMoreInformation(id) {
  router.push({ name: "denuncia", path: `/denuncia/${id}` });
}
</script>

<template>
  <article class="flex flex-col max-w-[90%] w-auto justify-start items-center">
    <h6 class="text-2xl">{{ props.title }}</h6>
    <span class="block text-md">{{ props.category }}</span>
    <span class="block text-md">{{ city }}</span>
    <p class="text-sm text-justify overflow-hidden h-20">
      {{ props.description }}
    </p>
    <div class="grid items-center overflow-hidden">
      <img
        class="max-w-[80%] h-20"
        v-for="(image, index) in props.url_images"
        :src="image"
        :alt="props.title + index"
        :key="props.title + index"
      />
    </div>
    <div>
      <button type="button" @click="seeMoreInformation(props.id)"></button>
    </div>
  </article>
</template>

<style scoped></style>
