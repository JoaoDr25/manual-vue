<template>
  <q-page padding class="opcion-qr">
    <h1>Options API vs Composition API</h1>
    <p>
      Vue ofrece dos formas de escribir componentes:
    </p>
    <ul>
      <li><b>Options API</b>: basada en secciones como <code>data</code>, <code>methods</code> y <code>computed</code>.
      </li>
      <li><b>Composition API</b>: utiliza funciones como <code>ref</code>, <code>reactive</code> y <code>setup</code>
        para mayor flexibilidad.</li>
    </ul>
    <p>
      La Composition API es ideal para proyectos grandes porque facilita la reutilización de lógica,
      mientras que la Options API puede ser más clara para principiantes.
    </p>
    <div class="contenidoImagenes-qr">
      <div class="imagenes-qr">
        <h6>Options Api</h6>
        <img src="../assets/optionsApi.jpeg" alt="optionsApi" class="imagen">
      </div>

      <div class="imagenes-qr">
        <h6>Compositions Api</h6>
        <img src="../assets/compositionsApi.jpeg" alt="compositionsApi" class="imagen">
      </div>
    </div>


  </q-page>
</template>

<script setup></script>
<style scoped>
@font-face {
  font-family: 'prototype';
  src: url('../fonts/Prototype.ttf') format('truetype');
}

.opcion-qr h1 {
  font-family: 'prototype', sans-serif;
  font-size: 4rem;
  font-weight: 100;
  padding: 0 0 0 15px;
  margin: 15px 0px -2px 0px;
}

.opcion-qr p {
  font-size: 17px;
  margin: 20px;
  font-family: sans-serif;
}

.contenidoImagenes-qr {
  display: flex;
}

.contenidoImagenes-qr h6 {
  text-align: center;
  margin: 10px 0 10px 0;
}

.imagenes-qr {
  display: flex;
  justify-items: center;
  flex-direction: column;
}

.imagenes-qr img {
  width: 40rem;
  height: 20rem;
  filter: drop-shadow(2px 4px 6px black);
  margin-left: 22px;
  transition: transform 0.3s ease;
}

.imagenes-qr img:hover {
  transform: scale(1.009);
}
</style>
