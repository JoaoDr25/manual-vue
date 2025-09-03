<template>
  <q-page padding>
    <h1>Ciclo de Vida de un Componente</h1>
    <p>
      Cada componente de Vue pasa por una serie de etapas, conocidas como ciclo de vida.
      Algunas funciones importantes son:
    </p>
    <ul>
      <li><b>onMounted</b>: se ejecuta cuando el componente ya está en el DOM.</li>
      <li><b>onUpdated</b>: se ejecuta cuando cambian las propiedades o estado del componente.</li>
      <li><b>onUnmounted</b>: se ejecuta justo antes de que el componente sea destruido.</li>
    </ul>
    <p>
      Estos hooks permiten ejecutar lógica en momentos específicos, como obtener datos de una API
      o limpiar recursos.
    </p>

  </q-page>
</template>

<script setup></script>
