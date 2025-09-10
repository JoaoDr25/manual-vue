<template>
  <q-page padding class="directivas-qr">
    <h1>Directivas en Vue</h1>
    <p>
      Las directivas son atributos especiales que se añaden a los elementos en el template.
      Algunas de las más usadas son:
    </p>
    <ul>
      <li><code>v-bind</code>: enlaza dinámicamente atributos (ej: imágenes, clases).</li>
      <li><code>v-if</code>: renderiza condicionalmente un elemento.</li>
      <li><code>v-for</code>: renderiza listas basadas en un array.</li>
      <li><code>v-model</code>: enlaza datos bidireccionalmente con inputs.</li>
    </ul>
    <p>
      Vue también permite crear <b>directivas personalizadas</b>, aunque la mayoría de casos
      se resuelven con las directivas integradas.
    </p>

  </q-page>
</template>

<script setup></script>
<style scoped> 
@font-face {
  font-family: 'prototype';
  src: url('../fonts/Prototype.ttf') format('truetype');
}
.directivas-qr h1{
font-family: 'prototype', sans-serif;
font-size: 4rem;
font-weight: 100;
padding: 0 0 0 15px;
margin: 15px 0px -2px 0px;
}
.directivas-qr p{
 font-size: 17px;
    margin: 20px;
    font-family: sans-serif;
}

</style>
