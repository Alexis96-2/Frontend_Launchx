<template>
  <div class="hello">
    <h2>adornos</h2>
    <div class="adornos">
      <div class="adorno" v-for="adorno in $store.state.adornos" :key="adorno.id">
        <input type="checkbox" name="{{adorno.name}}" id="{{adorno.name}}">
        <label for="{{adorno.name}}">
          <img :src="adorno.image" :alt="adorno.name">
          {{adorno.name}} {{adorno.price}}
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.adornos img{
  width: 100px;
}
.adornos{
  display: flex;
  justify-content: space-between;/* Logra gracias a flex, uno a la izquierda y otro a la derecha*/
  align-items: center;
  flex-wrap: wrap;
}
.adorno{
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