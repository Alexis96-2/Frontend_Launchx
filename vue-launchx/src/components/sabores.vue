<template>
  <div class="hello">
    <h2>Sabores</h2>
    <div class="sabores">
      <div class="sabor" v-for="sabor in $store.getters.sabores" :key="sabor.id">
        <!----------------Pasteles------------------------->
        <div class="pasteles">
            <div class="container">
              <img :src="sabor.image" :alt="sabor.name">
            <div class="name-product">
              {{sabor.name}}
            </div>
             <div class="price-product">
               {{sabor.price}}
             </div>
            </div>
        </div>
        <!-------------------Cantidad---------------------->
        <div class="contador">
          <button :id="'restar'+sabor.id" @click="$store.commit('bajarContadorSabor', sabor.id)">-</button>
          <div class="counter">
            {{sabor.pedidos}}
          </div>
          <button :id="'sumar'+sabor.id" @click="$store.commit('subirContadorSabor', sabor.id)">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

    
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sabores img{
  width: 100px;
}
.sabores{
  margin: 50px;
}
.sabor{
  font-size: 20px;
  display: flex;
  /*justify-content: space-between;/* Logra gracias a flex, uno a la izquierda y otro a la derecha*/
  align-items: center;
  flex-wrap: wrap;
}
.pasteles{
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
  width: 70px;
  margin:0 10px;
  border-color: #52bdff;
  background: #0D94E5;
  color:white;
  font-size: 1.2em;
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  box-shadow: inset -8px -8px 0 0 rgba(0, 0, 0, 0.161);
}
button:hover{
  border-color: #83ff52;
  background: #0beb30;
  color:white;
}
</style>
