<template>
  <div class="hello">
    <h2>Adornos</h2>
    <div class="adornos">
      <div class="adorno" v-for="adorno in $store.getters.adornos" :key="adorno.id">
        <!----------------Pasteles------------------------->
        <div class="agregado">
            <div class="container">
              <img :src="adorno.image" :alt="adorno.name">
            <div class="name-product">
              {{adorno.name}}
            </div>
             <div class="price-product">
               {{adorno.price}}
             </div>
            </div>
        </div>
        <!-------------------Cantidad---------------------->
        <div class="contador">
          <button :id="'restar'+adorno.id" @click="$store.commit('bajarContadorAdorno', adorno.id)">-</button>
          <div class="counter">
            {{adorno.pedidos}}
          </div>
          <button :id="'sumar'+adorno.id" @click="$store.commit('subirContadorAdorno', adorno.id)">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

    
}

</script>

<style scoped>
.adornos img{
  width: 100px;
}
.adornos{
  margin: 50px;
}
.adorno{
  font-size: 20px;
  display: flex;
  /*justify-content: space-between;/* Logra gracias a flex, uno a la izquierda y otro a la derecha*/
  align-items: center;
  flex-wrap: wrap;
}
.agregado{
  width: 50%;
  display: flex;
  justify-content: space-between;/* Logra gracias a flex, uno a la izquierda y otro a la derecha*/
  align-items: center;
  flex-wrap: wrap;
}
.container{
  width: 90%;
  display: flex;
  justify-content: space-between;/* Logra gracias a flex, uno a la izquierda y otro a la derecha*/
  align-items: center;
  flex-wrap: wrap;
}
.contador{
  width:50%;
  display: flex;
  justify-content: space-between;/* Logra gracias a flex, uno a la izquierda y otro a la derecha*/
  align-items: center;
  flex-wrap: wrap;
}
h3 {
  margin: 40px 0 0;
}
h2{
  font-size: 40px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button{
  font-size: 40px;
  width: 70px;
  margin:0 10px;
}
</style>