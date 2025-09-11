<template>
  <q-page padding class="creacion-qr">
    <h1>Creación de un Proyecto con Vite</h1>
    <p>
      La forma más común de iniciar un proyecto moderno de Vue 3 es utilizando Vite,
      un bundler rápido y ligero.
    </p>
    <ol>
      <li>Lo primero es crear un proyecto Vue con Vite. Ejecuta <code>npm create vite@latest mi-proyecto</code></li>
      <div class="imagenes-qr">
        <img src="../assets/crearProyecto1.jpeg" alt="crearProyecto1" class="imagen">
      </div>
      <li>Selecciona la plantilla <b>Vue</b> o <b>Vue + JavaScript</b>. </li>
      <div class="imagenes-qr">
        <img src="../assets/captura.jpg" alt="seleccionarPlantilla" class="imagen">
      </div>
      <li>Luego entra a la carpeta e instala las dependencias iniciales con: <code>npm install</code></li>
      <div class="imagenes-qr">
        <img src="../assets/ingresarCarpeta.jpg" alt="ingresarCarpeta" class="imagen">
      </div>
      <li>Ejecuta <code>npm run dev</code> para iniciar el servidor local.</li>
      <div class="imagenes-qr">
        <img src="../assets/ejecutarServidor.jpg" alt="iniciarServidor" class="imagen">
      </div>
      <li>La terminal debe mostrar algo como:</li>
      <div class="imagenes-qr">
        <img src="../assets/mostrarTerminal.jpg" alt="mostrarTerminal" class="imagen">
      </div>
    </ol>
    <p>La estructura mínima recomendada debe tener lo siguiente:</p>

    <pre>
      │
      ├─ public/ 
      │ └─ index.html
      │
      ├─ src/
      │ ├─ assets/
      │ ├─ components/
      │ │ └─ EjemploComponente.vue
      │ ├─ views/
      │ │ ├─ Home.vue
      │ │ └─ About.vue
      │ ├─ router/
      │ │ └─ index.js
      │ ├─ App.vue
      │ └─ main.js
      │
      ├─ package.json
      ├─ vite.config.js
      └─ README.md
    </pre>
  </q-page>
</template>

<script setup></script>
<style scoped>
@font-face {
  font-family: 'prototype';
  src: url('../fonts/Prototype.ttf') format('truetype');
}

.creacion-qr h1 {
  font-family: 'prototype', sans-serif;
  font-size: 4rem;
  padding: 0 0 0 15px;
  margin: 15px 0px -2px 0px;
}

.creacion-qr p {
  font-family: sans-serif;
  font-size: 16px;
  margin: 20px;
}

.imagenes-qr {
  display: flex;
  justify-items: center;
}

.imagenes-qr img {
  width: 40rem;
  filter: drop-shadow(2px 4px 6px black);
  /* margin-left: 10px; */
  transition: transform 0.3s ease;
  margin-bottom: 10px;
}

.imagenes-qr img:hover {
  transform: scale(1.009);
}
</style>
