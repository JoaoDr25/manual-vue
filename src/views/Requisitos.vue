<template>
  <q-page padding class="requisitos-qr">
      <h1 style="margin-right: 20px;">Requisitos de Instalación</h1>
    <p>
      Antes de comenzar a desarrollar aplicaciones con Vue.js, es fundamental asegurarse de cumplir con
      ciertos requisitos técnicos que garanticen un entorno de desarrollo estable, compatible y sin errores.
    </p>
    <p>
      A continuación se detallan los elementos necesarios antes de crear el primer proyecto con Vue:
    </p>
    <div class="table-qr">
      <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
        <thead style="background-color: #42b883; color: white;">
          <tr>
            <th style="padding: 8px;">Componente</th>
            <th style="padding: 8px;">Requisito</th>
            <th style="padding: 8px;">Versión recomendada</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 8px; text-align: center;">Node.js</td>
            <td style="padding: 8px; text-align: center;">Entorno de ejecución de JavaScript</td>
            <td style="padding: 8px; text-align: center">v16.x o superior</td>
          </tr>
          <tr>
            <td style="padding: 8px; text-align: center;">npm</td>
            <td style="padding: 8px; text-align: center;">Gestor de paquetes incluido con Node.js</td>
            <td style="padding: 8px; text-align: center;">v8.x o superior</td>
          </tr>
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 8px; text-align: center;">Editor de código</td>
            <td style="padding: 8px; text-align: center;">Visual Studio Code (recomendado)</td>
            <td style="padding: 8px; text-align: center;">Última versión</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="blocks-qr">
      <div class="first-qr">
  
        <p>Verifique las versiones instaladas ejecutando:</p>

        <!-- <div class="imagen-qr">
      <img src="../assets/vueVersion.JPG" alt="Version de node y npm" class="imagen">
    </div> -->
        <div class="code-terminal">
          <div class="code-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <pre><code><span style="color: #DCDCAA;">node</span> -v <br><span style="color: #DCDCAA;">npm</span> -v</code></pre>
        </div>

        <p>Si no los tiene instalados, descárguelos desde el sitio oficial:
          🔗 <a href="https://nodejs.org" target="_blank">https://nodejs.org</a>
        </p>
      
        <p style="margin-top: 10px; margin-bottom: 20px;"><strong>Nota:</strong> La instalación de Node.js incluye automáticamente npm.
        </p>
      </div>

      <div class="second-qr">
        <!-- <p>Verificación final del entorno</p> -->
        <p>
          Para confirmar que todo está correctamente instalado, ejecute lo siguiente:
        </p>

        <!-- <div class="imagen-qr">
      <img src="../assets/vueComando.JPG" alt="Vue Comando Instalación" class="imagen">
    </div> -->
        <div class="code-terminal">
          <div class="code-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <pre><code><span style="color: #DCDCAA;">npm</span> create vite@latest test-vue</code></pre>
        </div>

        <p>
          Si el asistente de Vite se inicia sin errores, tu entorno está listo para crear proyectos Vue.js.
        </p>
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

.requisitos-qr h1 {
  font-family: 'prototype', sans-serif;
  font-size: 4rem;
  padding: 0 0 0 15px;
  margin: 20px 60px 10px 30px;
}

.requisitos-qr span {
  font-family: 'prototype', sans-serif;
  font-size: 0.96rem;
  text-align: justify;
}

.requisitos-qr ul {
  font-size: 0.96rem;
  font-family: sans-serif;
}

.requisitos-qr p {
  font-size: 0.96rem;
  margin: 20px 60px 10px 50px;
}

.table-qr {
  margin: 20px 60px 10px 50px;
}

.code-terminal {
  background: #1e1e1e;
  color: #d4d4d4;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  margin: 10px 52px 10px 50px;
  overflow: hidden;
  font-family: 'Fira Code', monospace;
}

.code-terminal pre {
  cursor: text;
}

.code-header {
  background: #2d2d2d;
  padding: 8px 12px;
  display: flex;
  gap: 8px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.red {
  background-color: #ff5f56;
}

.yellow {
  background-color: #ffbd2e;
}

.green {
  background-color: #27c93f;
}

pre {
  margin: 0;
  padding: 1rem 1.2rem;
  overflow-x: auto;
}

.blocks-qr {
  display: flex;
}

.first-qr {
  width: 50%;
}

.second-qr {
  width: 50%;
}

</style>
