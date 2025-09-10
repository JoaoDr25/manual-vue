<template>
    <q-page padding class="interpolacion-qr">
        <h1>Interpolación</h1>
        <p>
            La interpolación en Vue se realiza mediante llaves dobles <code>{{ }}</code>.
            Se utiliza para mostrar valores dinámicos en el template.
        </p>
        <p>Ejemplo: <code>{{ mensaje }}</code> Mostrará el valor de la variable <code>nombre</code>.</p>
        <p>
            Se pueden hacer operaciones simples dentro de las llaves, aqui hay un ejemplo:
        </p>
        <div class="imagenes-qr">
            <img src="../assets/interpolacion.jpeg" alt="interpolacion" class="imagen">
        </div>
    </q-page>
</template>

<script setup></script>

<style scoped>
@font-face {
    font-family: 'prototype';
    src: url('../fonts/Prototype.ttf') format('truetype');
}

.interpolacion-qr h1 {
    font-family: 'prototype', sans-serif;
    font-size: 4rem;
    font-weight: 100;
    padding: 0 0 0 15px;
    margin: 15px 0px -2px 0px;
}

.interpolacion-qr p {
    font-size: 17px;
    margin: 20px;
    font-family: sans-serif;
}

.imagenes-qr {
    display: flex;
    justify-items: center;
}

.imagenes-qr img {
    width: 40rem;
    filter: drop-shadow(2px 4px 6px black);
    margin-left: 22px;
    transition: transform 0.3s ease;
}

.imagenes-qr img:hover {
    transform: scale(1.009);
}
</style>