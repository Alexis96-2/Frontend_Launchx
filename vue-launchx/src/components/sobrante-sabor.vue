<template>
    <div class="sobrante">
        <h2>Sabores Cantidad:</h2>
        <div v-for="(value, key, index) in $store.getters.resultados_sobrantes[0].sabores" :key="index">
            <p>{{key}}: {{value}}</p>
        </div>
    </div>
</template>

<style scoped>

</style>