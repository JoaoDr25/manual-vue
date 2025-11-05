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
    <p>En conjunto, Pinia proporciona una forma simple, reactiva y escalable de manejar el estado global en Vue 3.
Su integración nativa con la Composition API, su sintaxis intuitiva y su compatibilidad con herramientas modernas hacen que sea la opción ideal para construir aplicaciones profesionales, modulares y mantenibles.. En pocas líneas de código puedes crear un store funcional, fácil de integrar y con soporte completo para depuración, persistencia y tipado estático.</p>
    <p></p>

    <div class="blocks-qr">

      <div class="part02-qr">
        <h6>Estructura y beneficios de los stores en Pinia:</h6>
        <p>Cada store en Pinia actúa como un módulo de estado independiente, encargado de gestionar una parte específica de los datos de la aplicación. Estos módulos son completamente reusables, lo que facilita mantener el código organizado, escalable y fácil de depurar.</p>
        <p>Dentro de cada store se definen tres elementos fundamentales:</p>
        <ul>
          <li><span>State:</span> Contiene las variables reactivas globales, que representan el estado compartido de la aplicación (por ejemplo, usuarios, productos, configuraciones, etc.).</li>
          <li><span>Actions:</span> Son métodos que permiten modificar el estado o ejecutar lógica de negocio. Pueden realizar operaciones síncronas o asíncronas, como llamadas a una API o validaciones antes de cambiar el estado.</li>
          <li><span>Getters:</span> Funcionan como propiedades computadas derivadas del estado. Son ideales para obtener información procesada sin duplicar datos ni lógica.</li>
        </ul>
        <p>
          Los stores pueden ser usados en cualquier componente de la aplicación, y además ofrecen compatibilidad con:
        </p>
         <ul>
          <li>Persistencia del estado, para mantener los datos entre recargas del navegador.</li>
          <li>TypeScript, con tipado completo e inferencia automática, mejorando la productividad y evitando errores.</li>
          <li>Vue DevTools, lo que facilita la inspección y depuración en tiempo real.</li>
        </ul>    
      </div>

      <div class="part01-qr">
        <h6>
          Instalación:
        </h6>
        <p>
          Antes de usar Pinia, debes instalarla con npm:
        </p>
        <div class="code-terminal" style="padding-bottom: 0; margin-top: 20px;">
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

        <div class="code-terminal" style="padding-bottom: 20px; margin-top: 20px;">
          <div class="code-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <pre class="pre-dark" style="margin-top: 0;"><code><span style="color: #DCDCAA;"></span> 
<span class="t-key">import</span> &#123; <span class="t-ident">createApp</span> &#125; <span class="t-key">from</span> <span class="t-string">'vue'</span>
<span class="t-key">import</span> &#123; <span class="t-ident">createPinia</span> &#125; <span class="t-key">from</span> <span class="t-string">'pinia'</span>
<span class="t-key">import</span> <span class="t-ident">App</span> <span class="t-key">from</span> <span class="t-string">'./App.vue'</span>

<span class="t-key">const</span> <span class="t-ident">app</span> = <span class="t-func">createApp</span>(<span class="t-ident">App</span>)

<span class="t-comment">// Se crea una instancia de Pinia y se añade a la aplicación</span>
<span class="t-ident">app</span>.<span class="t-method">use</span>(<span class="t-func">createPinia</span>())

<span class="t-ident">app</span>.<span class="t-method">mount</span>(<span class="t-string">'#app'</span>)
</code></pre>
        </div>
      </div>

    </div>

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
          <pre class="pre-dark" style="margin-top: 0;"><code>
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
          <pre class="pre-dark" style="margin-top: 0;"><code>
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
  color: #d4d4d4;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  margin: 10px 52px 20px 50px;
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
  padding: 16px 24px;
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
display: flex;
}

.blocks-qr p {
  text-align: justify;
}

.blocks-qr ul {
  text-align: justify;
}

.part01-qr {
width: 50%;
}

.part02-qr {
width: 50%;
}

.main-qr {
  display: flex;
}

.first-qr {
  width: 50%;
}

.second-qr {
  width: 50%;
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
