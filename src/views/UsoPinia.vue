<template>
  <q-page padding class="pinia-qr">
    <div class="titulo-pinia">
      <h1>Pinia</h1> <img src="../assets/image-removebg-preview.png" alt="foto pinia">
    </div>
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
    <h6>
      Ejemplo básico:
    </h6>
      <div class="contenidoImagenes-qr">
      <!-- <div class="imagenes-qr">
        <p>Así es como se ve usar Pinia en términos de API. Se tiene que empezar creando un almacén:</p>
        <img src="../assets/pinia01.JPG" alt="Pinia Store" class="imagen">
      </div> -->

      <!-- <div class="imagenes-qr">
        <p>Y luego usarla en un componente:</p>
        <img src="../assets/pinia02.JPG" alt="Pinia Store" class="imagen">
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

.titulo-pinia h1{
font-family: 'prototype', sans-serif;
font-size: 4rem;
font-weight: 100;
padding: 0 0 0 15px;
margin: 20px 60px 10px 32px;
}

.titulo-pinia{
   display: flex;
}

.titulo-pinia img{
 height: 85px;
 margin: 10px 0 0 0;
}

.pinia-qr ul { 
  font-size: 0.96rem;
  margin: 20px 60px 10px 50px;
}

.pinia-qr p {
  font-size: 0.96rem;
  margin: 4px 0 0 20px;
  font-family: sans-serif;
  margin: 20px 60px 10px 50px;
}

.pinia-qr h1 {
  font-family: 'prototype', sans-serif;
  font-size: 4rem;
  padding: 0 0 0 15px;
}

.pinia-qr h6 {
  font-family: 'prototype', sans-serif;
  margin: 20px 60px 10px 50px;
  font-size: 0.96rem;
}

.pinia-qr span {
  font-family: 'prototype', sans-serif;
}

/* .imagenes-qr {
  display: flex;
  justify-items: center;
  flex-direction: column;
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

.contenidoImagenes-qr {
  display: flex;
  margin-bottom: 10px;
}

.contenidoImagenes-qr p {
  text-align: center;
  margin: 10px 0 10px 0;
  font-family: 'prototype', sans-serif;
  font-size: 15px;
}

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
