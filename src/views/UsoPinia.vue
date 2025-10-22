<template>
  <q-page class="pinia-qr">
    <div class="titulo-pinia">
      <h1>Pinia</h1> <img src="../assets/image-removebg-preview.png" alt="foto pinia">
    </div>
    <p>
      Pinia es la librería oficial recomendada para la gestión de estado en Vue 3.
      Reemplaza a Vuex con una API más simple, moderna y clara, basada en el Composition API.
      Gracias a Pinia puedes compartir estados (datos reactivos) entre componentes sin tener que pasar props
      manualmente. Esto facilita el mantenimiento de la aplicación y mejora la organización del código.
    </p>
    <p>

    </p>
    <h6>
      Instalación:
    </h6>
    <p>
      Antes de usar Pinia, debes instalarla con npm:
    </p>
    <div class="code-terminal" style="padding-bottom: 0; margin-bottom: 40px; margin-top: 20px;">
      <div class="code-header">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
      </div>
      <div class="terminal-body">
      <pre><code><span style="color: #DCDCAA;">npm</span> install vue-router</code></pre>
    </div>
    </div>

    <p>
      Y luego integrarla en tu aplicación principal (por ejemplo, en main.js):
    </p>

    <div class="code-terminal" style="padding-bottom: 0; margin-bottom: 40px; margin-top: 20px;">
      <div class="code-header">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
      </div>
      <pre><code><span style="color: #DCDCAA;">npm</span> import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

// Se crea una instancia de Pinia y se añade a la aplicación
app.use(createPinia())

app.mount('#app')
</code></pre>
    </div>

    <h6>Conceptos Clave</h6>
    <p>Cada store en Pinia actúa como un "módulo de estado" que puede contener:</p>
    <ul>
      <li><span>State:</span> variables reactivas globales.</li>
      <li><span>Actions:</span> métodos que modifican el estado.</li>
      <li><span>Getters:</span> valores derivados del estado, similares a propiedades computadas.</li>
    </ul>
    <p>
      Los stores pueden usarse en cualquier componente, y también soportan persistencia, devtools y tipado con
      TypeScript.
    </p>
    <h6>
      Ejemplo básico:
    </h6>

    <div class="main-qr">
      <div class="first-qr">
        <div class="code-terminal">
          <div class="code-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <pre class="pre-dark"><code>
<span class="t-key">import</span> &#123; <span class="t-ident">defineStore</span> &#125; <span class="t-key">from</span> <span class="t-string">'pinia'</span>

<span class="t-key">export const</span> <span class="t-ident">useCounterStore</span> = <span class="t-func">defineStore</span>(<span class="t-string">'counter'</span>, &#123;
  <span class="t-prop">state</span>: () =&gt; &#123;
    <span class="t-key">return</span> &#123; <span class="t-prop">count</span>: <span class="t-num">0</span> &#125;
  &#125;,

  <span class="t-comment">// también se puede definir como</span>
  <span class="t-comment">// state: () =&gt; (&#123; count: 0 &#125;)</span>
  
  <span class="t-prop">actions</span>: &#123;
    <span class="t-func">increment</span>() &#123;
      <span class="t-key">this</span>.<span class="t-prop">count</span>++
    &#125;
  &#125;
&#125;)
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
          <pre class="pre-dark"><code>
&lt;<span class="t-tag">script</span> <span class="t-attr">setup</span>&gt;
<span class="t-key">import</span> &#123; <span class="t-ident">useCounterStore</span> &#125; <span class="t-key">from</span> <span class="t-string">'@stores/counter'</span>

<span class="t-key">const</span> <span class="t-ident">counter</span> = <span class="t-func">useCounterStore</span>()

<span class="t-ident">counter</span>.<span class="t-prop">count</span>++
<span class="t-comment">// con autocompletado ✨</span>
<span class="t-ident">counter</span>.<span class="t-method">$patch</span>(&#123; <span class="t-prop">count</span>: <span class="t-ident">counter</span>.<span class="t-prop">count</span> + <span class="t-num">1</span> &#125;)
<span class="t-comment">// o usando una acción en su lugar</span>
<span class="t-ident">counter</span>.<span class="t-method">increment</span>()
&lt;/<span class="t-tag">script</span>&gt;

&lt;<span class="t-tag">template</span>&gt;
  <span class="t-comment">&lt;!-- Accede al estado desde el almacén directamente --&gt;</span>
  &lt;<span class="t-tag">div</span>&gt;Current Count: &#123;&#123; <span class="t-ident">counter</span>.<span class="t-prop">count</span> &#125;&#125;&lt;/<span class="t-tag">div</span>&gt;
&lt;/<span class="t-tag">template</span>&gt;
</code></pre>
        </div>
      </div>
    </div>

    <h6>En resumen</h6>
    <p>Pinia ofrece una forma simple, reactiva y escalable de manejar el estado global en aplicaciones Vue 3.
      Su integración nativa con Composition API, junto con la compatibilidad con Vue DevTools, la convierte en la opción
      ideal para proyectos modernos.</p>
    <p><em>En pocas líneas puedes tener un store funcional, fácilmente integrable y con soporte completo para TypeScript
        y herramientas de depuración.</em></p>


  </q-page>
</template>

<script setup></script>
<style scoped>
@font-face {
  font-family: 'prototype';
  src: url('../fonts/Prototype.ttf') format('truetype');
}

.titulo-pinia h1 {
  font-family: 'prototype', sans-serif;
  font-size: 4rem;
  font-weight: 100;
  padding: 0 0 0 15px;
  margin: 15px 10px 10px 32px;
}

.titulo-pinia {
  display: flex;
}

.titulo-pinia img {
  height: 85px;
  margin: 10px 0 0 0;
}

.pinia-qr ul {
  font-size: 0.96rem;
  margin: 20px 60px 10px 50px;
}

.pinia-qr p {
  font-size: 0.96rem;
  margin: 4px 0 0 20px;
  font-family: sans-serif;
  margin: 20px 60px 10px 50px;
}

.pinia-qr h1 {
  font-family: 'prototype', sans-serif;
  font-size: 4rem;
  padding: 0 0 0 15px;
}

.pinia-qr h6 {
  font-family: 'prototype', sans-serif;
  margin: 20px 60px 10px 50px;
  font-size: 0.96rem;
}

.pinia-qr span {
  font-family: 'prototype', sans-serif;
}

.contenidoImagenes-qr {
  display: flex;
  margin-bottom: 10px;
}

.contenidoImagenes-qr p {
  text-align: center;
  margin: 10px 0 10px 0;
  font-family: 'prototype', sans-serif;
  font-size: 15px;
}

.code-terminal {
  background: #1e1e1e;
  color: #e8e8e8;
  border-radius: 10px;
  font-family: 'Fira Code', monospace;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  margin: 10px 52px 10px 50px;
  overflow-x: auto;
  cursor: pointer
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

.pre-dark {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 16px;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  line-height: 1.5;
  overflow-x: auto;
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
</style>
