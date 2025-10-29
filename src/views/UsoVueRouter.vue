<template>
  <q-page padding class="router-qr">
    <div class="logo-qr">
      <h1>Vue Router</h1><img src="../assets/image-libreria.png" alt="logo de libreria">
    </div>
    <p>
      Vue Router es la biblioteca oficial de enrutamiento de Vue.js, diseñada para gestionar la navegación dentro de
      aplicaciones creadas con este framework.
      Su función principal es asociar diferentes rutas (URLs) con componentes específicos, permitiendo así que el
      usuario pueda desplazarse entre distintas vistas sin recargar la página completa.
    </p>
    <ul>
      <li><span>router-link</span>: Crea enlaces de navegación.</li>
      <li><span>router-view</span>: Muestra el contenido de la ruta activa.</li>
      <li>Soporta parámetros dinámicos como <span>/user/:id</span>.</li>
      <li>Permite rutas anidadas y guards para controlar el acceso.</li>
    </ul>
    <h6 style="margin-bottom: 0; padding-bottom: 0;">
      Configuración básica de enrutamiento:
    </h6>

    <br>
    <div class="bloque-qr" style="width: 100%;">

      <div style="width: 50%;">

        <p style="margin-top: 0;">
          Para utilizar Vue Router, primero debemos instalarlo. Si estás utilizando Vue CLI, puedes agregar Vue Router
          durante la creación del proyecto. Si ya tienes un proyecto Vue.js existente, puedes agregar Vue Router con el
          siguiente comando:
        </p>

        <div class="code-terminal" style="padding-bottom: 0; margin-bottom: 40px; margin-top: 20px;">
          <div class="code-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <pre style="margin: 14px 20px;"><code><span style="color: #DCDCAA;">npm</span> install vue-router</code></pre>
        </div>

        <p>
          Una vez instalado Vue Router, necesitamos configurarlo. Aquí es donde definimos las rutas de nuestra
          aplicación.
          Cada ruta se mapea a un componente Vue.js. Cuando esa ruta es visitada en el navegador, el componente
          correspondiente se renderiza.
        </p>
        <p>
          Para realizar esta configuración, primero se debe importar la función <span>createRouter</span> desde el
          paquete
          <span>vue-router</span>, junto con <span>createWebHistory</span> si deseamos habilitar un historial de
          navegación más tradicional basado
          en URLs limpias. Luego, definimos un arreglo de rutas, donde cada una se representa como un objeto que
          especifica un <span>path</span>, un <span>name</span> y el <span>component</span> que se mostrará.
        </p>
        <p>
          En el ejemplo, hemos definido dos rutas principales: una para la página de inicio (<span>/</span>) y otra para
          la sección
          de lista de productos (<span>/lista-productos</span>). Cada ruta está vinculada a un componente Vue distinto,
          el cual se
          renderizará dinámicamente cada vez que el usuario visite la ruta correspondiente, permitiendo una navegación
          fluida y sin recargas completas de la página.
        </p>
      </div>

      <div class="code-terminal" style="margin-top: 0; margin-left: 30px; width: 40.8%;">
        <div class="code-header">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
        </div>
        <pre class="pre-dark" style="margin-bottom: 6px; margin-top: 0;"><code>
&lt;script <span class="t-key">setup</span>&gt;
<span class="t-key">import</span> &#123; <span class="t-ident">createRouter</span>, <span class="t-ident">createWebHistory</span> &#125; <span class="t-key">from</span> <span class="t-string">'vue-router'</span>
<span class="t-key">import</span> <span class="t-ident">VistaInicio</span> <span class="t-key">from</span> <span class="t-string">'./views/VistaInicio.vue'</span>
<span class="t-key">import</span> <span class="t-ident">VistaListaProductos</span> <span class="t-key">from</span> <span class="t-string">'./views/VistaListaProductos.vue'</span>

