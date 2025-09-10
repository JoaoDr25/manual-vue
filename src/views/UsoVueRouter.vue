<template>
  <q-page padding class="router-qr">
    <h1>Vue Router</h1>
    <p>
      Vue Router es la librería oficial de enrutamiento para Vue.
      Permite crear aplicaciones de una sola página (SPA) con múltiples vistas.
    </p>
    <ul>
      <li><b>router-link</b>: crea enlaces de navegación.</li>
      <li><b>router-view</b>: muestra el contenido de la ruta activa.</li>
      <li>Soporta <b>parámetros dinámicos</b> como <code>/user/:id</code>.</li>
      <li>Permite <b>rutas anidadas</b> y <b>guards</b> para controlar el acceso.</li>
    </ul>

  </q-page>
</template>

<script setup></script>
<style scoped>
@font-face {
  font-family: 'prototype';
  src: url('../fonts/Prototype.ttf') format('truetype');
}
.router-qr h1{
font-family: 'prototype', sans-serif;
font-size: 4rem;
font-weight: 100;
padding: 0 0 0 15px;
margin: 15px 0px -2px 0px;
}
.router-qr p{
 font-size: 17px;
    margin: 20px;
    font-family: sans-serif;
}

</style>