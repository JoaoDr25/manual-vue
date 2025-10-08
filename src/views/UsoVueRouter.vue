<template>
  <q-page padding class="router-qr">
    <div class="logo-qr">
      <h1>Vue Router</h1><img src="../assets/image-libreria.png" alt="logo de libreria">
    </div>
    <p>
      Vue Router es una biblioteca oficial de Vue.js que proporciona un sistema de enrutamiento para aplicaciones Vue. Permite a los desarrolladores definir rutas y componentes asociados.
      Permite crear aplicaciones de una sola página <span>(SPA)</span> con múltiples vistas.
    </p>
    <ul>
      <li><span>router-link</span>: Crea enlaces de navegación.</li>
      <li><span>router-view</span>: Muestra el contenido de la ruta activa.</li>
      <li>Soporta <span>parámetros dinámicos</span> como <span>/user/:id</span>.</li>
      <li>Permite <span>rutas anidadas</span> y <span>guards</span> para controlar el acceso.</li>
    </ul>
    <h6>
      Configuración básica de enrutamiento:
    </h6>
    <p>
      Para utilizar Vue Router, primero debemos instalarlo. Si estás utilizando Vue CLI, puedes agregar Vue Router durante la creación del proyecto. Si ya tienes un proyecto Vue.js existente, puedes agregar Vue Router con el siguiente comando:
    </p>
    <img src="../assets/vueRouterInstalacion.JPG" alt="Pinia Store" class="imagen">

  </q-page>
</template>

<script setup></script>
<style scoped>
@font-face {
  font-family: 'prototype';
  src: url('../fonts/Prototype.ttf') format('truetype');
}
.logo-qr{
   display: flex;
}
.logo-qr img{
 height: 140px;
 margin: -17px 0px 6px -19px;

}

.router-qr h1 {
  font-family: 'prototype', sans-serif;
  font-size: 4rem;
  padding: 0 0 0 15px;
  margin: 15px 0px -2px 0px;
}

.router-qr h6 {
  font-family: 'prototype', sans-serif;
  margin: 15px 0px -2px 22px;
  font-size: 16px;
}

.router-qr p {
  font-size: 16px;
  margin: -10px 0 0 20px;
  font-family: sans-serif;
}

.router-qr ul {
  font-size: 16px;
}

.router-qr span {
  font-family: 'prototype', sans-serif;
}
</style>