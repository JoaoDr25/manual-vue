<template>
  <q-page padding class="router-qr">
    <div class="logo-qr">
      <h1>Vue Router</h1><img src="../assets/image-libreria.png" alt="logo de libreria">
    </div>
    <p>
      Vue Router es una biblioteca oficial de Vue.js que proporciona un sistema de enrutamiento para aplicaciones Vue.
      Permite a los desarrolladores definir rutas y componentes asociados.
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
      Para utilizar Vue Router, primero debemos instalarlo. Si estás utilizando Vue CLI, puedes agregar Vue Router
      durante la creación del proyecto. Si ya tienes un proyecto Vue.js existente, puedes agregar Vue Router con el
      siguiente comando:
    </p>
    <div class="imagen-qr">
      <img src="../assets/vueRouterInstalacion.JPG" alt="Vue Router Instalación" class="imagen">
    </div>
    <br>
    <div class="bloque-qr">
      <div>
        <p>
          Una vez instalado Vue Router, necesitamos configurarlo. Aquí es donde definimos las rutas de nuestra
          aplicación.
          Cada ruta se mapea a un componente Vue.js. Cuando esa ruta es visitada en el navegador, el componente
          correspondiente se renderiza.
        </p>
        <br>
        <p>
          Para configurar el enrutamiento en Vue, primero debes importar <span>createRouter </span> de
          <span>vue-router</span>. Luego,
          puedes definir las rutas de tu aplicación. Cada ruta es un objeto que define un <span>path</span>, un
          <span>name</span> y un <span>component</span>.
        </p>
        <p>
          En este ejemplo, hemos definido dos rutas: una para la página de inicio (/) y otra para la lista de productos
          (/lista-productos). Cada ruta está asociada a un componente Vue, que se renderizará cuando se visite la ruta.
        </p>
      </div>
      <div class="imagenes-qr">
        <img src="../assets/vueRouterConfiguracion.JPG" alt="Vue Router Configuración" class="imagen">
      </div>
    </div>
    <div class="bloque02-qr">
      <div class="parte01-qr">
        <div>
          <h6>
            Enrutamiento dinámico:
          </h6>
          <p>
            El enrutamiento dinámico es una característica poderosa de Vue Router que permite definir rutas con
            parámetros. Esto es útil cuando tienes una ruta que depende de algún tipo de dato, como un ID de producto.
            Aquí tienes un ejemplo de cómo configurar el enrutamiento dinámico:
          </p>
          <div class="imagens-qr">
            <img src="../assets/vueRouterEnrutamiento.JPG" alt="Vue Router Enrutamiento Dinámico" class="imagen">
          </div>
        </div>
        <div>
          <h6>
            Enrutamiento anidado:
          </h6>
          <p>
            El enrutamiento anidado te permite tener rutas dentro de otras rutas. Esto es útil cuando tienes una sección
            de
            tu aplicación que tiene su propia subnavegación. Aquí tienes un ejemplo de cómo configurar el enrutamiento
            anidado:
          </p>
          <div class="imagens-qr">
            <img src="../assets/vueRouterEnrutamiento02.JPG" alt="vue Router Enrutamiento Anidado" class="imagen">
          </div>
        </div>
      </div>
      <div class="parte02-qr">
        <div>
          <h6>
            Redirecciones:
          </h6>
          <p>
            Vue Router también te permite configurar redirecciones. Esto es útil cuando quieres que una ruta específica
            redirija a otra ruta. Aquí tienes un ejemplo de cómo configurar una redirección:
          </p>
          <div class="imagens-qr">
            <img src="../assets/vueRouterRedireccion.JPG" alt="vue Router Redirecciones" class="imagen">
          </div>
        </div>
        <div>
          <h6>
            Navegación programática:
          </h6>
          <p>
            Vue Router proporciona métodos para navegar a diferentes rutas de forma programática. Puedes utilizar el
            método
            push del router para navegar a una ruta específica. Aquí tienes un ejemplo de cómo hacerlo:
          </p>
          <div class="imagens-qr">
            <img src="../assets/vueRouterNavegacion.JPG" alt="vue Router Navegacion Programática" class="imagen">
          </div>
        </div>
      </div>
      <div class="conclusion-qr">
        <h6>
          Conclusión:
        </h6>
        <p>
          Vue Router es una herramienta poderosa y flexible para manejar el enrutamiento en tus aplicaciones Vue. Con
          características como el enrutamiento dinámico, el enrutamiento anidado y las redirecciones, puedes crear
          aplicaciones complejas y fáciles de navegar.
        </p>
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
  margin: 15px 0px -2px 0px;
}

.router-qr h6 {
  font-family: 'prototype', sans-serif;
  margin: 15px 0px -2px 22px;
  font-size: 16px;
  padding-bottom: 10px;
}

.router-qr p {
  font-size: 16px;
  margin: 0 80px 0 20px;
  font-family: sans-serif;
  padding-bottom: 10px;
  text-align: justify;
}

.router-qr ul {
  font-size: 16px;
}

.router-qr span {
  font-family: 'prototype', sans-serif;
}

.imagen-qr {
  margin-bottom: 10px;
}

.imagen-qr img {
  height: 60px;
  filter: drop-shadow(1px 2px 3px black);
  margin-left: 22px;
  transition: transform 0.3s ease;
}

.imagen-qr img:hover {
  transform: scale(1.009);
}

.imagens-qr {
  display: flex;
  justify-items: center;
  flex-direction: column;
}

.imagens-qr img {
  width: 40rem;
  height: 20rem;
  filter: drop-shadow(2px 4px 6px black);
  margin-left: 22px;
  transition: transform 0.3s ease;
}

.imagens-qr img:hover {
  transform: scale(1.009);
}

.imagenes-qr {
  display: flex;
  justify-items: center;
  flex-direction: column;
}

.imagenes-qr img {
  width: 29rem;
  height: 25rem;
  filter: drop-shadow(2px 4px 6px black);
  margin-left: 22px;
  transition: transform 0.3s ease;
  padding-bottom: 10px;
}

.imagenes-qr img:hover {
  transform: scale(1.009);
}

.bloque-qr {
  display: flex;
  justify-items: center;
  margin-right: 15px;
  flex-direction: row-reverse;
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
</style>