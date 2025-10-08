<template>
  <q-page class="introduccion-qr">
    <div class="logo-vue">
      <h1>Introducción </h1> <img src="../assets/logo vue.png" alt="logo vue">

    </div>
    <p>
      Vue.js es un framework progresivo de JavaScript para construir interfaces de usuario.
      Su principal ventaja es que puedes adoptarlo de forma incremental: puedes usarlo solo para
      una parte de tu aplicación, o bien construir proyectos grandes y complejos con él.

      Vue destaca por su simplicidad, su curva de aprendizaje accesible y su potente ecosistema,
      que incluye librerías como:
    </p>
    
    <div class="main-container">
      <ul>
      <li><b>Vue Router</b> (navegación)</li>
      <li><b>Pinia</b> (gestión de estado)
        y frameworks UI como <b>Quasar.</b></li>
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
  padding: 0 0 0 15px;
  margin: 15px 0px -2px 0px;
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
}

.video-container {
  width: 40rem;
  filter: drop-shadow(2px 4px 6px black);
  margin-left: 22px;
}

</style>
