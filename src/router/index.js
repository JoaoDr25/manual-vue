import { createRouter, createWebHistory } from 'vue-router'
import Introduccion from '../views/introduccion.vue'

import InstalacionRequisitos from '../views/Requisitos.vue'
import InstalacionCrearProyecto from '../views/CrearProyecto.vue'
import ConceptosInterpolacion from '../views/Interpolacion.vue'
import ConceptosDirectivas from '../views/Directivas.vue'
import ConceptosCicloDeVida from '../views/CicloDeVida.vue'
import ComponentesOptionsVsComposition from '../views/OptionsVsComposition.vue'
import ComponentesProps from '../views/Props.vue'
import UsoAvanzadoVueRouter from '../views/UsoVueRouter.vue'
import UsoAvanzadoPinia from '../views/UsoPinia.vue'
import Recursos from '../views/Recursos.vue'

const routes = [
  {
    path: '/',
    name: 'Introduccion',
    component: Introduccion
  },

  {
    path: '/instalacion/requisitos',
    name: 'InstalacionRequisitos',
    component: InstalacionRequisitos
  },
  {
    path: '/instalacion/crear-proyecto',
    name: 'InstalacionCrearProyecto',
    component: InstalacionCrearProyecto
  },

  {
    path: '/conceptos-basicos/interpolacion',
    name: 'ConceptosInterpolacion',
    component: ConceptosInterpolacion
  },
  {
    path: '/conceptos-basicos/directivas',
    name: 'ConceptosDirectivas',
    component: ConceptosDirectivas
  },
  {
    path: '/conceptos-basicos/ciclo-de-vida',
    name: 'ConceptosCicloDeVida',
    component: ConceptosCicloDeVida
  },

  { path: '/componentes/options-vs-composition', name: 'ComponentesOptionsVsComposition', component: ComponentesOptionsVsComposition },
  { path: '/componentes/props', name: 'ComponentesProps', component: ComponentesProps },

  { path: '/uso-avanzado/vue-router', name: 'UsoAvanzadoVueRouter', component: UsoAvanzadoVueRouter },
  { path: '/uso-avanzado/pinia', name: 'UsoAvanzadoPinia', component: UsoAvanzadoPinia },

  { path: '/recursos', name: 'Recursos', component: Recursos }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
