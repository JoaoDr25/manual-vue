<template>
  <q-page padding class="requisitos-qr">
    <div class="logo-qr">
      <h1>Requisitos de Instalación</h1> <img src="../assets/img instalacion.png" alt="logo de instalacion">
    </div>
    <ul>
      <li><span>Node.js</span> y <span>npm </span>instalados en tu sistema.</li>
      <li>Conocimientos básicos de <span>HTML</span>, <span>CSS</span> y <span>JavaScript</span> moderno.</li>
      <li>Editor de texto recomendado: <span>Visual Studio Code.</span></li>
      <li>Extensiones útiles como: <span>Vue DevTools.</span></li>
    </ul>

  </q-page>
</template>

<script setup></script>
<style scoped>
@font-face {
  font-family: 'prototype';
  src: url('../fonts/Prototype.ttf') format('truetype');
}
.logo-qr{
   display: flex;
}
.logo-qr img{
 height: 98px;
    margin: 22px 0 0px 20px;

}

.requisitos-qr h1 {
  font-family: 'prototype', sans-serif;
  font-size: 4rem;
  padding: 0 0 0 15px;
  margin: 15px 0px -2px 0px;
}

.requisitos-qr span {
  font-size: 16px;
  font-family: 'prototype', sans-serif;
  text-align: justify;
}

.requisitos-qr ul {
  font-size: 16px;
  font-family: sans-serif;
}
</style>
