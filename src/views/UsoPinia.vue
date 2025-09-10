<template>
  <q-page padding class="pinia-qr">
    <h1>Pinia</h1>
    <p>
      Pinia es la librería recomendada para la gestión de estado en Vue 3.
      Reemplaza a Vuex con una API más simple y clara.
    </p>
    <p>
      Cada store en Pinia:
    </p>
    <ul>
      <li>Tiene un <b>state</b> reactivo (variables globales).</li>
      <li>Tiene <b>actions</b> para modificar el estado.</li>
      <li>Puede incluir <b>getters</b> para valores derivados.</li>
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
.pinia-qr h1{
font-family: 'prototype', sans-serif;
font-size: 4rem;
font-weight: 100;
padding: 0 0 0 15px;
margin: 15px 0px -2px 0px;
}
.pinia-qr p{
 font-size: 17px;
    margin: 20px;
    font-family: sans-serif;
}

</style>
