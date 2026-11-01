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
        <li><b>REACTIVIDAD:</b> Utiliza un sistema de reactividad que actualiza automáticamente la interfaz de
          usuario cuando cambian los datos. Esto permite mantener sincronizados los elementos visuales sin tener que
          manipular el <span>DOM</span>.</li>
        <li><b>VIRTUAL DOM</b>: Gracias a su sistema de <span>DOM</span> virtual, Vue optimiza el rendimiento al
          identificar los cambios en los datos y aplicar únicamente las actualizaciones necesarias en el
          <span>DOM</span> real, lo que resulta en una experiencia más rápida y eficiente.</li>
        <li><b>INTEGRACIÓN FLEXIBLE:</b> Puede integrarse fácilmente en proyectos existentes o combinarse con otras
          bibliotecas o frameworks sin alterar toda la base de código.</li>
        <li><b>CURVA DE APRENDIZAJE SUAVE:</b> Es fácil de
          aprender para quienes ya dominan los fundamentos de <span>HTML</span>, <span>CSS</span> y
          <span>JavaScript</span>. Permite empezar con proyectos
          pequeños y escalar gradualmente hacia aplicaciones más complejas.
        </li>
        <li><b>ARQUITECTURA BASADA EN COMPONENTES:</b> Todo en Vue se organiza en componentes reutilizables que combinan
          <span>HTML</span>, <span>CSS</span> y <span>JavaScript</span>. Esta estructura mejora la mantenibilidad, la
          modularidad y la escalabilidad de los
          proyectos.
        </li>
      </ul>

      <img
        class="intro-image"
        src="../assets/vue estructura de carpetas.png"
        alt="Estructura de carpetas de un proyecto Vue"
      >
    </div>

    <div class="main-title">
      <div>
        <h3>Ventajas de usar Vue:</h3>
      </div>
      <div class="second-container">
        <div class="parteUno">
          <ul>
            <li><b>LIGERO Y RÁPIDO: </b>Vue.js tiene un tamaño reducido y un rendimiento
              excelente gracias a su
              motor
              de reactividad optimizado. Esto permite cargar aplicaciones más rápido y con menor consumo de recursos,
              ideal tanto para sitios pequeños como para aplicaciones complejas.</li>
            <li><b>CURVA DE APRENDIZAJE ACCESIBLE: </b>Su sintaxis es clara y su documentación está muy bien
              estructurada, lo que facilita el aprendizaje
              incluso
              para quienes se inician en frameworks modernos de <span>JavaScript</span>.</li>
            <li><b>INTEGRACIÓN SENCILLA CON OTRAS TECNOLOGÍAS: </b>Puede incorporarse fácilmente en proyectos que ya
              utilizan frameworks backend como <span>Laravel</span>, <span>Django</span> o
              <span>Rails</span>, sin necesidad de reescribir toda la aplicación.
            </li>
            <li><b>EXCELENTE DOCUMENTACIÓN Y COMUNIDAD ACTIVA: </b>Vue cuenta con una de las comunidades más amigables y
              activas del ecosistema frontend. Existen miles de
              tutoriales, foros, cursos y paquetes creados por la comunidad, lo que facilita resolver dudas y encontrar
              soluciones.</li>
          </ul>
        </div>
        <div class="parteDos">
          <ul>
            <li><b>IDEAL PARA CUALQUIER TIPO DE PROYECTO: </b>Vue puede usarse tanto para agregar interactividad a una
              sola sección de una web existente, como para
              desarrollar aplicaciones <span>SPA</span> (Single Page Application) completas. Su escalabilidad lo hace
              útil para
              proyectos personales o empresariales.</li>
            <li><b>ALTA MANTENIBILIDAD Y ESCALABILIDAD: </b>Su arquitectura basada en componentes permite dividir la
              interfaz en partes independientes y
              reutilizables,
              lo que mejora la organización del código y facilita el trabajo en equipo.</li>
            <li><b>COMPATIBILIDAD CON <span>TYPESCRIPT</span> Y HERRAMIENTAS MODERNAS: </b>Vue ofrece soporte oficial
              para
              <span>TypeScript</span>, lo que permite aprovechar la tipificación estática y mejorar
              la
              productividad en equipos grandes.
            </li>
            <li><b>FUERTE ENFOQUE EN LA EXPERIENCIA DEL DESARROLLADOR: </b>Vue proporciona mensajes de error
              claros, herramientas visuales como <span>Vue DevTools</span>, y un entorno de
              desarrollo muy agradable, lo que reduce el tiempo de depuración y aumenta la eficiencia.</li>
          </ul>
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
  font-size: 0.85rem;
}

/* .introduccion-qr span {
  font-family: 'prototype', sans-serif;
} */

.frase-contain p {
  text-align: center;
}

.main-container {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  align-items: center;
  gap: 24px;
  margin: 0 55px 0 30px;
}

.main-container h2 {
  font-size: 25px;
  margin-left: 20px;
}

.main-container li {
  padding-bottom: 5px;
  text-align: justify;
  padding-right: 20px;
  font-size: 0.96rem;
}

.intro-image {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  box-shadow: 2px 4px 6px #0004;
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

@media (max-width: 900px) {
  .main-container {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
    margin: 0 30px;
  }

  .main-container li {
    padding-right: 0;
  }

  .second-container {
    flex-direction: column;
    gap: 0;
    padding: 0 30px;
  }

  .parteUno,
  .parteDos {
    width: 100%;
  }
}

@media (max-width: 700px) {
  .logo-vue img {
    height: 64px;
    margin-top: 18px;
  }

  .introduccion-qr h1 {
    font-size: 2.5rem;
    margin: 18px 0 0 22px;
  }

  .main-title h3 {
    font-size: 1.6rem;
    margin: 40px 22px 0;
  }

  .introduccion-qr p {
    margin: 16px 22px 10px;
  }

  .main-container {
    margin: 0 22px;
  }

  .second-container {
    padding: 0 22px;
  }
}
</style>
