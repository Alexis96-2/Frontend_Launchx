<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo-pasteleria.png">
    <div class="francua">
      <img alt="Vue logo" src="../assets/francua-left.png">
      <img alt="Vue logo" src="../assets/francua-right.png">
    </div>
    <div class="sobrantes">
      <sabores></sabores>
      <adornos></adornos>
    </div>
    <pedidos></pedidos>
  </div>
</template>

<script>
import sabores from '@/components/sobrante-sabor.vue'
import adornos from '@/components/sobrante-adorno.vue'
import pedidos from '@/components/tabla-datos.vue'
export default {
  name: 'AboutView',
  components: {
    sabores,
    adornos,
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
.sobrantes{
  margin:10px;
  display: flex;
  justify-content: center;/* Logra gracias a flex, uno a la izquierda y otro a la derecha*/
  align-items: center;
  flex-wrap: wrap;
}
</style>