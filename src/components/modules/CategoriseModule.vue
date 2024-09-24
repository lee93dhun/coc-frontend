<template>
  <b-form-group>
    <b-select 
      id="categories"
      v-model="selectedCategory"
      :options="categories"
      ></b-select>
  </b-form-group>
</template>

<script setup lang="ts">
// import categoriesService from '@/service/CategoriesService';
import { ref } from 'vue';

const selectedCategory = ref('');
const categories = ref<{value: string; text: string}[]>;

// const getCategories = async() => {
//   // const response = await categoriesService.getCategories();
// }

</script>