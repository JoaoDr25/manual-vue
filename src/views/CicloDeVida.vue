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
    <!-- <div class="imagenes-qr">
      <img src="../assets/lifeCycle.jpeg" alt="lifeCycle" class="imagen">
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

.ciclo-qr h1 {
  font-family: 'prototype', sans-serif;
  font-size: 4rem;
  padding: 0 0 0 15px;
  margin: 20px 60px 10px 32px;
}

.ciclo-qr p {
  font-size: 0.96rem;
  margin: 20px 60px 10px 50px;
  font-family: sans-serif;
}

.ciclo-qr ul {
  font-size: 0.96rem;
  margin: 20px 60px 10px 50px;
}

.ciclo-qr span {
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
