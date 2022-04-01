<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo-pasteleria.png">
    <div class="francua">
      <img alt="Vue logo" src="../assets/francua-left.png">
      <img alt="Vue logo" src="../assets/francua-right.png">
    </div>
    <sabores></sabores>
    <adornos></adornos>
  </div>
</template>

<script>
// @ is an alias to /src
import sabores from '@/components/sabores.vue'
import adornos from '@/components/adornos.vue'

export default {
  name: 'HomeView',
  components: {
    sabores,
    adornos
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
</style>
