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
      Ejemplo: Un componente <span>BotonPersonalizado</span> puede recibir una prop
      <span>label</span> que define el texto que muestra el botón.
    </p>
    <!-- <div class="imagenes-qr">
      <img src="../assets//props1.jpeg" alt="props1" class="imagen">
    </div> -->

  </q-page>
</template>

<script setup></script>
<style scoped>
@font-face {
  font-family: 'prototype';
  src: url('../fonts/Prototype.ttf') format('truetype');
}

.props-qr h1 {
  font-family: 'prototype', sans-serif;
  font-size: 4rem;
  padding: 0 0 0 15px;
  margin: 20px 60px 10px 32px;
}

.props-qr p {
  font-size: 0.96rem;
  margin: 20px 60px 10px 50px;
  font-family: sans-serif;
  text-align: justify;
}

.props-qr span {
  font-family: 'prototype', sans-serif;
}

/* .imagenes-qr {
  display: flex;
  justify-items: center;
} */

/* .imagenes-qr img {
  width: 40rem;
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
