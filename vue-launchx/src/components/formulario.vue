<template>
    <div class="formulario">
        <!-----<form novalidate="" @submit="$store.mutations.guardarPedido()">----->
            <div class="orden">
                <h2>Pedido</h2>
                <div class="parte">
                    <label for="name">Nombre</label>
                    <input id="name" v-model="$store.state.name" type="text" name="name" required>
                </div>
                <div class="parte">
                    <label for="telefono">Telefono</label>
                    <input id="telefono" v-model="$store.state.tel" type="text" name="telefono" required>
                </div>
                <div class="parte">
                    <label for="correo">Correo</label>
                    <input id="correo" v-model="$store.state.correo" type="email" name="correo" required>
                </div>
            </div>
            <p>Decribe el/los pastel(s)</p>
            <textarea v-model="$store.state.descrip" name="descripcion" id="descripcion" cols="40" rows="10" required></textarea>
            <br>
            <button id="btn-pedir" class="button"  @click="$store.commit('guardarPedido')">Pedir</button>
            <!------------<input class="button" type="submit" value="Pedir">----->
        <!-----</form>------->
     </div>    
</template>

<style scoped>
.orden{
    align-items: center;
    flex-wrap: wrap;
}
.parte{
    display: inline-block;
    margin:10px;
}
.formulario{
    margin: 0 auto;
    width: 90%;
    font-size: 20px;
}
h2{
  font-size: 40px;
}
.button{
    font-size: 30px;
    width: 200px;
    color: white;
    border-color: #52bdff;
  background: #0D94E5;
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 28px;
    box-shadow: inset -8px -8px 0 0 rgba(0, 0, 0, 0.161);
}
.button:hover{
  border-color: #52f1ff;
  background: #0bcdeb;
  color:white;
}
</style>