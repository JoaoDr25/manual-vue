<template>
  <q-page padding class="recursos-qr">
    <h1>Recursos de Aprendizaje</h1>

    <div class="recursos-container">

      <div class="code-terminal">
        <div class="code-header">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
          <!-- <span class="terminal-title">vue-docs</span> -->
        </div>
        <div class="terminal-body">
          <h3>Documentación Oficial de Vue.js</h3>
          <p>Aprende los fundamentos, el Composition API y ejemplos paso a paso directamente desde la documentación oficial.</p>
          <a href="https://vuejs.org/" target="_blank">Ir a la Documentación →</a>
        </div>
      </div>

      <div class="code-terminal">
        <div class="code-header">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
          <!-- <span class="terminal-title">router-docs</span> -->
        </div>
        <div class="terminal-body">
          <h3>Documentación de Vue Router</h3>
          <p>Descubre cómo manejar rutas, parámetros dinámicos y navegación programática con esta guía oficial.</p>
          <a href="https://router.vuejs.org/" target="_blank">Ver Recursos →</a>
        </div>
      </div>

      <div class="code-terminal">
        <div class="code-header">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
          <!-- <span class="terminal-title">pinia-store</span> -->
        </div>
        <div class="terminal-body">
          <h3>Documentación de Pinia</h3>
          <p>Gestiona el estado global de tu aplicación con la librería recomendada para Vue 3: sencilla, reactiva y potente.</p>
          <a href="https://pinia.vuejs.org/" target="_blank">Explorar →</a>
        </div>
      </div>

      <div class="code-terminal">
        <div class="code-header">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
          <!-- <span class="terminal-title">quasar-ui</span> -->
        </div>
        <div class="terminal-body">
          <h3>Framework Quasar</h3>
          <p>Crea interfaces modernas y responsivas con el poder de Vue y Quasar, listo para web, móvil y escritorio.</p>
          <a href="https://quasar.dev/" target="_blank">Visitar →</a>
        </div>
      </div>

      <div class="code-terminal">
        <div class="code-header">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
          <!-- <span class="terminal-title">vue-guides</span> -->
        </div>
        <div class="terminal-body">
          <h3>Guías y Tutoriales sobre Vue</h3>
          <p>Encuentra artículos, videos y ejemplos prácticos de la comunidad para seguir aprendiendo y practicando Vue.</p>
          <a href="https://vuejs.org/guide/introduction.html#try-vue-online" target="_blank">Ver Guías →</a>
        </div>
      </div>

    </div>
  </q-page>
</template>

<script setup></script>

<style>
@font-face {
  font-family: 'prototype';
  src: url('../fonts/Prototype.ttf') format('truetype');
}

.recursos-qr h1 {
  font-family: 'prototype', sans-serif;
  font-size: 4rem;
  padding: 0 0 0 15px;
  margin: 20px 60px 10px 32px;
}

.recursos-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  margin: 20px 60px 10px 50px;
}

.code-terminal {
  background: #1e1e1e;
  color: #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.code-terminal:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.4);
}

.code-header {
  background: #2b2b2b;
  display: flex;
  align-items: center;
  padding: 0.4rem 0.8rem;
  position: relative;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 6px;
}

.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27c93f; }

.terminal-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #aaa;
  font-size: 0.9rem;
  font-weight: bold;
}

.terminal-body {
  padding: 1rem 1.2rem;
}

.terminal-body h3 {
  color: #42b883;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-family: 'prototype', sans-serif;
  margin-top: 0;
}

.terminal-body p {
  color: #cfcfcf;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.terminal-body a {
  display: inline-block;
  background: #42b883;
  color: white;
  text-decoration: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-weight: 100;
  transition: background 0.3s ease;
}

.terminal-body a:hover {
  background: #2c9c6b;
}
</style>
