<template>
  <q-page padding class="creacion-qr">
    <div class="proyecto-qr">
      <h1>Creación de un Proyecto con Vite</h1>
    </div>
    <div class="paragraph-qr">
      <p>
        A continuación, se detallan los pasos necesarios para crear y configurar un nuevo proyecto con Vue 3 utilizando
        Vite, un bundler moderno que ofrece un entorno de desarrollo rápido, ligero y optimizado para aplicaciones
        basadas
        en componentes.
      </p>
    </div>
    <div class="main-container">
      <div>
        <ol>
          <li>Inicie un nuevo proyecto con Vite, una herramienta moderna que configura automáticamente Vue 3 con un
            entorno rápido y ligero.</li>
        
          <div class="code-terminal">
            <div class="code-header">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <pre><code><span style="color: #DCDCAA;">npm</span> create vite@latest mi-proyecto</code></pre>
          </div>

          <li>Durante la instalación, el asistente de Vite pedirá una serie de opciones para personalizar el proyecto.
Seleccione las opciones según las necesidades. En este ejemplo, se utiliza Vue 3 con JavaScript y Vue Router habilitado para aplicaciones SPA.</li>
         
          <div class="code-terminal">
            <div class="code-header">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
             </div>
  <pre><code>
? Nombre del proyecto: › mi-proyecto-vue
<span style="color: #DCDCAA;">? ¿Deseas</span> usar TypeScript? › No
<span style="color: #DCDCAA;">? ¿Deseas</span> soporte para JSX? › No
<span style="color: #DCDCAA;">? ¿Deseas</span> agregar Vue Router para aplicaciones de una sola página (<span style="color: #DCDCAA;">SPA</span>)? › Sí
<span style="color: #DCDCAA;">? ¿Deseas</span> agregar Pinia para la gestión del estado? › No
<span style="color: #DCDCAA;">? ¿Deseas</span> agregar Vitest para pruebas unitarias? › No
<span style="color: #DCDCAA;">? ¿Deseas</span> agregar una solución de pruebas End-to-End (<span style="color: #DCDCAA;">Cypress</span>, Playwright)? › No
<span style="color: #DCDCAA;">? ¿Deseas</span> agregar ESLint para la calidad del código? › Sí
<span style="color: #DCDCAA;">? ¿Deseas</span> agregar Prettier para el formato del código? › Sí
  </code></pre>
</div>

          <li>Una vez creado el proyecto, entrar en la carpeta y ejecuta la instalación de dependencias.
            Esto descargará los paquetes necesarios para que Vue funcione correctamente.</li>
       
          <div class="code-terminal">
            <div class="code-header">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <pre><code><span style="color: #DCDCAA;">cd</span> mi-proyecto <span style="color: #DCDCAA;">npm</span> install</code></pre>
          </div>

          <li>Ejecutar el siguiente comando para iniciar el servidor local. Podrás ver la aplicación corriendo en el
            navegador.</li>
         
          <div class="code-terminal">
            <div class="code-header">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <pre><code><span style="color: #DCDCAA;">npm</span> run dev</code></pre>
          </div>

          <li>Abrir la dirección que aparece en la terminal para comprobar que el proyecto Vue 3 se ha creado
            correctamente. Si se ve la pantalla de bienvenida de Vite + Vue, ¡todo está listo para empezar!</li>
      
          <div class="code-terminal">
            <div class="code-header">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <pre><code><span style="color: #569CD6;">http://localhost:3000</span></code></pre>
          </div>

        </ol>
      </div>
      <div class="container02">
        <h6>La estructura mínima recomendada debe tener lo siguiente:</h6>
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

.creacion-qr span {
  font-family: 'prototype', sans-serif;
}

.proyecto-qr {
  display: flex;
  margin: 0 50px 0 30px;
}

.proyecto-qr img {
  height: 98px;
  margin: 14px 0 0px 13px;
}

.main-container {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 0.7fr);
  align-items: start;
  gap: 30px;
  margin: 24px 30px 0;
}

.main-container > div,
.container02 {
  min-width: 0;
}

.main-container li {
  margin: 0 12px 0 20px;
  width: auto;
}

.container02 h6 {
  font-size: 15px;
  font-family: 'prototype', sans-serif;
  padding-top: 15px;
  margin: 0;
  line-height: 20px;
}

.container02 pre {
  max-width: 100%;
  overflow-x: auto;
}

.paragraph-qr {
  margin: 0 50px 0 30px;
}

.creacion-qr h1 {
  font-family: 'prototype', sans-serif;
  font-size: 4rem;
  padding: 0 0 0 15px;
  margin: 15px 0px -2px 0px;
}

.creacion-qr p {
  font-family: sans-serif;
  font-size: 0.96rem;
  margin: 20px;
}

.code-terminal {
  background: #1e1e1e;
  color: #d4d4d4;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 1.5rem;
  margin: 0.5rem 3.5rem 1.5rem 1rem;
  overflow: hidden;
  font-family: 'Fira Code', monospace;
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
  cursor: text;
}

@media (max-width: 900px) {
  .main-container {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
    margin: 24px 22px 0;
  }
}

@media (max-width: 700px) {
  .proyecto-qr {
    align-items: center;
    margin: 0 22px;
  }

  .proyecto-qr h1 {
    font-size: 2.5rem;
    padding-left: 0;
  }

  .proyecto-qr img {
    height: 64px;
    margin: 0 0 0 10px;
  }

  .paragraph-qr {
    margin: 0 22px;
  }

  .creacion-qr p {
    margin: 16px 0;
  }
}
</style>
