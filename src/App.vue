<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style>
body, html {
  scroll-behavior: smooth;
  overflow-y: visible;
  background-color: #173305;
}
</style>
