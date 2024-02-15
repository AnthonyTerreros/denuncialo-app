const { getAllDenuncias } = require("@/services/denuncias");
const { defineStore } = require("pinia");
const { ref } = require("vue");

const useDenunciasStore = defineStore("denuncias", () => {
  const denuncias = ref([]);

  async function fetchDenuncias(page, page_size) {
    let denunciasResponse = await getAllDenuncias(page, page_size);
    denuncias.value = denunciasResponse.data;
  }

  return { denuncias, fetchDenuncias };
});
