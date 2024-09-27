<template>
  <div>
    <h2>조건 검색 영역</h2>
    <div>
      <DatePicker v-model="date"
                  locale="ko"
                  :enable-time-picker="false"/>
    </div>
    <div>
      <CategoryModule/>
    </div>
  </div>
</template>

<script setup lang="ts">
import CategoryModule from '@/components/modules/CategoryModule.vue';
import DatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { ref } from 'vue';

const date = ref('');
</script>