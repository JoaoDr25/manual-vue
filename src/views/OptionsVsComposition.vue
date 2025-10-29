<template>
  <q-page padding class="opcion-qr">
    <h1>Options API vs Composition API</h1>
    <p>
      En Vue 3, ambas APIs pueden coexistir en el mismo proyecto.
    </p>
    <ul>
      <li>Options API es ideal para proyectos pequeños o para quienes vienen de Vue 2, ya que organiza el código por
        opciones (<span>data</span>, <span>methods</span>, <span>computed</span>, etc.).
      </li>
      <li>Composition API es más potente y escalable, ya que organiza el código por funcionalidades y permite reutilizar
        lógica entre componentes mediante composables.</li>
    </ul>
    <p>
      Se puede migrar gradualmente de Options API a Composition API sin reescribir todo el proyecto.
    </p>

    <div class="table-qr">
  <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
    <thead>
      <tr style="background-color: #42b883; color: white;">
        <th style="padding:8px; text-align:center;">Aspecto</th>
        <th style="padding:8px; text-align:center;">Options API</th>
        <th style="padding:8px; text-align:center;">Composition API</th>
      </tr>
    </thead>
    <tbody>
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
    </tbody>
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
          <pre class="pre-dark" style="margin-bottom: 0; margin-top: 0;"><code>
&lt;h3&gt;Options API&lt;/h3&gt;

&lt;template&gt;
  &lt;q-page <span class="t-attr">padding</span>&gt;
    &lt;q-btn <span class="t-attr">@click</span>=<span class="t-string">&quot;incrementar&quot;</span> <span class="t-attr">label</span>=<span class="t-string">&quot;Click&quot;</span> /&gt;
    &lt;p&gt;&#123;&#123; <span class="t-ident">contador</span> &#125;&#125;&lt;/p&gt;
  &lt;/q-page&gt;
&lt;/template&gt;

&lt;script&gt;
<span class="t-key">export default</span> {
  <span class="t-key">data</span>() {
    <span class="t-key">return</span> {
      <span class="t-ident">contador</span>: <span class="t-num">0</span>
    }
  },
  <span class="t-key">methods</span>: {
    <span class="t-fn">incrementar</span>() {
      <span class="t-key">this</span>.<span class="t-ident">contador</span>++
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
          <pre class="pre-dark" style="margin-bottom: 21px; margin-top: 0;"><code>
&lt;h3&gt;Composition API&lt;/h3&gt;

&lt;template&gt;
  &lt;q-page <span class="t-attr">padding</span>&gt;
    &lt;q-btn <span class="t-attr">@click</span>=<span class="t-string">&quot;incrementar&quot;</span> <span class="t-attr">label</span>=<span class="t-string">&quot;Click&quot;</span> /&gt;
    &lt;p&gt;&#123;&#123; <span class="t-ident">contador</span> &#125;&#125;&lt;/p&gt;
  &lt;/q-page&gt;
&lt;/template&gt;

&lt;script <span class="t-attr">setup</span>&gt;
<span class="t-key">import</span> { <span class="t-ident">ref</span> } <span class="t-key">from</span> <span class="t-string">'vue'</span>

<span class="t-comment">// Estado reactivo</span>
<span class="t-key">const</span> <span class="t-ident">contador</span> = <span class="t-fn">ref</span>(<span class="t-num">0</span>)

<span class="t-comment">// Función para modificar el estado</span>
<span class="t-key">const</span> <span class="t-ident">incrementar</span> = <span class="t-key">()</span> =&gt; <span class="t-ident">contador</span>.<span class="t-key">value</span>++
&lt;/script&gt;
</code></pre>
        </div>

        <div class="frase-qr">
            <p>En resumen, Vue ofrece dos estilos de desarrollo complementarios: Options API prioriza la claridad y simplicidad, mientras que Composition API ofrece mayor escalabilidad y control sobre la lógica.</p>
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

.table-qr {
  margin: 20px 60px 30px 50px;
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

.main-qr {
  display: flex;
  height: fit-content;
}

.first-qr {
  width: 50%;
}

.second-qr {
  width: 50%;
}

.frase-qr p {
  font-size: 0.9rem;
  margin: 20px 50px 0 50px;
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
