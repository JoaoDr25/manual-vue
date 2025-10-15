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
    <!-- <div class="imagenes-qr">
      <img src="../assets/lifeCycle.jpeg" alt="lifeCycle" class="imagen">
    </div> -->

    <div class="main-qr">
      <!-- Primera columna -->
      <div class="first-qr">
        <div class="code-terminal">
          <div class="code-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <pre><code>
&lt;template&gt;
  &lt;q-page padding&gt;
    &lt;h2&gt;onMounted en acción&lt;/h2&gt;
    &lt;p&gt;{{ mensaje }}&lt;/p&gt;
  &lt;/q-page&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, onMounted } from 'vue'

const mensaje = ref('Cargando...')

onMounted(() =&gt; {
  console.log('✅ Componente montado')
  setTimeout(() =&gt; {
    mensaje.value = 'Componente montado 🎉'
  }, 1000)
})
  </code></pre>
        </div>

      </div>

      <!-- Segunda columna -->
      <div class="second-qr">
        <div class="code-terminal">
          <div class="code-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <pre><code>
// Se ejecuta cada vez que cambia un valor reactivo
onUpdated(() =&gt; {
  console.log('🔁 El componente se ha actualizado')
})

// Se ejecuta justo antes de destruir el componente
onUnmounted(() =&gt; {
  console.log('💀 Componente destruido')
})

const actualizarMensaje = () =&gt; {
  mensaje.value = 'El mensaje fue actualizado 🔄'
}
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

.code-terminal {
  background: #1e1e1e;
  color: #e8e8e8;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  font-family: 'Fira Code', monospace;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  margin: 10px 52px 0px 50px;
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

.frase-qr {
  display: flex;
  text-align: center;
}

.frase-qr p {
  font-size: 0.9rem;
  margin: 20px 56px 0 56px;
}
</style>
