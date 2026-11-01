<template>
  <q-page padding class="interpolacion-qr">
    <h1>Interpolación</h1>

    <p>
      La interpolación en Vue permite insertar valores dinámicos dentro del HTML utilizando llaves dobles <b><code
          v-pre> {{ }}</code></b>.
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
          <pre class="pre-dark" style="margin-bottom: 42px; margin-top: 0;"><code>
&lt;template&gt;
  &lt;q-page <span class="t-attr">padding</span>&gt;
    &lt;h1&gt;Hola, &#123;&#123; <span class="t-ident">nombre</span> &#125;&#125; 👋&lt;/h1&gt;
    &lt;q-input <span class="t-attr">v-model</span>=<span class="t-string">"nombre"</span> <span class="t-attr">label</span>=<span class="t-string">"Escribe tu nombre"</span> /&gt;
  &lt;/q-page&gt;
&lt;/template&gt;

&lt;script <span class="t-attr">setup</span>&gt;
<span class="t-comment">// Ejemplo: definimos un ref reactivo</span>
<span class="t-key">const</span> <span class="t-ident">nombre</span> = <span class="t-fn">ref</span>(<span class="t-string">'Juan'</span>)
&lt;/script&gt;
</code></pre>

        </div>

        <ul style="padding: 5px 50px 5px 65px;">
          <li v-pre><span>{{ nombre }}</span> muestra el valor de la variable nombre. Gracias a <span>v-model</span>, el valor se actualiza automáticamente en tiempo real cada vez que el
            usuario escribe.</li>
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
          <pre class="pre-dark" style="margin-bottom: 0; margin-top: 0;"><code>
&lt;template&gt;
  &lt;div class="example"&gt;
    &lt;p&gt;El año actual es: &#123;&#123; <span class="t-fn">new</span> <span class="t-class">Date</span>().<span class="t-ident">getFullYear</span>() &#125;&#125;&lt;/p&gt;
    &lt;p&gt;Tu nombre en mayúsculas: &#123;&#123; <span class="t-ident">nombre</span>.<span class="t-ident">toUpperCase</span>() &#125;&#125;&lt;/p&gt;
    &lt;p&gt;Longitud de tu nombre: &#123;&#123; <span class="t-ident">nombre</span>.<span class="t-prop">length</span> &#125;&#125;&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script <span class="t-attr">setup</span>&gt;
<span class="t-key">import</span> { <span class="t-ident">ref</span> } <span class="t-key">from</span> <span class="t-string">'vue'</span>

<span class="t-key">const</span> <span class="t-ident">nombre</span> = <span class="t-fn">ref</span>(<span class="t-string">'Camilo'</span>)
&lt;/script&gt;
</code></pre>
        </div>

        <ul style="padding: 5px 50px 5px 65px;">
          <li>Solo se permiten expresiones simples, no estructuras de control como <span>if</span> o <span>for</span>.
          </li>
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
          <pre class="pre-dark" style="margin-top: 0;"><code>
&lt;template&gt;
  &lt;img <span class="t-attr">:alt</span>=<span class="t-string">&quot;&#96;Foto de &#36;&#123;<span class="t-ident">nombre</span>&#125;&#96;&quot;</span> <span class="t-attr">:src</span>=<span class="t-ident">imagenUrl</span> /&gt;
&lt;/template&gt;

&lt;script <span class="t-attr">setup</span>&gt;
<span class="t-key">const</span> <span class="t-ident">nombre</span> = <span class="t-string">'Juan'</span>
<span class="t-key">const</span> <span class="t-ident">imagenUrl</span> = <span class="t-string">'https://vuejs.org/images/logo.png'</span>
&lt;/script&gt;
</code></pre>

        </div>

        <ul style="padding: 5px 50px 5px 65px;">
          <li v-pre><span>:alt</span> es un atajo de <span>v-bind: alt</span>, y permite enlazar dinámicamente el texto
            alternativo. Así Vue actualiza automáticamente los atributos HTML cuando cambian las variables.</li>
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

.code-terminal {
  background: #1e1e1e;
  color: #d4d4d4;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  margin: 10px 24px 20px;
  min-width: 0;
  overflow: hidden;
  font-family: 'Fira Code', monospace;
}

.code-header {
  background: #2d2d2d;
  padding: 8px 12px;
  display: flex;
  gap: 6px;
}

.pre-dark {
  box-sizing: border-box;
  max-width: 100%;
  overflow-x: auto;
  padding: 16px 24px;
  cursor: text;
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
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: 1fr auto;
  gap: 24px;
}

.blocks-qr > div {
  min-width: 0;
}

.t-tag {
  color: #d4d4d4;
}

.t-attr {
  color: #C586C0;
}

.t-key {
  color: #569CD6;
}

.t-ident {
  color: #9CDCFE;
}

.t-string {
  color: #6A9955;
}

.t-fn {
  color: #D16969;
}

.t-comment {
  color: #ffffff;
  opacity: 0.5;
  font-style: normal;
}

@media (max-width: 900px) {
  .blocks-qr {
    grid-template-columns: minmax(0, 1fr);
    gap: 8px;
  }
}

@media (max-width: 700px) {
  .interpolacion-qr h1 {
    font-size: 2.5rem;
    padding-left: 0;
    margin: 16px 22px 10px;
  }

  .interpolacion-qr p {
    margin: 16px 22px 10px;
  }

  .code-terminal {
    margin: 10px 12px 20px;
  }
}
</style>