<template>
  <q-page padding class="props-qr">
    <h1>Props</h1>
    <p>
      Las props permiten pasar datos desde un componente padre a un componente hijo.
      Son la principal forma de comunicación descendente en Vue.
    </p>
    <p>
      Se pueden definir con tipos y valores por defecto, lo que mejora la mantenibilidad
      y la validación de los datos.
    </p>
    <p>
      Ejemplo: Un componente <code>BotonPersonalizado</code> puede recibir una prop
      <code>label</code> que define el texto que muestra el botón.
    </p>
    <div class="imagenes-qr">
      <img src="../assets//props1.jpeg" alt="props1" class="imagen">
    </div>

  </q-page>
</template>

<script setup></script>
<style scoped >
@font-face {
  font-family: 'prototype';
  src: url('../fonts/Prototype.ttf') format('truetype');
}

.props-qr h1{
font-family: 'prototype', sans-serif;
font-size: 4rem;
font-weight: 100;
padding: 0 0 0 15px;
margin: 15px 0px -2px 0px;
}

.props-qr p{
 font-size: 17px;
    margin: 20px;
    font-family: sans-serif;
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
