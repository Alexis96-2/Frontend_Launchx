//-------------------Store------------------
import { createStore } from 'vuex'

export default createStore({
  state: {
    sabores: [
      {
        id: 0, name: "chocolate", price: "- $174.00", stok:"100", image: require("@/assets/chocolate.png")
      },
      {
        id: 1, name: "coco", price: "- $198.00", stok: "120", image: require("@/assets/coco.png")
      },
      {
        id: 2, name: "leche", price: "- $150.00", stok: "200", image: require("@/assets/leche.png")
      },
      {
        id: 3, name: "queso", price: "- $183.00", stok: "130", image: require("@/assets/queso.png")
      },
    ],
    adornos: [
      {
        id: 0, name: "flores", price: "- $70.00", stok: "200", image: require("@/assets/flores-pastel.png")
      },
      {
        id: 0, name: "paredes", price: "- $100.00", stok: "200", image: require("@/assets/pared-galleta.png")
      },
      {
        id: 0, name: "perlas", price: "- $90.00", stok: "200", image: require("@/assets/perlas-pastel.png")
      },
      {
        id: 0, name: "imagen", price: "- $120.00", stok: "200", image: require("@/assets/imagen-pastel.png")
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
