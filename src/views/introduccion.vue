<template>
  <q-page class="introduccion-qr">
    <div class="logo-vue">
      <h1>Introducción </h1> <img src="../assets/logo vue.png" alt="logo vue">

    </div>
    <p>
     Vue.js es un framework progresivo de JavaScript diseñado para construir interfaces de usuario interactivas y aplicaciones web de manera sencilla, rápida y escalable.
Su principal objetivo es facilitar el desarrollo frontend mediante un enfoque reactivo, modular y componentizado.

A diferencia de otros frameworks más complejos, Vue se adapta progresivamente:
puedes usarlo para una sola parte de tu sitio web o para desarrollar aplicaciones web completas tipo SPA (Single Page Application).
    </p>

     <div class="main-title">
        <h3> Características</h3>
      </div>
    <div class="main-container">
      <ul>
        <li><b>Reactividad</b>: Vue.js utiliza un sistema de reactividad que actualiza automáticamente la interfaz de usuario cuando cambian los datos.</li>
    <li><b>Arquitectura basada en componentes</b>: Todo en Vue se organiza en componentes reutilizables, lo que mejora la mantenibilidad y escalabilidad de los proyectos.</li>
    <li><b>Curva de aprendizaje suave</b>: Está diseñado para ser fácil de aprender si ya conoces HTML, CSS y JavaScript.</li>
    <li><b>Integración flexible</b>: Puede integrarse con otros proyectos o librerías existentes sin necesidad de modificar toda la estructura del código.</li>
  <li><b>Virtual DOM</b>: Vue utiliza un DOM virtual que optimiza el rendimiento y minimiza las operaciones costosas sobre el DOM real.</li>
  <li><b>Soporte para herramientas modernas</b>: Funciona con tecnologías como Vite, Vue CLI, Pinia (gestor de estado) y Vue Router (enrutamiento).</li>
Funciona con tecnologías como Vite, Vue CLI, Pinia (gestor de estado) y Vue Router (enrutamiento).

</ul>
      <div class="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/nhBVL41-_Cw?si=G_GXlvlRFq2bFRRx"
          title="Vue.js Explained in 100 Seconds" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
      </div>
    </div>

  </q-page>
</template>

<script setup>
</script>

<style scoped>
@font-face {
  font-family: 'prototype';
  src: url('../fonts/Prototype.ttf') format('truetype');
}
.logo-vue{
   display: flex;
}
.logo-vue img{
   height: 85px;
 margin: 24px 0 0 10px;

}

.introduccion-qr h1 {
  font-family: 'prototype', sans-serif;
  font-size: 4rem;
 margin: 15px 0px -2px 15px;
}
.main-title h3 {
  font-family: 'prototype', sans-serif;
  font-size: 30PX;
   margin: 15px 0px -2px 15px;
  
 
}

.introduccion-qr p {
  font-size: 16px;
  margin: 20px 80px 10px 20px;
  font-family: sans-serif;
  font-weight: 300;
  text-align: justify;
}

.introduccion-qr ul {
  font-family: sans-serif;
  font-size: 16px;
}

.main-container {
  display: flex;
  justify-content: space-between;
  margin-right: 85px;
}
.main-container h2 {
  font-size: 25px;
  margin-left: 20px;


}
.video-container {
  width: 40rem;
  filter: drop-shadow(2px 4px 6px black);
  margin-left: 22px;
}
</style>