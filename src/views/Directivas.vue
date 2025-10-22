<template>
  <q-page class="directivas-qr">

    <h1>Directivas en Vue</h1>

    <p>
      Son atributos especiales que se añaden a los elementos en el template. Sirven para manipular el
      DOM
      de forma declarativa y reactiva, según los datos del componente.
      Algunas de las más usadas son:
    </p>
    <ul>
      <li><span>v-bind</span>: Enlaza dinámicamente atributos (por ejemplo, imágenes, clases o estilos).</li>
      <li><span>v-if</span>: Renderiza condicionalmente un elemento.</li>
      <li><span>v-for</span>: Repite elementos según los datos de un array o un objeto.</li>
      <li><span>v-model</span>: Enlaza datos bidireccionalmente con inputs.</li>
      <li><span>v-on</span>: Escucha eventos del DOM (por ejemplo, clics o teclas).</li>
    </ul>
    <p>
      Vue también permite crear <span>directivas personalizadas</span>, aunque la mayoría de casos
      se resuelven con las directivas integradas.
    </p>

    <p>Ejemplo práctico con varias directivas:</p>

    <div class="main-qr">

      <div class="first-qr">
        <div class="code-terminal">
          <div class="code-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <pre class="pre-dark"><code>
&lt;template&gt;
  &lt;q-page <span class="t-attr">padding</span>&gt;
  &lt;h2&gt;Directivas en acción&lt;/h2&gt;

    <span class="t-comment">&lt;!-- v-model: enlace bidireccional --&gt;</span>
    &lt;q-input <span class="t-attr">v-model</span>=<span class="t-string">&quot;nuevoItem&quot;</span> <span class="t-attr">label</span>=<span class="t-string">&quot;Agregar tecnología&quot;</span> /&gt;

    <span class="t-comment">&lt;!-- v-on: click --&gt;</span>
    &lt;q-btn <span class="t-attr">color</span>=<span class="t-string">&quot;primary&quot;</span> <span class="t-attr">label</span>=<span class="t-string">&quot;Agregar&quot;</span> <span class="t-attr">@click</span>=<span class="t-string">&quot;agregarItem&quot;</span> /&gt;

    <span class="t-comment">&lt;!-- v-if: condicional --&gt;</span>
    &lt;p <span class="t-attr">v-if</span>=<span class="t-string">&quot;lista.length === 0&quot;</span>&gt;No hay elementos en la lista&lt;/p&gt;

    <span class="t-comment">&lt;!-- v-for: renderizado dinámico --&gt;</span>
    &lt;ul <span class="t-attr">v-else</span>&gt;
      &lt;li <span class="t-attr">v-for</span>=<span class="t-string">&quot;(item, i) in lista&quot;</span> <span class="t-attr">:key</span>=<span class="t-string">&quot;i&quot;</span>&gt;
        &#123;&#123; <span class="t-ident">i</span> + <span class="t-num">1</span> &#125;&#125;. &#123;&#123; <span class="t-ident">item</span> &#125;&#125;
      &lt;/li&gt;
    &lt;/ul&gt;
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
          <pre class="pre-dark" style="margin-bottom: 0; padding-bottom: 10px;"><code>
     <span class="t-comment">&lt;!-- v-bind: enlace dinámico --&gt;</span>
    &lt;img <span class="t-attr">:src</span>=<span class="t-string">&quot;imagen&quot;</span> <span class="t-attr">alt</span>=<span class="t-string">&quot;Logo de Vue&quot;</span> <span class="t-attr">width</span>=<span class="t-string">&quot;100&quot;</span> /&gt;
  &lt;/q-page&gt;
&lt;/template&gt;

&lt;script <span class="t-attr">setup</span>&gt;
<span class="t-key">import</span> { <span class="t-ident">ref</span> } <span class="t-key">from</span> <span class="t-string">'vue'</span>

<span class="t-key">const</span> <span class="t-ident">lista</span> = <span class="t-fn">ref</span>([<span class="t-string">'Vue'</span>, <span class="t-string">'React'</span>, <span class="t-string">'Angular'</span>])
<span class="t-key">const</span> <span class="t-ident">nuevoItem</span> = <span class="t-fn">ref</span>('')
<span class="t-key">const</span> <span class="t-ident">imagen</span> = <span class="t-fn">ref</span>(<span class="t-string">'https://vuejs.org/images/logo.png'</span>)

<span class="t-key">const</span> <span class="t-fn">agregarItem</span> = () =&gt; {
  <span class="t-key">if</span> (<span class="t-ident">nuevoItem</span>.<span class="t-prop">value</span>.<span class="t-fn">trim</span>() !== <span class="t-string">''</span>) {
    <span class="t-ident">lista</span>.<span class="t-prop">value</span>.<span class="t-fn">push</span>(<span class="t-ident">nuevoItem</span>.<span class="t-prop">value</span>)
    <span class="t-ident">nuevoItem</span>.<span class="t-prop">value</span> = <span class="t-string">''</span>
  }
}
&lt;/script&gt;
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

.directivas-qr h1 {
  font-family: 'prototype', sans-serif;
  font-size: 4rem;
  padding: 0 0 0 15px;
  margin: 20px 60px 10px 32px;
}

.directivas-qr p {
  font-size: 0.96rem;
  margin: 20px 60px 10px 50px;
  font-family: sans-serif;
}

.directivas-qr ul {
  font-size: 0.96rem;
  margin: 20px 60px 10px 50px;
}

.directivas-qr span {
  font-family: 'prototype', sans-serif;
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

.code-terminal {
  background: #1e1e1e;
  color: #e8e8e8;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  font-family: 'Fira Code', monospace;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  margin: 10px 60px 30px 50px;
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
