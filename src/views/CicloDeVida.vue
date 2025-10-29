<template>
  <q-page padding class="ciclo-qr">
    <h1>Ciclo de Vida de un Componente</h1>
    <p>
      Cada componente en Vue 3 pasa por una serie de etapas conocidas como ciclo de vida, las cuales permiten ejecutar
      código en momentos específicos del proceso de creación, actualización o destrucción del componente.
    </p>
    <p>Algunos hooks más usados son:</p>
    <ul>
      <li><span>onMounted</span>: Se ejecuta cuando el componente ya está en el DOM.</li>
      <li><span>onUpdated</span>: Se ejecuta cada vez que cambian las propiedades reactivas.</li>
      <li><span>onUnmounted</span>: Se ejecuta justo antes de que el componente sea destruido.</li>
    </ul>
    <p>
      Estos permiten realizar tareas como obtener datos de una API, suscribirse a eventos o limpiar recursos antes de
      que el componente desaparezca.
    </p>

    <div class="main-qr">

      <div class="first-qr">
        <div class="code-terminal">
          <div class="code-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
         <pre class="pre-dark" style="margin-bottom: 0; margin-top: 0;"><code>
&lt;template&gt;
  &lt;q-page <span class="t-attr">padding</span>&gt;
    &lt;h2&gt;onMounted en acción&lt;/h2&gt;
    &lt;p&gt;&#123;&#123; <span class="t-ident">mensaje</span> &#125;&#125;&lt;/p&gt;
  &lt;/q-page&gt;
&lt;/template&gt;

&lt;script <span class="t-attr">setup</span>&gt;
<span class="t-key">import</span> { <span class="t-ident">ref</span>, <span class="t-ident">onMounted</span> } <span class="t-key">from</span> <span class="t-string">'vue'</span>

<span class="t-key">const</span> <span class="t-ident">mensaje</span> = <span class="t-fn">ref</span>(<span class="t-string">'Cargando...'</span>)

<span class="t-fn">onMounted</span>(<span class="t-key">()</span> =&gt; &#123;
  <span class="t-fn">console</span>.<span class="t-fn">log</span>(<span class="t-string">'✅ Componente montado'</span>)
  <span class="t-fn">setTimeout</span>(<span class="t-key">()</span> =&gt; &#123;
    <span class="t-ident">mensaje</span>.<span class="t-key">value</span> = <span class="t-string">'Componente montado 🎉'</span>
  &#125;, <span class="t-num">1000</span>)
&#125;)
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
<pre class="pre-dark" style="margin-bottom: 30px; margin-top: 0;"><code>
<span class="t-comment">// Se ejecuta cada vez que cambia un valor reactivo</span>
<span class="t-fn">onUpdated</span>(<span class="t-key">()</span> =&gt; &#123;
  <span class="t-fn">console</span>.<span class="t-fn">log</span>(<span class="t-string">'🔁 El componente se ha actualizado'</span>)
&#125;)

<span class="t-comment">// Se ejecuta justo antes de destruir el componente</span>
<span class="t-fn">onUnmounted</span>(<span class="t-key">()</span> =&gt; &#123;
  <span class="t-fn">console</span>.<span class="t-fn">log</span>(<span class="t-string">'💀 Componente destruido'</span>)
&#125;)

<span class="t-key">const</span> <span class="t-ident">actualizarMensaje</span> = <span class="t-key">()</span> =&gt; &#123;
  <span class="t-ident">mensaje</span>.<span class="t-key">value</span> = <span class="t-string">'El mensaje fue actualizado 🔄'</span>
&#125;
&lt;/script&gt;
</code></pre>
        </div>

        <div class="frase-qr">
            <p>Estos ciclos de vida permiten controlar el comportamiento del componente en diferentes momentos,
              facilitando tareas como cargar datos, actualizar la vista o limpiar recursos.</p> 
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
  margin: 15px 60px 10px 50px;
}

.ciclo-qr span {
  font-family: 'prototype', sans-serif;
}

.main-qr {
  display: flex;
}

.first-qr {
  width: 50%;
  margin-bottom: 10px;
}

.second-qr {
  width: 50%;
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

.code-header {
  background: #2d2d2d;
  padding: 8px 12px;
  display: flex;
  gap: 6px;
}

.pre-dark {
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

.frase-qr {
  display: flex;
  text-align: justify;
}

.frase-qr p {
  font-size: 0.9rem;
  margin: 10px 56px 0 56px;
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
