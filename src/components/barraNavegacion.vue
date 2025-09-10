<template>
    <q-toolbar class="custom-header">
      <q-toolbar-title>
        <img src="../assets/vuee.png" alt="imagen vue">
      </q-toolbar-title>

      <q-btn stretch flat label="Introducción" to="/" />

      <q-btn-dropdown stretch flat label="Instalación">
        <q-list>
          <q-item clickable v-close-popup to="/instalacion/requisitos">
            <q-item-section>
              <q-item-label>Requisitos</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup to="/instalacion/crear-proyecto">
            <q-item-section>
              <q-item-label>Creación de Proyecto</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>


      <q-btn-dropdown stretch flat label="Conceptos Básicos">
        <q-list>
          <q-item clickable v-close-popup to="/conceptos-basicos/interpolacion">
            <q-item-section>
              <q-item-label>Interpolación</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup to="/conceptos-basicos/directivas">
            <q-item-section>
              <q-item-label>Directivas</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup to="/conceptos-basicos/ciclo-de-vida">
            <q-item-section>
              <q-item-label>Ciclo de Vida</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>

      <q-btn-dropdown stretch flat label="Componentes">
        <q-list>
         <q-item clickable v-close-popup to="/componentes/options-vs-composition">
            <q-item-section>
              <q-item-label>Options vs Composition API</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup to="/componentes/props">
            <q-item-section>
              <q-item-label>Props</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>


      <q-btn-dropdown stretch flat label="Uso Avanzado">
        <q-list>
          <q-item clickable v-close-popup to="/uso-avanzado/vue-router">
            <q-item-section>
              <q-item-label>Vue Router</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup to="/uso-avanzado/pinia">
            <q-item-section>
              <q-item-label>Pinia</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>

      <q-btn stretch flat label="Recursos" to="/recursos" />

    </q-toolbar>
</template>

<script setup>
import { QHeader, QToolbar, QToolbarTitle, QAvatar, QBtn, QBtnDropdown, QList, QItem, QItemSection, QItemLabel } from 'quasar'
</script>

<style scoped>
.custom-header {
  background: linear-gradient(90deg, #42b883, #35495e); /* Degradado Vue */
  color: white;
  box-shadow: 0px 3px 10px rgba(0, 73, 37, 138);
  height:67px;
}
.custom-header img{
  border-style: none;
    width: 214px;
    padding-top: 13px;
}
.requeri-pb{
  color: red;
}

</style>
