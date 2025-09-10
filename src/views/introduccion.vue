<template>
  <q-page class="introduccion-qr">
    <h1>Introducción a Vue.js</h1>
    <p>
      Vue.js es un framework progresivo de JavaScript para construir interfaces de usuario.
      Su principal ventaja es que puedes adoptarlo de forma incremental: puedes usarlo solo para
      una parte de tu aplicación, o bien construir proyectos grandes y complejos con él.
    
      Vue destaca por su simplicidad, su curva de aprendizaje accesible y su potente ecosistema,
      que incluye librerías como:
    </p>
    <ul>
      <li><b>Vue Router</b> (navegación)</li>
      <li><b>Pinia</b> (gestión de estado)
      y frameworks UI como </li>
      <li><b>Quasar</b>.</li>
    </ul>

  </q-page>
</template>

<script setup>
</script>

<style scoped>
@font-face {
  font-family: 'prototype';
  src: url('../fonts/Prototype.ttf') format('truetype');
}
.introduccion-qr h1{
font-family: 'prototype', sans-serif;
font-size: 4rem;
font-weight: 100;
padding: 0 0 0 15px;
margin: 15px 0px -2px 0px;
}
.introduccion-qr p{
 font-size: 17px;
    margin: 20px;
    font-family: sans-serif;
}

</style>