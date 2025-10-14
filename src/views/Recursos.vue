<template>
  <q-page padding class="recursos-qr">
    <h1>Recursos de Aprendizaje</h1>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Documentación Oficial de Vue.js</a></li>
      <li><a href="https://router.vuejs.org" target="_blank">Documentación de Vue Router</a></li>
      <li><a href="https://pinia.vuejs.org" target="_blank">Documentación de Pinia</a></li>
      <li><a href="https://quasar.dev" target="_blank">Framework Quasar</a></li>
      <li><a href="https://learnvue.co" target="_blank">Guías y Tutoriales sobre Vue</a></li>
    </ul>
    <p>
      Además, se recomienda instalar la extensión <span>Vue DevTools</span> en tu navegador
      para inspeccionar componentes, props y estado global.
    </p>

  </q-page>
</template>

<script setup></script>
<style scoped>
@font-face {
  font-family: 'prototype';
  src: url('../fonts/Prototype.ttf') format('truetype');
}

.recursos-qr h1 {
  font-family: 'prototype', sans-serif;
  font-size: 4rem;
  padding: 0 0 0 15px;
  margin: 20px 60px 10px 32px;
}

.recursos-qr p {
  font-size: 0.96rem;
  margin: 20px 60px 10px 50px;
  font-family: sans-serif;
}

.recursos-qr ul {
  font-size: 0.96rem;
  font-family: 'prototype', sans-serif;
  margin: 20px 60px 10px 50px;
}

.recursos-qr span {
  font-family: 'prototype', sans-serif;
}
</style>
