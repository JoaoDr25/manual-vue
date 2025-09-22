<template>
  <q-page padding class="ciclo-qr">
    <h1>Ciclo de Vida de un Componente</h1>
    <p>
      Cada componente de Vue pasa por una serie de etapas, conocidas como ciclo de vida.
      Algunas funciones importantes son:
    </p>
    <ul>
      <li><span>onMounted</span>: Se ejecuta cuando el componente ya está en el DOM.</li>
      <li><span>onUpdated</span>: Se ejecuta cuando cambian las propiedades o estado del componente.</li>
      <li><span>onUnmounted</span>: Se ejecuta justo antes de que el componente sea destruido.</li>
    </ul>
    <p>
      Permiten ejecutar lógica en momentos específicos, como obtener datos de una API
      o limpiar recursos.
    </p>
    <div class="imagenes-qr">
      <img src="../assets/lifeCycle.jpeg" alt="lifeCycle" class="imagen">
    </div>

  </q-page>
</template>

<script setup></script>
<style scoped>
@font-face {
  font-family: 'prototype';
  src: url('../fonts/Prototype.ttf') format('truetype');
}

.ciclo-qr h1 {
  font-family: 'prototype', sans-serif;
  font-size: 4rem;
  padding: 0 0 0 15px;
  margin: 15px 0px -2px 0px;
}

.ciclo-qr p {
  font-size: 16px;
  margin: 20px;
  font-family: sans-serif;
}

.ciclo-qr ul {
  font-size: 16px;
}

.ciclo-qr span {
  font-family: 'prototype', sans-serif;
}

.imagenes-qr {
  display: flex;
  justify-items: center;
}

.imagenes-qr img {
  width: 40rem;
  filter: drop-shadow(2px 4px 6px black);
  margin-left: 22px;
  transition: transform 0.3s ease;
}

.imagenes-qr img:hover {
  transform: scale(1.009);
}
</style>
