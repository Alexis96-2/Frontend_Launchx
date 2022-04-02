<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo-pasteleria.png">
    <div class="francua">
      <img alt="Vue logo" src="../assets/francua-left.png">
      <img alt="Vue logo" src="../assets/francua-right.png">
    </div>
    <pedidos></pedidos>
  </div>
</template>

<script>
import pedidos from '@/components/tabla-datos.vue'
export default {
  name: 'AboutView',
  components: {
    pedidos
  }
}
</script>

<style scoped>
.about img{
  width: 150px;
}
.francua{
  /*justify-content: space-between;/* Logra gracias a flex, uno a la izquierda y otro a la derecha*/
  align-items: center;
  flex-wrap: wrap;
}
</style>