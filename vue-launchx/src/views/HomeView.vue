<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo-pasteleria.png">
    <div class="francua">
      <img alt="Vue logo" src="../assets/francua-left.png">
      <img alt="Vue logo" src="../assets/francua-right.png">
    </div>
    <hr>
    <sabores></sabores>
    <adornos></adornos>
    <formulario></formulario>
  </div>
</template>

<script>
// @ is an alias to /src
import sabores from '@/components/sabores.vue'
import adornos from '@/components/adornos.vue'
import formulario from '@/components/formulario.vue'

export default {
  name: 'HomeView',
  components: {
    sabores,
    adornos,
    formulario
  }
}
</script>
<style scoped>
.home img{
  width: 150px;
}
.francua{
  /*justify-content: space-between;/* Logra gracias a flex, uno a la izquierda y otro a la derecha*/
  align-items: center;
  flex-wrap: wrap;
}
hr{
  margin: 0;
  width: 100%;
  background: rgb(205, 15, 15);
  border-color: rgb(205, 15, 15);
  height: 4px;
}
</style>
