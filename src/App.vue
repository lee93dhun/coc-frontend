<template>
  <v-app>
    <div class="container">
      <AppHeader/>
      <v-main>
        <MainPage/>
      </v-main>
    </div>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainPage from './components/pages/MainPage.vue'
import AppHeader from './components/layout/AppHeader.vue'
export default defineComponent({
  name: 'App',

  components: {
    MainPage,
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
  .container{
    width: 1000px;
    margin: 0 auto;
  }
</style>
