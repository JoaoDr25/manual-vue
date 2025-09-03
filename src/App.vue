<script setup>

import BarraNavegacion from './components/barraNavegacion.vue';
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <BarraNavegacion />
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>

</style>
