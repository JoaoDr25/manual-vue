<template>
  <q-page padding class="opcion-qr">
    <h1>Options API vs Composition API</h1>
    <p>
      Vue ofrece dos formas de escribir componentes:
    </p>
    <ul>
      <li><span>Options API</span>: Basada en secciones como <span>data</span>, <span>methods</span> y <span>computed</span>.
      </li>
      <li><span>Composition API</span>: Utiliza funciones como <span>ref</span>, <span>reactive</span> y <span>setup</span>
        para mayor flexibilidad.</li>
    </ul>
    <p>
      La Composition API es ideal para proyectos grandes porque facilita la reutilización de lógica,
      mientras que la Options API puede ser más clara para principiantes.
    </p>
    <div class="contenidoImagenes-qr">
      <!-- <div class="imagenes-qr">
        <h6>Options Api</h6>
        <img src="../assets/optionsApi.jpeg" alt="optionsApi" class="imagen">
      </div> -->

      <!-- <div class="imagenes-qr">
        <h6>Compositions Api</h6>
        <img src="../assets/compositionsApi.jpeg" alt="compositionsApi" class="imagen">
      </div> -->
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
  padding: 0 0 0 15px;
  margin: 20px 60px 10px 32px;
}

.opcion-qr p {
  font-size: 0.96rem;
  margin: 20px 60px 10px 50px;
  font-family: sans-serif;
}

.opcion-qr ul {
  font-size: 0.96rem;
  margin: 20px 60px 10px 50px;
}

.opcion-qr span {
  font-family: 'prototype', sans-serif;
}

.contenidoImagenes-qr {
  display: flex;
}

.contenidoImagenes-qr h6 {
  text-align: center;
  margin: 10px 0 10px 0;
  font-family: 'prototype', sans-serif;
  font-size: 18px;
}

/* .imagenes-qr {
  display: flex;
  justify-items: center;
  flex-direction: column;
  margin-bottom: 10px;
} */

/* .imagenes-qr img {
  width: 40rem;
  height: 20rem;
  filter: drop-shadow(2px 4px 6px black);
  margin-left: 22px;
  transition: transform 0.3s ease;
} */

/* .imagenes-qr img:hover {
  transform: scale(1.009);
} */

.code-terminal {
    background: #1e1e1e;
    color: #e8e8e8;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    font-family: 'Fira Code', monospace;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    margin: 10px 52px 10px 50px;
    overflow-x: auto;
    cursor: pointer
}

.code-header {
    display: flex;
    gap: 6px;
    margin-bottom: 0.5rem;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.red {
    background: #ff5f56;
}

.yellow {
    background: #ffbd2e;
}

.green {
    background: #27c93f;
}
</style>
