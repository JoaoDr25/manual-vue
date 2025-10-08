<template>
  <q-page padding class="pinia-qr">
    <div class="titulo-pinia">
      <h1>Pinia</h1> <img src="../assets/image-removebg-preview.png" alt="foto pinia">
    </div>
    <p>
      Pinia es una librería de almacenes para Vue que te permite compartir el estado entre los distintos componentes/páginas. Si estás familiarizado con la API de composición probablemente estarás pensando que ya puedes compartir un estado global con un simple export const state = reactive({}). Esto es cierto para aplicaciones de una sola página (SPA) pero expone to aplicación a vulnerabilidades de seguridad si es renderizada en el lado del servidor. Pero incluso en aplicaciones de una sola página pequeñas obtienes mucho al usar Pinia:
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
margin: 15px 0px -2px 0px;
}
.titulo-pinia{
   display: flex;
}
.titulo-pinia img{
 height: 85px;
 margin: 10px 0 0 0;


}
/* .pinia-qr ul{ 
  font-family: sans-serif;

} */
.pinia-qr p{
 font-size: 17px;
    margin: 4px 0 0 20px;
    font-family: sans-serif;
}

.pinia-qr h1 {
  font-family: 'prototype', sans-serif;
  font-size: 4rem;
  padding: 0 0 0 15px;
  margin: 15px 0px -2px 0px;

} 

.pinia-qr h6 {
    font-family: 'prototype', sans-serif;
    margin: 15px 0px -2px 22px;
    font-size: 16px;
}

.pinia-qr p {
  font-size: 16px;
  margin: 20px;
  font-family: sans-serif;
}

.pinia-qr ul {
  font-size: 16px;
}

.pinia-qr span {
  font-family: 'prototype', sans-serif;
}
</style>
