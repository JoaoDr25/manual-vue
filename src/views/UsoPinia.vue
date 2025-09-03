<template>
  <q-page padding>
    <h1>Pinia</h1>
    <p>
      Pinia es la librería recomendada para la gestión de estado en Vue 3.
      Reemplaza a Vuex con una API más simple y clara.
    </p>
    <p>
      Cada store en Pinia:
    </p>
    <ul>
      <li>Tiene un <b>state</b> reactivo (variables globales).</li>
      <li>Tiene <b>actions</b> para modificar el estado.</li>
      <li>Puede incluir <b>getters</b> para valores derivados.</li>
    </ul>
    <p>
      Los stores se pueden usar en cualquier componente y también soportan persistencia
      y tipado con TypeScript.
    </p>

  </q-page>
</template>

<script setup></script>
