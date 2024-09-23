<template>
  <v-app>
    <div class="main-container">
      <AppHeader/>
      <v-main class="main-content">
        <router-view/>
      </v-main>
    </div>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from './components/layout/AppHeader.vue'
export default defineComponent({
  name: 'App',

  components: {
    AppHeader
  },

  data () {
    return {
      //
    }
  },
})
</script>

<style>
  .main-container{
    width: 1200px;
    margin: 0 auto;
  }
  .main-content{
    width: 1000px;
    margin: 0 auto;

  }
</style>
