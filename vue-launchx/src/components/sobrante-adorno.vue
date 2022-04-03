<template>
    <div class="sobrante">
        <h2>Sabores Restantes:</h2>
        <div v-for="(value, index) in $store.getters.resultados_sobrantes[1].adornos" :key="index">
            <p>{{$store.getters.adornos[index].name}}: {{value}}</p>
        </div>
    </div>
</template>

<style scoped>
.sobrante{
    margin:20px;
    justify-content: center;/* Logra gracias a flex, uno a la izquierda y otro a la derecha*/
    align-items: center;
    flex-wrap: wrap;
}
</style>