//-------------------Store------------------
import { createStore } from 'vuex'

export default createStore({
  state: {
    sabores: [
      {
        id: 0, name: "chocolate", price: "$174.00", stok:100, pedidos: 0, image: require("@/assets/chocolate.png")
      },
      {
        id: 1, name: "coco", price: "$198.00", stok: 120, pedidos: 0, image: require("@/assets/coco.png")
      },
      {
        id: 2, name: "leche", price: "$150.00", stok: 200, pedidos: 0, image: require("@/assets/leche.png")
      },
      {
        id: 3, name: "queso", price: "$183.00", stok: 130, pedidos: 0, image: require("@/assets/queso.png")
      },
    ],
    adornos: [
      {
        id: 0, name: "flores", price: "$70.00", stok: 200, pedidos: 0, image: require("@/assets/flores-pastel.png")
      },
      {
        id: 1, name: "paredes", price: "$100.00", stok: 200, pedidos: 0, image: require("@/assets/pared-galleta.png")
      },
      {
        id: 2, name: "perlas", price: "$90.00", stok: 200, pedidos: 0, image: require("@/assets/perlas-pastel.png")
      },
      {
        id: 3, name: "imagen", price: "$120.00", stok: 200, pedidos: 0, image: require("@/assets/imagen-pastel.png")
      },
    ],
    pedidos:[
      {
        id: 0, name:"Prueba", telefono: "9989XXXXXX", correo:"example@gmail.com",
        pasteles: [0, 0, 0, 0],//Pasteles[Chocolate, Coco, Leche, Queso] <--- en ese orden
        adornos: [0, 0, 0, 0],//adornos[flores, paredes, perlas, imagen] <--- en ese orden
        description: "Descripción"
      },
    ],
    name:"",
    tel:"",
    correo:"",
    descrip:"",
    resultados_sobrantes: [
      {
        sabores:[200,200,200,200],//Pasteles[Chocolate, Coco, Leche, Queso] <--- en ese orden
      },
      {
        adornos:[200,200,200,200],//adornos[flores, paredes, perlas, imagen] <--- en ese orden
      }
    ],
  },
  getters: {
    sabores: state => state.sabores,
    adornos: state => state.adornos,
    pedidos: state => state.pedidos,
    name: state => state.name,
    tel: state => state.tel,
    correo: state => state.correo,
    descrip: state => state.descrip,
    resultados_sobrantes: state => state.resultados_sobrantes,

  },
  mutations: {
    bajarContadorSabor(getters, n){
      if(getters.sabores[n].pedidos > 0){
        getters.sabores[n].pedidos--;
        console.log(getters.sabores[n].name);
        console.log(getters.sabores[n].pedidos);
      }
    },
    subirContadorSabor(getters, n){
      getters.sabores[n].pedidos++;
      console.log(getters.sabores[n].name);
      console.log(getters.sabores[n].pedidos);
    },
    bajarContadorAdorno(getters, n){
      if(getters.adornos[n].pedidos > 0){
        getters.adornos[n].pedidos--;
        console.log(getters.adornos[n].name);
        console.log(getters.adornos[n].pedidos);
      }
    },
    subirContadorAdorno(getters, n){
      getters.adornos[n].pedidos++;
      console.log(getters.adornos[n].name);
      console.log(getters.adornos[n].pedidos);
    },
    guardarPedido(state){
      if(state.name || state.tel || state.correo || state.descrip){
        const idGet = state.pedidos.length;
        const nombre = state.name;
        const telphone = state.tel;
        const email = state.correo;
        const describe = state.descrip;
        console.log(idGet);
        console.log(nombre);
        console.log(telphone);
        console.log(email);
        console.log(describe);
        state.pedidos.push({
        id: idGet, name: nombre, telefono: telphone, correo: email,
        pasteles: [state.sabores[0].pedidos, state.sabores[1].pedidos, state.sabores[2].pedidos, state.sabores[3].pedidos],
        //Pasteles[Chocolate, Coco, Leche, Queso] <--- en ese orden
        adornos: [state.adornos[0].pedidos, state.adornos[1].pedidos, state.adornos[2].pedidos, state.adornos[3].pedidos],
        //adornos[flores, paredes, perlas, imagen] <--- en ese orden
        description: describe
        });
      }else{
        console.log('¿Qué paso?')
      }
    },
    eliminarPedidio(state, n){
      //const total = state.pedidos.length;
      state.pedidos.splice(n, 1);
    },
    aceptarPedidio(state, n){
      const saborP= state.pedidos[n].pasteles;//Sabores pedidos siendo aceptados
      const adornoP= state.pedidos[n].adornos;//Adornos pedidos siendo aceptados
      const saborT= state.resultados_sobrantes[0].sabores;//Sabores restantes actuales
      const adornoT = state.resultados_sobrantes[1].adornos;//Adornos restantes actuales
      state.resultados_sobrantes[0].sabores.splice(0, 1, saborT[0]-saborP[0]);
      state.resultados_sobrantes[0].sabores.splice(1, 1, saborT[1]-saborP[1]);
      state.resultados_sobrantes[0].sabores.splice(2, 1, saborT[2]-saborP[2]);
      state.resultados_sobrantes[0].sabores.splice(3, 1, saborT[3]-saborP[3]);
      state.resultados_sobrantes[1].adornos.splice(0, 1, adornoT[0]-adornoP[0]);
      state.resultados_sobrantes[1].adornos.splice(1, 1, adornoT[1]-adornoP[1]);
      state.resultados_sobrantes[1].adornos.splice(2, 1, adornoT[2]-adornoP[2]);
      state.resultados_sobrantes[1].adornos.splice(3, 1, adornoT[3]-adornoP[3]);
      state.pedidos.splice(n, 1);
    }

  },
  actions: {
    async eliminarPedidio({commit}, n){
      /*state.pedidos = state.pedidos.filter(function (item) {
        return item.mensaje.match(/Foo/)
      })*/
      this.commit("eliminarPedidio", n);
    },
    async aceptarPedidio({commit}, n){
      this.commit("aceptarPedidio", n);
    }
  },
  modules: {
  }
})