<span class="t-comment">// Creación del router</span>
<span class="t-key">const</span> <span class="t-ident">router</span> = <span class="t-ident">createRouter</span>(&#123;
  <span class="t-prop">history</span>: <span class="t-ident">createWebHistory</span>(),
  <span class="t-prop">routes</span>: [
    &#123;
      <span class="t-prop">path</span>: <span class="t-string">'/'</span>,
      <span class="t-prop">name</span>: <span class="t-string">'inicio'</span>,
      <span class="t-prop">component</span>: <span class="t-ident">VistaInicio</span>
    &#125;,
    &#123;
      <span class="t-prop">path</span>: <span class="t-string">'/lista-productos'</span>,
      <span class="t-prop">name</span>: <span class="t-string">'lista-productos'</span>,
      <span class="t-prop">component</span>: <span class="t-ident">VistaListaProductos</span>
    &#125;
  ]
&#125;)
&lt;/script&gt;
</code></pre>
      </div>

    </div>

    <div class="bloque02-qr">
      <div class="parte01-qr">
        <div class="subparte01-qr">
          <h6>
            Enrutamiento dinámico:
          </h6>
          <p>
            Es una característica de Vue Router que permite definir rutas con
            parámetros. Esto es útil cuando se tiene una ruta que depende de algún tipo de dato.
            Aquí hay un ejemplo de cómo configurar el enrutamiento dinámico:
          </p>

          <div class="code-terminal">
            <div class="code-header">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <pre class="pre-dark" style="margin-bottom: 94px; margin-top: 0;"><code>
&lt;script <span class="t-key">setup</span>&gt;
<span class="t-key">import</span> &#123; <span class="t-ident">createRouter</span>, <span class="t-ident">createWebHistory</span> &#125; <span class="t-key">from</span> <span class="t-string">'vue-router'</span>
<span class="t-key">import</span> <span class="t-ident">VistaProducto</span> <span class="t-key">from</span> <span class="t-string">'./views/VistaProducto.vue'</span>

<span class="t-comment">// Creación del router con ruta dinámica</span>
<span class="t-key">const</span> <span class="t-ident">router</span> = <span class="t-ident">createRouter</span>(&#123;
  <span class="t-prop">history</span>: <span class="t-ident">createWebHistory</span>(),
  <span class="t-prop">routes</span>: [
    &#123;
      <span class="t-prop">path</span>: <span class="t-string">'/producto/:id'</span>,
      <span class="t-prop">name</span>: <span class="t-string">'producto'</span>,
      <span class="t-prop">component</span>: <span class="t-ident">VistaProducto</span>
    &#125;
  ]
&#125;)
&lt;/script&gt;
</code></pre>
          </div>

        </div>
        <div class="subparte02-qr">
          <h6>
            Redirecciones:
          </h6>
          <p>
            Vue Router también te permite configurar redirecciones. Esto es útil cuando se quiere que una ruta
            específica
            redirija a otra ruta. Aquí hay un ejemplo de cómo configurar una redirección:
          </p>

          <div class="code-terminal">
            <div class="code-header">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <pre class="pre-dark" style="margin-bottom: 10px; margin-top: 0;"><code>
&lt;script <span class="t-key">setup</span>&gt;
<span class="t-key">import</span> &#123; <span class="t-ident">createRouter</span> &#125; <span class="t-key">from</span> <span class="t-string">'vue-router'</span>
<span class="t-key">import</span> <span class="t-ident">VistaListaProductos</span> <span class="t-key">from</span> <span class="t-string">'./views/VistaListaProductos.vue'</span>

<span class="t-comment">// Ejemplo de redirección de ruta con función flecha</span>
<span class="t-key">const</span> <span class="t-ident">router</span> = <span class="t-ident">createRouter</span>(&#123;
  <span class="t-prop">routes</span>: [
    &#123;
      <span class="t-prop">path</span>: <span class="t-string">'/'</span>,
      <span class="t-prop">name</span>: <span class="t-string">'inicio'</span>,
      <span class="t-prop">redirect</span>: <span class="t-func">to</span> =&gt; (&#123; <span class="t-prop">path</span>: <span class="t-string">'/lista-productos'</span> &#125;)
    &#125;,
    &#123;
      <span class="t-prop">path</span>: <span class="t-string">'/lista-productos'</span>,
      <span class="t-prop">name</span>: <span class="t-string">'lista-productos'</span>,
      <span class="t-prop">component</span>: <span class="t-ident">VistaListaProductos</span>
    &#125;
  ]
&#125;)
&lt;/script&gt;
</code></pre>
          </div>
        </div>
      </div>


      <div class="parte02-qr">
        <div class="subparte01-qr">
          <h6>
            Enrutamiento anidado:
          </h6>
          <p>
            Permite tener rutas dentro de otras rutas. Esto es útil cuando se tiene una sección
            de
            la aplicación que tiene su propia subnavegación. Aquí hay un ejemplo de cómo configurar el enrutamiento
            anidado:
          </p>

          <div class="code-terminal">
            <div class="code-header">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <pre class="pre-dark" style="margin-bottom: 10px; margin-top: 0;"><code>
&lt;script <span class="t-key">setup</span>&gt;
<span class="t-key">import</span> &#123; <span class="t-ident">createRouter</span> &#125; <span class="t-key">from</span> <span class="t-string">'vue-router'</span>
<span class="t-key">import</span> <span class="t-ident">VistaProducto</span> <span class="t-key">from</span> <span class="t-string">'./views/VistaProducto.vue'</span>
<span class="t-key">import</span> <span class="t-ident">ReseñasProducto</span> <span class="t-key">from</span> <span class="t-string">'./views/ReseñasProducto.vue'</span>
<span class="t-key">import</span> <span class="t-ident">VariacionesProducto</span> <span class="t-key">from</span> <span class="t-string">'./views/VariacionesProducto.vue'</span>

<span class="t-comment">// Router con enrutamiento anidado (nested routes)</span>
<span class="t-key">const</span> <span class="t-ident">router</span> = <span class="t-ident">createRouter</span>(&#123;
  <span class="t-prop">routes</span>: [
    &#123;
      <span class="t-prop">path</span>: <span class="t-string">'/producto/:id'</span>,
      <span class="t-prop">name</span>: <span class="t-string">'producto'</span>,
      <span class="t-prop">component</span>: <span class="t-ident">VistaProducto</span>,
      <span class="t-prop">children</span>: [
        &#123;
          <span class="t-prop">path</span>: <span class="t-string">'reseñas'</span>,
          <span class="t-prop">component</span>: <span class="t-ident">ReseñasProducto</span>
        &#125;,
        &#123;
          <span class="t-prop">path</span>: <span class="t-string">'variaciones'</span>,
          <span class="t-prop">component</span>: <span class="t-ident">VariacionesProducto</span>
        &#125;
      ]
    &#125;
  ]
&#125;)
&lt;/script&gt;
</code></pre>
          </div>
        </div>

        <div class="subparte02-qr">
          <h6>
            Navegación programática:
          </h6>
          <p>
            Vue Router proporciona métodos para navegar a diferentes rutas de forma programática. Se puede utilizar el
            método
            push del router para navegar a una ruta específica. Aquí hay un ejemplo de cómo hacerlo:
          </p>

          <div class="code-terminal">
            <div class="code-header">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <pre class="pre-dark" style="margin-bottom: 100px; margin-top: 0;"><code>
&lt;script <span class="t-key">setup</span>&gt;
<span class="t-comment">// Importamos el router desde Vue Router</span>
<span class="t-key">import</span> &#123; <span class="t-ident">useRouter</span> &#125; <span class="t-key">from</span> <span class="t-string">'vue-router'</span>

<span class="t-comment">// Obtenemos la instancia del router</span>
<span class="t-key">const</span> <span class="t-ident">router</span> = <span class="t-func">useRouter</span>()

<span class="t-comment">// Función de navegación programática</span>
<span class="t-key">const</span> <span class="t-ident">irAListaProductos</span> = () =&gt; &#123;
  <span class="t-ident">router</span>.<span class="t-func">push</span>(<span class="t-string">'/lista-productos'</span>)
&#125;
&lt;/script&gt;
</code></pre>
          </div>

          <div class="conclusion-qr">
            <!-- <h6>
              Conclusión:
            </h6> -->
            <p>
              Vue Router es una herramienta poderosa y flexible para manejar el enrutamiento en las aplicaciones Vue.
              Gracias a su integración nativa con el ecosistema de Vue, permite una navegación fluida y estructurada
              dentro
              de aplicaciones de una sola página. Con características como el enrutamiento dinámico, el enrutamiento
              anidado
              y las redirecciones, los desarrolladores pueden crear interfaces más organizadas, escalables y fáciles de
              mantener. En conjunto, Vue Router mejora significativamente la experiencia del usuario al permitir
              transiciones rápidas entre vistas sin recargar la página.
            </p>
          </div>
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

.logo-qr {
  display: flex;
}

.logo-qr img {
  height: 140px;
  margin: -17px 0px 6px -19px;

}

.router-qr h1 {
  font-family: 'prototype', sans-serif;
  font-size: 4rem;
  padding: 0 0 0 15px;
  margin: 10px 15px 10px 32px;
}

.router-qr h6 {
  font-family: 'prototype', sans-serif;
  margin: 20px 60px 10px 50px;
  font-size: 18px;
  padding-bottom: 10px;
}

.router-qr p {
  font-size: 0.96rem;
  margin: 10px 60px 0px 50px;
  font-family: sans-serif;
  padding-bottom: 10px;
  text-align: justify;
}

.router-qr ul {
  font-size: 0.96rem;
  margin: 10px 60px 10px 50px;
}

.router-qr span {
  font-family: 'prototype', sans-serif;
}

.bloque-qr {
  display: flex;
}

.bloque-qr img {
  margin-right: 15px;
}

.bloque02-qr {
  margin-right: 40px;
}

.parte01-qr {
  display: flex;
}

.parte01-qr h6 {
  text-align: center;
  margin: 10px 0 10px 0;
  font-family: 'prototype', sans-serif;
  font-size: 18px;
}

.parte02-qr {
  display: flex;
}

.parte02-qr h6 {
  text-align: center;
  margin: 10px 0 10px 0;
  font-family: 'prototype', sans-serif;
  font-size: 18px;
}

.subparte01-qr {
  width: 50%;
}

.subparte02-qr {
  width: 50%;
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

.conclusion-qr {
  margin-top: 30px;
}

.conclusion-qr h6 {
  margin-bottom: 0;
  padding-bottom: 0;
  font-size: 18px;
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