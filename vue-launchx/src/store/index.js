//-------------------Store------------------
import { createStore } from 'vuex'

export default createStore({
  state: {
    sabores: [
      {
        id: 0, name: "chocolate", price: "$174.00", stok:"100", pedidos: 0, image: require("@/assets/chocolate.png")
      },
      {
        id: 1, name: "coco", price: "$198.00", stok: "120", pedidos: 0, image: require("@/assets/coco.png")
      },
      {
        id: 2, name: "leche", price: "$150.00", stok: "200", pedidos: 0, image: require("@/assets/leche.png")
      },
      {
        id: 3, name: "queso", price: "$183.00", stok: "130", pedidos: 0, image: require("@/assets/queso.png")
      },
    ],
    adornos: [
      {
        id: 0, name: "flores", price: "$70.00", stok: "200", pedidos: 0, image: require("@/assets/flores-pastel.png")
      },
      {
        id: 1, name: "paredes", price: "$100.00", stok: "200", pedidos: 0, image: require("@/assets/pared-galleta.png")
      },
      {
        id: 2, name: "perlas", price: "$90.00", stok: "200", pedidos: 0, image: require("@/assets/perlas-pastel.png")
      },
      {
        id: 3, name: "imagen", price: "$120.00", stok: "200", pedidos: 0, image: require("@/assets/imagen-pastel.png")
      },
    ],
    pedidos:[
      {
        id: 0, name:"Nombre del Cliente", telefono: "Numero telefonico", pasteles: [//Los pasteles seccionados
          {name:"Chocolate", cantidad:"#" }, {name: "Coco", cantidad:"#"}, {name: "Leche", cantidad:"#"}, {name: "Queso", cantidad:"#"}],
          adornos: [{name:"Flores", cantidad:"#" }, {name: "Paredes", cantidad:"#"}, {name: "Perlas", cantidad:"#"}, {name: "Imagen", cantidad:"#"}],
          description: "Descripción"
      },
    ],
  },
  getters: {
    sabores: state => state.sabores,
    adornos: state => state.adornos,
  },
  mutations: {
    bajarContadorSabor(getters, n){
      if(getters.sabores[n].pedidos > 0){
        getters.sabores[n].pedidos--;
      }
    },
    subirContadorSabor(getters, n){
      getters.sabores[n].pedidos++;
    },
    bajarContadorAdorno(getters, n){
      if(getters.adornos[n].pedidos > 0){
        getters.adornos[n].pedidos--;
      }
    },
    subirContadorAdorno(getters, n){
      getters.adornos[n].pedidos++;
    }
  },
  actions: {
    
  },
  modules: {
  }
})
