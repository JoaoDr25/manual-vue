<template>
  <q-page padding class="props-qr">
    <h1>Props</h1>
    <p>
      Las props son la principal forma de comunicación entre un componente padre y un componente hijo.
      Permiten pasar datos desde el padre al hijo, haciendo que los componentes sean más reutilizables y configurables.
      En Vue 3, las props se definen directamente dentro del bloque &lt;script setup&gt; usando
      <code>defineProps()</code>.
      Además, se pueden validar sus tipos, asignar valores por defecto y hacerlas obligatorias.
    </p>
    <p>
      Las props son unidireccionales, es decir, los datos fluyen del padre al hijo, no al revés.
      Si necesitas enviar información en sentido contrario, se hace con eventos personalizados (emits).
    </p>
    <!-- <div class="imagenes-qr">
      <img src="../assets//props1.jpeg" alt="props1" class="imagen">
    </div> -->

    <div class="blocks-qr">

      
      <div class="first-qr">
        <p>Componente hijo: BotonPersonalizado.vue</p>

        <div class="code-terminal">
          <div class="code-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <pre><code>
&lt;template&gt;
  &lt;q-btn :label=&quot;label&quot; :color=&quot;color&quot; /&gt;
&lt;/template&gt;

&lt;script setup&gt;
// Definimos las props que recibe el componente
const props = defineProps({
  label: {
    type: String,
    required: true,
    default: 'Botón por defecto'
  },
  color: {
    type: String,
    default: 'secondary'
  }
})
&lt;/script&gt;
          </code></pre>
        </div>
      </div>

      <div class="second-qr">
        <p>Componente padre: PropsDemo.vue</p>

        <div class="code-terminal">
          <div class="code-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <pre><code>
&lt;template&gt;
  &lt;q-page padding&gt;
    &lt;h2&gt;Ejemplo de Props&lt;/h2&gt;
    &lt;!-- Se pasa la prop &quot;label&quot; al componente hijo --&gt;
    &lt;BotonPersonalizado label=&quot;Haz clic aquí 🚀&quot; color=&quot;primary&quot; /&gt;
  &lt;/q-page&gt;
&lt;/template&gt;

&lt;script setup&gt;
import BotonPersonalizado from './BotonPersonalizado.vue'
&lt;/script&gt;
          </code></pre>
        </div>
         <div class="frase-qr">
        <p>En resumen, las props permiten crear componentes altamente reutilizables y personalizables,
asegurando una comunicación clara entre componentes y manteniendo la unidireccionalidad de datos.
Son esenciales en cualquier aplicación Vue bien estructurada. 💚</p>
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

.props-qr h1 {
  font-family: 'prototype', sans-serif;
  font-size: 4rem;
  padding: 0 0 0 15px;
  margin: 20px 60px 10px 32px;
}

.props-qr p {
  font-size: 0.96rem;
  margin: 20px 60px 10px 50px;
  font-family: sans-serif;
  text-align: justify;
}

.props-qr span {
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

.blocks-qr {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}
</style>
