<template>
    <q-page padding>
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
