<template>
  <q-page padding class="opcion-qr">
    <h1>Options API vs Composition API</h1>
    <p>
      En Vue 3, ambas APIs pueden coexistir en el mismo proyecto.
    </p>
    <ul>
      <li>Options API es ideal para proyectos pequeños o para quienes vienen de Vue 2, ya que organiza el código por
        opciones (data, methods, computed, etc.).
      </li>
      <li>Composition API es más potente y escalable, ya que organiza el código por funcionalidades y permite reutilizar
        lógica entre componentes mediante composables.</li>
    </ul>
    <p>
      Se puede migrar gradualmente de Options API a Composition API sin reescribir todo el proyecto.
    </p>
    <!-- <div class="contenidoImagenes-qr">
       <div class="imagenes-qr">
        <h6>Options Api</h6>
        <img src="../assets/optionsApi.jpeg" alt="optionsApi" class="imagen">
      </div> -->

      <!-- <div class="imagenes-qr">
        <h6>Compositions Api</h6>
        <img src="../assets/compositionsApi.jpeg" alt="compositionsApi" class="imagen">
      </div> -->

    <div class="table-qr">
      <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
        <tr style="background-color: #42b883; color: white;">
          <th style="padding:8px; text-align:center;">Aspecto</th>
          <th style="padding:8px; text-align:center;">Options API</th>
          <th style="padding:8px; text-align:center;">Composition API</th>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="padding:8px; text-align: center;">Estructura</td>
          <td style="padding:8px; text-align: center;">Basada en secciones (data, methods, etc.)</td>
          <td style="padding:8px; text-align: center;">Basada en funciones reactivas (setup, ref, etc.)</td>
        </tr>
        <tr>
          <td style="padding:8px; text-align: center;">Ventaja</td>
          <td style="padding:8px; text-align: center;">Sencilla y clara para principiantes</td>
          <td style="padding:8px; text-align: center;">Flexible y más fácil de reutilizar lógica</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="padding:8px; text-align: center;">Recomendado para</td>
          <td style="padding:8px; text-align: center;">Proyectos pequeños o mantenimiento de código legado</td>
          <td style="padding:8px; text-align: center;">Proyectos medianos y grandes</td>
        </tr>
      </table>
    </div>

    <div class="main-qr">
      <div class="first-qr">
        <div class="code-terminal">
          <div class="code-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <pre><code>
&lt;h3&gt;Options API&lt;/h3&gt;
&lt;template&gt;
  &lt;q-page padding&gt;
    &lt;q-btn @click=&quot;incrementar&quot; label=&quot;Click&quot; /&gt;
    &lt;p&gt;{{ contador }}&lt;/p&gt;
  &lt;/q-page&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      contador: 0
    }
  },
  methods: {
    incrementar() {
      this.contador++
    }
  }
}
&lt;/script&gt;
          </code></pre>
        </div>
      </div>

      <div class="second-qr">
        <div class="code-terminal">
          <div class="code-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <pre><code>
&lt;h3&gt;Composition API&lt;/h3&gt;
&lt;template&gt;
  &lt;q-page padding&gt;
    &lt;q-btn @click=&quot;incrementar&quot; label=&quot;Click&quot; /&gt;
    &lt;p&gt;{{ contador }}&lt;/p&gt;
  &lt;/q-page&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

// Estado reactivo
const contador = ref(0)

// Función para modificar el estado
const incrementar = () =&gt; contador.value++
&lt;/script&gt;
&lt;/code&gt;&lt;/pre&gt;
          </code></pre>
        </div>

        <div class="frase-qr">
         
            <p>En resumen, Vue ofrece dos estilos de desarrollo complementarios:</p>
            <p style="margin-top: 0;">Options API prioriza la claridad y simplicidad, mientras que Composition API ofrece mayor escalabilidad y control sobre la lógica.</p>
         
        </div>

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

.opcion-qr h1 {
  font-family: 'prototype', sans-serif;
  font-size: 4rem;
  padding: 0 0 0 15px;
  margin: 20px 60px 10px 32px;
}

.opcion-qr p {
  font-size: 0.96rem;
  margin: 20px 60px 10px 50px;
  font-family: sans-serif;
}

.opcion-qr ul {
  font-size: 0.96rem;
  margin: 20px 60px 10px 50px;
}

.opcion-qr span {
  font-family: 'prototype', sans-serif;
}

/* .contenidoImagenes-qr {
  display: flex;
} */

/* .contenidoImagenes-qr h6 {
  text-align: center;
  margin: 10px 0 10px 0;
  font-family: 'prototype', sans-serif;
  font-size: 18px;
} */

/* .imagenes-qr {
  display: flex;
  justify-items: center;
  flex-direction: column;
  margin-bottom: 10px;
} */

/* .imagenes-qr img {
  width: 40rem;
  height: 20rem;
  filter: drop-shadow(2px 4px 6px black);
  margin-left: 22px;
  transition: transform 0.3s ease;
} */

/* .imagenes-qr img:hover {
  transform: scale(1.009);
} */

.table-qr {
  margin: 20px 60px 30px 50px;
}

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

.main-qr {
  display: flex;
}

.first-qr {
  width: 50%;
  margin-bottom: 30px;
}

.second-qr {
  width: 50%;
}

.frase-qr p {
  font-size: 0.9rem;
  margin: 20px 56px 0 56px;
  text-align: center;
}
</style>
