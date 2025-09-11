<template>
  <q-page padding class="directivas-qr">
    <h1>Directivas en Vue</h1>
    <p>
      Las directivas son atributos especiales que se añaden a los elementos en el template.
      Algunas de las más usadas son:
    </p>
    <ul>
      <li><span>v-bind</span>: enlaza dinámicamente atributos (ej: imágenes, clases).</li>
      <li><span>v-if</span>: renderiza condicionalmente un elemento.</li>
      <li><span>v-for</span>: renderiza listas basadas en un array.</li>
      <li><span>v-model</span>: enlaza datos bidireccionalmente con inputs.</li>
    </ul>
    <p>
      Vue también permite crear <span>directivas personalizadas</span>, aunque la mayoría de casos
      se resuelven con las directivas integradas.
    </p>
    <div class="imagenes-qr">
      <img src="../assets/directives.jpeg" alt="directives" class="imagen">
    </div>

  </q-page>
</template>

<script setup></script>
<style scoped>
@font-face {
  font-family: 'prototype';
  src: url('../fonts/Prototype.ttf') format('truetype');
}

.directivas-qr h1 {
  font-family: 'prototype', sans-serif;
  font-size: 4rem;
  padding: 0 0 0 15px;
  margin: 15px 0px -2px 0px;
}

.directivas-qr p {
  font-size: 16px;
  margin: 20px;
  font-family: sans-serif;
}

.directivas-qr ul {
  font-size: 16px;
}

.directivas-qr span {
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
