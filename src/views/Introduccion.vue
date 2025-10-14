<template>
  <q-page class="introduccion-qr">
    <div class="logo-vue">
      <h1>Introducción </h1> <img src="../assets/logo vue.png" alt="logo vue">

    </div>
    <p>
      <span>Vue.js</span> es un framework progresivo de <span>JavaScript</span> diseñado para construir interfaces de
      usuario
      interactivas y
      aplicaciones web de manera sencilla, rápida y escalable.
      Su principal objetivo es facilitar el desarrollo frontend mediante un enfoque reactivo, modular y componentizado.

      A diferencia de otros frameworks más complejos, <span>Vue</span> se adapta progresivamente:
      puedes usarlo para una sola parte de tu sitio web o para desarrollar aplicaciones web completas tipo
      <span>SPA</span> (Single
      Page Application).
    </p>
    <div class="frase-contain">
      <p><i>“Vue.js surge como una alternativa ligera y flexible frente a frameworks como React o Angular, permitiendo a
          los desarrolladores construir aplicaciones modernas sin una curva de aprendizaje pronunciada.”</i></p>
    </div>
    <div class="main-title">
      <h3> Características:</h3>
    </div>
    <div class="main-container">
      <ul>
        <li><b>Reactividad:</b> Utiliza un sistema de reactividad que actualiza automáticamente la interfaz de
          usuario cuando cambian los datos. Esto permite mantener sincronizados los elementos visuales sin tener que
          manipular el <span>DOM</span>.</li>
        <li><b>Arquitectura basada en componentes:</b> Todo en Vue se organiza en componentes reutilizables que combinan
          <span>HTML</span>, <span>CSS</span> y <span>JavaScript</span>. Esta estructura mejora la mantenibilidad, la modularidad y la escalabilidad de los
          proyectos.</li>
        <li><b>Curva de aprendizaje suave:</b> Es fácil de
          aprender para quienes ya dominan los fundamentos de <span>HTML</span>, <span>CSS</span>  y <span>JavaScript</span>. Permite empezar con proyectos
          pequeños y escalar gradualmente hacia aplicaciones más complejas.
        </li>
        <li><b>Integración flexible:</b> Puede integrarse fácilmente en proyectos existentes o combinarse con otras
          bibliotecas o frameworks sin alterar toda la base de código.</li>
        <li><b>Virtual DOM</b>: Gracias a su sistema de <span>DOM</span> virtual, Vue optimiza el rendimiento al identificar los cambios en los datos y aplicar únicamente las actualizaciones necesarias en el <span>DOM</span> real, lo que resulta en una experiencia más rápida y eficiente.</li>
      </ul>
      <div class="video-container">
        <iframe width="560" height="335" src="https://www.youtube.com/embed/9AHMihFhrzw?si=5bv2sxBDsDTj-P3l"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>

    <div class="main-title">
      <div>
        <h3>Ventajas de usar Vue:</h3>
      </div>
      <div class="second-container">
        <div class="parteUno">
          <ul>
            <li><b>Ligero y rápido: </b>Vue.js tiene un tamaño reducido y un rendimiento
              excelente gracias a su
              motor
              de reactividad optimizado. Esto permite cargar aplicaciones más rápido y con menor consumo de recursos,
              ideal tanto para sitios pequeños como para aplicaciones complejas.</li>
            <li><b>Curva de aprendizaje accesible: </b>Su sintaxis es clara y su documentación está muy bien
              estructurada, lo que facilita el aprendizaje
              incluso
              para quienes se inician en frameworks modernos de <span>JavaScript</span>.</li>
            <li><b>Excelente documentación y comunidad activa: </b>Vue cuenta con una de las comunidades más amigables y
              activas del ecosistema frontend. Existen miles de
              tutoriales, foros, cursos y paquetes creados por la comunidad, lo que facilita resolver dudas y encontrar
              soluciones.</li>

            <li><b>Integración sencilla con otras tecnologías: </b>Puede incorporarse fácilmente en proyectos que ya
              utilizan frameworks backend como <span>Laravel</span>, <span>Django</span> o
              <span>Rails</span>, sin necesidad de reescribir toda la aplicación.
            </li>
          </ul>
        </div>
        <div class="parteDos">
          <ul>
            <li><b>Ideal para cualquier tipo de proyecto: </b>Vue puede usarse tanto para agregar interactividad a una
              sola sección de una web existente, como para
              desarrollar aplicaciones <span>SPA</span> (Single Page Application) completas. Su escalabilidad lo hace
              útil para
              proyectos personales o empresariales.</li>
            <li><b>Alta mantenibilidad y escalabilidad: </b>Su arquitectura basada en componentes permite dividir la
              interfaz en partes independientes y
              reutilizables,
              lo que mejora la organización del código y facilita el trabajo en equipo.</li>
            <li><b>Compatibilidad con <span>TypeScript</span> y herramientas modernas: </b>Vue ofrece soporte oficial
              para
              <span>TypeScript</span>, lo que permite aprovechar la tipificación estática y mejorar
              la
              productividad en equipos grandes.
            </li>
            <li><b>Fuerte enfoque en la experiencia del desarrollador (DX): </b>Vue proporciona mensajes de error
              claros, herramientas visuales como <span>Vue DevTools</span>, y un entorno de
              desarrollo muy agradable, lo que reduce el tiempo de depuración y aumenta la eficiencia.</li>
          </ul>
        </div>
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

.logo-vue {
  display: flex;
}

.logo-vue img {
  height: 85px;
  margin: 24px 0 0 10px;

}

.introduccion-qr h1 {
  font-family: 'prototype', sans-serif;
  font-size: 4rem;
  margin: 15px 0px -2px 50px;
}

.main-title h3 {
  font-family: 'prototype', sans-serif;
  font-size: 30PX;
  margin: 15px 0px -2px 50px;
}

.introduccion-qr p {
  font-size: 0.96rem;
  margin: 20px 60px 10px 50px;
  font-family: sans-serif;
  font-weight: 300;
  text-align: justify;
}

.introduccion-qr ul {
  font-family: sans-serif;
  font-size: 16px;
}

.introduccion-qr b {
  font-family: 'prototype', sans-serif;
}

/* .introduccion-qr span {
  font-family: 'prototype', sans-serif;
} */

.frase-contain p {
  text-align: center;
}

.main-container {
  display: flex;
  justify-content: space-between;
  margin-right: 55px;
  padding-left: 30px;
}

.main-container h2 {
  font-size: 25px;
  margin-left: 20px;
}

.main-container li {
  padding-bottom: 5px;
  text-align: justify;
  padding-right: 64px;
  font-size: 0.96rem;
}

.video-container {
  width: 40rem;
  filter: drop-shadow(2px 4px 6px black);
  margin-left: 22px;
  margin-top: 20px;
}

.second-container {
  display: flex;
  justify-content: space-around;
  padding-right: 55px;
  padding-left: 30px;
  gap: 30px;
  width: 100%;
}

.second-container li {
  text-align: justify;
  padding-bottom: 10px;
  font-size: 0.96rem;
}

.parteUno,
.parteDos {
  width: 50%;
}
</style>
