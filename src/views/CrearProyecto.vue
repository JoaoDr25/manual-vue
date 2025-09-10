<template>
  <q-page padding class="creacion-qr">
    <h1>Creación de un Proyecto con Vite</h1>
    <p>
      La forma más común de iniciar un proyecto moderno de Vue 3 es utilizando Vite,
      un bundler rápido y ligero.
    </p>
    <ol>
      <li>Lo primero es crear un proyecto Vue con Vite. Ejecuta <code>npm create vite@latest mi-proyecto</code></li>
      <div class="imagenes-qr">
      <img src="../assets/crearProyecto1.jpeg" alt="crearProyecto1" class="imagen">
    </div>
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
    <div>
      <p>(que es el bundler moderno recomendado).

        En la consola: </p>
    </div>
    

  </q-page>
</template>

<script setup></script>
<style scoped>
@font-face {
  font-family: 'prototype';
  src: url('../fonts/Prototype.ttf') format('truetype');
}

.creacion-qr h1 {
  font-family: 'prototype', sans-serif;
  font-size: 4rem;
  font-weight: 100;
  padding: 0 0 0 15px;
  margin: 15px 0px -2px 0px;
}

.creacion-qr p {
  font-family: 'prototype', sans-serif;
  font-size: 17px;
  margin: 20px;
}

.imagenes-qr {
  display: flex;
  justify-items: center;
}

.imagenes-qr img {
  width: 40rem;
  filter: drop-shadow(2px 4px 6px black);
  /* margin-left: 10px; */
  transition: transform 0.3s ease;
}

.imagenes-qr img:hover {
  transform: scale(1.009);
}
</style>
