<template>
    <q-page padding class="interpolacion-qr">
        <h1>Interpolación</h1>
        <p>
            La interpolación en Vue se realiza mediante llaves dobles <code>{{ }}</code>.
            Se utiliza para mostrar valores dinámicos en el template.
        </p>
        <p>Ejemplo: <code>{{ mensaje }}</code> mostrará el valor de la variable <code>mensaje</code>.</p>
        <p>
            También se pueden hacer operaciones simples dentro de las llaves, como
            {{ numero + 1 }}
        </p>

    </q-page>
</template>

<script setup></script>

<style scoped>
@font-face {
font-family: 'prototype';
src: url('../fonts/Prototype.ttf') format('truetype');
}
.interpolacion-qr h1{
font-family: 'prototype', sans-serif;
font-size: 4rem;
font-weight: 100;
padding: 0 0 0 15px;
margin: 15px 0px -2px 0px;
}
.interpolacion-qr p{
 font-size: 17px;
    margin: 20px;
    font-family: sans-serif;
}

</style>