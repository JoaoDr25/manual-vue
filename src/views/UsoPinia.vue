<template>
  <q-page padding class="pinia-qr">
    <h1>Pinia</h1>
    <p>
      Pinia es la librería recomendada para la gestión de estado en Vue 3.
      Reemplaza a Vuex con una API más simple y clara.
    </p>
    <h6>
      Cada store en Pinia:
    </h6>
    <ul>
      <li>Tiene un <span>state</span> reactivo (variables globales).</li>
      <li>Tiene <span>actions</span> para modificar el estado.</li>
      <li>Puede incluir <span>getters</span> para valores derivados.</li>
    </ul>
    <p>
      Los stores se pueden usar en cualquier componente y también soportan persistencia
      y tipado con TypeScript.
    </p>

  </q-page>
</template>

<script setup></script>
<style scoped>
@font-face {
  font-family: 'prototype';
  src: url('../fonts/Prototype.ttf') format('truetype');
}

.pinia-qr h1 {
  font-family: 'prototype', sans-serif;
  font-size: 4rem;
  padding: 0 0 0 15px;
  margin: 15px 0px -2px 0px;
}

.pinia-qr h6 {
    font-family: 'prototype', sans-serif;
    margin: 15px 0px -2px 22px;
    font-size: 16px;
}

.pinia-qr p {
  font-size: 16px;
  margin: 20px;
  font-family: sans-serif;
}

.pinia-qr ul {
  font-size: 16px;
}

.pinia-qr span {
  font-family: 'prototype', sans-serif;
}
</style>
