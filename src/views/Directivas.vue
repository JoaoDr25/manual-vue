<template>
  <q-page padding class="directivas-qr">
    <h1>Directivas en Vue</h1>
    <p>
      Las directivas son atributos especiales que se añaden a los elementos en el template. Sirven para manipular el DOM
      de forma declarativa y reactiva, según los datos del componente.
      Algunas de las más usadas son:
    </p>
    <ul>
      <li><span>v-bind</span>: Enlaza dinámicamente atributos (por ejemplo, imágenes, clases o estilos).</li>
      <li><span>v-if</span>: Renderiza condicionalmente un elemento.</li>
      <li><span>v-for</span>: Repite elementos según los datos de un array o un objeto.</li>
      <li><span>v-model</span>: Enlaza datos bidireccionalmente con inputs.</li>
      <li><span>v-on</span>: Escucha eventos del DOM (por ejemplo, clics o teclas).</li>
    </ul>
    <p>
      Vue también permite crear <span>directivas personalizadas</span>, aunque la mayoría de casos
      se resuelven con las directivas integradas.
    </p>

    <p>Ejemplo práctico con varias directivas:</p>
    <!-- <div class="imagenes-qr">
      <img src="../assets/directives.jpeg" alt="directives" class="imagen">
    </div> -->
    <div class="-qr">
      <p>También se puede usar interpolación para enlazar atributos dinámicos:</p>

      <div class="code-terminal">
        <div class="code-header">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
        </div>
        <pre><code></code></pre>
      </div>
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
  margin: 20px 60px 10px 32px;
}

.directivas-qr p {
  font-size: 0.96rem;
  margin: 20px 60px 10px 50px;
  font-family: sans-serif;
}

.directivas-qr ul {
  font-size: 0.96rem;
  margin: 20px 60px 10px 50px;
}

.directivas-qr span {
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
