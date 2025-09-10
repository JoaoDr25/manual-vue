<template>
  <q-page padding class="creacion-qr">
    <h1>Creación de un Proyecto con Vite</h1>
    <p>
      La forma más común de iniciar un proyecto moderno de Vue 3 es utilizando Vite,
      un bundler rápido y ligero.
    </p>
    <ol>
      <li>Ejecuta <code>npm create vite@latest mi-proyecto</code></li>
      <li>Selecciona la plantilla <b>Vue</b> o <b>Vue + JavaScript</b>.</li>
      <li>Instala Quasar con: <code>npm install quasar @quasar/vite-plugin @quasar/extras</code></li>
      <li>Ejecuta <code>npm run dev</code> para iniciar el servidor local.</li>
    </ol>
    <p>La estructura básica incluye:</p>
    <ul>
      <li><code>main.js</code>: punto de entrada de la aplicación.</li>
      <li><code>App.vue</code>: componente raíz.</li>
      <li><code>router/index.js</code>: definición de rutas.</li>
    </ul>

  </q-page>
</template>

<script setup></script>
<style scoped>
@font-face {
  font-family: 'prototype';
  src: url('../fonts/Prototype.ttf') format('truetype');
}
.creacion-qr h1{
font-family: 'prototype', sans-serif;
font-size: 4rem;
font-weight: 100;
padding: 0 0 0 15px;
margin: 15px 0px -2px 0px;
}
.creacion-qr p{
 font-size: 17px;
    margin: 20px;
    font-family: sans-serif;
}

</style>
