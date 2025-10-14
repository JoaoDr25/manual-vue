<template>
  <q-page padding class="interpolacion-qr">
    <h1>Interpolación</h1>

    <p>
      La interpolación en Vue permite insertar valores dinámicos dentro del HTML utilizando llaves dobles <code v-pre>{{ }}</code>.
      Vue se encarga de renderizar automáticamente el contenido de las variables o expresiones en el DOM,
      manteniendo la vista sincronizada con los datos del componente.
    </p>

    <div class="blocks-qr">


      <div class="first-qr">
        <p>Se pueden hacer operaciones simples dentro de las llaves, aquí hay un ejemplo:</p>

        <div class="code-terminal">
          <div class="code-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <pre><code>
&lt;template&gt;
  &lt;q-page padding&gt;
    &lt;h1&gt;Hola, {{ nombre }} 👋&lt;/h1&gt;
    &lt;q-input v-model="nombre" label="Escribe tu nombre" /&gt;
  &lt;/q-page&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const nombre = ref('Juan')
&lt;/script&gt;
          </code></pre>
        </div>

        <ul style="padding: 5px 50px 5px 65px;">
          <li v-pre>{{ nombre }} muestra el valor de la variable nombre.</li>
          <li>Gracias a <code>v-model</code>, el valor se actualiza automáticamente en tiempo real cada vez que el usuario escribe.</li>
        </ul>
      </div>


      <div class="second-qr">
        <p>Dentro de las llaves también se pueden usar operaciones o funciones simples:</p>

        <div class="code-terminal">
          <div class="code-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <pre><code>
&lt;template&gt;
  &lt;div class="example"&gt;
    &lt;p&gt;El año actual es: {{ new Date().getFullYear() }}&lt;/p&gt;
    &lt;p&gt;Tu nombre en mayúsculas: {{ nombre.toUpperCase() }}&lt;/p&gt;
    &lt;p&gt;Longitud de tu nombre: {{ nombre.length }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const nombre = ref('Camilo')
&lt;/script&gt;
          </code></pre>
        </div>

        <ul style="padding: 5px 50px 5px 65px;">
          <li>Solo se permiten expresiones simples, no estructuras de control como <code>if</code> o <code>for</code>.</li>
        </ul>
      </div>

 
      <div class="third-qr">
        <p>También se puede usar interpolación para enlazar atributos dinámicos:</p>

        <div class="code-terminal">
          <div class="code-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <pre><code>
&lt;template&gt;
  &lt;img :alt="`Foto de ${nombre}`" :src="imagenUrl" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const nombre = 'Juan'
const imagenUrl = 'https://vuejs.org/images/logo.png'
&lt;/script&gt;
          </code></pre>
        </div>

        <ul style="padding: 5px 50px 5px 65px;">
          <li v-pre>:alt es un atajo de v-bind:alt, y permite enlazar dinámicamente el texto alternativo.</li>
          <li>Así Vue actualiza automáticamente los atributos HTML cuando cambian las variables.</li>
        </ul>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const nombre = ref('Camilo')
const imagenUrl = 'https://vuejs.org/images/logo.png'
</script>


<script setup></script>

<style scoped>
@font-face {
    font-family: 'prototype';
    src: url('../fonts/Prototype.ttf') format('truetype');
}

.interpolacion-qr h1 {
    font-family: 'prototype', sans-serif;
    font-size: 4rem;
    padding: 0 0 0 15px;
    margin: 20px 60px 10px 32px;
}

.interpolacion-qr p {
    font-size: 0.96rem;
    margin: 20px 60px 10px 50px;
    font-family: sans-serif;
}

.interpolacion-qr span {
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
    cursor: pointer;
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

.blocks-qr {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
}


</style>