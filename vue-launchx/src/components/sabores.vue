<template>
  <div class="hello">
    <h2>Sabores</h2>
    <div class="sabores">
      <div class="sabor" v-for="sabor in $store.state.sabores" :key="sabor.id">
        <input type="checkbox" name="{{sabor.name}}" id="{{sabor.name}}">
        <label for="{{sabor.name}}">
          <img :src="sabor.image" :alt="sabor.name">
          {{sabor.name}} {{sabor.price}}
        </label>
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
  display: flex;
  justify-content: space-between;/* Logra gracias a flex, uno a la izquierda y otro a la derecha*/
  align-items: center;
  flex-wrap: wrap;
}
.sabor{
  font-size: 20px;
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
</style>
