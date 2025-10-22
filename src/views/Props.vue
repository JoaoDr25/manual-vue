<template>
  <q-page padding class="props-qr">
    <h1>Props</h1>
    <p>
      Las props son la principal forma de comunicación entre un componente padre y un componente hijo.
      Permiten pasar datos desde el padre al hijo, haciendo que los componentes sean más reutilizables y configurables.
      En Vue 3, las props se definen directamente dentro del bloque <span>&lt;script setup&gt;</span> usando
      <span>defineProps()</span>.
      Además, se pueden validar sus tipos, asignar valores por defecto y hacerlas obligatorias.
    </p>
    <p>
      Las props son unidireccionales, es decir, los datos fluyen del padre al hijo, no al revés.
      Si se necesita enviar información en sentido contrario, se hace con eventos personalizados <span>(emits)</span>.
    </p>

    <div class="blocks-qr">

      <div class="first-qr">
        <p><span>COMPONENTE HIJO:</span> BotonPersonalizado.vue</p>

        <div class="code-terminal">
          <div class="code-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <pre class="pre-dark"><code>
&lt;template&gt;
  &lt;q-btn <span class="t-attr">:label</span>=<span class="t-string">"label"</span> <span class="t-attr">:color</span>=<span class="t-string">"color"</span> /&gt;
&lt;/template&gt;

&lt;script <span class="t-attr">setup</span>&gt;
<span class="t-comment">// Definimos las props que recibe el componente</span>
<span class="t-key">const</span> props = <span class="t-fn">defineProps</span>({
  <span class="t-attr">label</span>: {
    <span class="t-attr">type</span>: <span class="t-fn">String</span>,
    <span class="t-attr">required</span>: <span class="t-key">true</span>,
    <span class="t-attr">default</span>: <span class="t-string">'Botón por defecto'</span>
  },
  <span class="t-attr">color</span>: {
    <span class="t-attr">type</span>: <span class="t-fn">String</span>,
    <span class="t-attr">default</span>: <span class="t-string">'secondary'</span>
  }
})
&lt;/script&gt;
</code></pre>

        </div>
      </div>

      <div class="second-qr">
        <p><span>COMPONENTE PADRE:</span> PropsDemo.vue</p>

        <div class="code-terminal">
          <div class="code-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <pre class="pre-dark"><code>
&lt;template&gt;
  &lt;q-page <span class="t-attr">padding</span>&gt;
    &lt;h2&gt;Ejemplo de Props&lt;/h2&gt;
    <span class="t-comment">&lt;!-- Se pasa la prop "label" al componente hijo --&gt;</span>
    &lt;BotonPersonalizado 
      <span class="t-attr">label</span>=<span class="t-string">"Haz clic aquí 🚀"</span> 
      <span class="t-attr">color</span>=<span class="t-string">"primary"</span> 
    /&gt;
  &lt;/q-page&gt;
&lt;/template&gt;

&lt;script <span class="t-attr">setup</span>&gt;
<span class="t-key">import</span> BotonPersonalizado <span class="t-key">from</span> <span class="t-string">'./BotonPersonalizado.vue'</span>
&lt;/script&gt;
</code></pre>
        </div>
        <div class="frase-qr" style="margin-top: 25px;">
          <p style=" font-size: 0.9rem;">En resumen, las props permiten crear componentes altamente reutilizables y
            personalizables,
            asegurando una comunicación clara entre componentes y manteniendo la unidireccionalidad de datos.
            </p>
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
