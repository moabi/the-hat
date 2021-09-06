<script setup>
import { ref } from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import GroupFinder from './components/groupFinder.vue';
import Navbar from './components/navbar.vue';
const nav = ref(true)
</script>

<template>
  <navbar :nav="nav" v-if="nav" />
  <div class="main-content">
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
.main-content {
  min-height: 80vh;
  background-color: #fafafa;
  padding: 4rem 0 2rem;
}
.inner-content {
  max-width: 1024px;
  margin: auto;
}
</style>
