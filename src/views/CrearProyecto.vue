<template>
  <q-page padding>
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
