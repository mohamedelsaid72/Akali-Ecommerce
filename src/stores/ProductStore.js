import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
    electronics: [],
    jewelery: [],
    mensClothing: [],
    womensClothing: [],
    recentArticles: [],
    randomProduct: 0,
    randomProductImage1: 0,
    randomProductImage2: 0,
    getRate: null,
  }),
  actions: {
    async fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      this.products = products;

      const randomProductImage1 =
        products[Math.floor(Math.random() * products.length)].image;

      const randomProductImage2 =
        products[Math.floor(Math.random() * products.length)].image;

      const randomProduct =
        products[Math.floor(Math.random() * products.length)];

      const getRate = randomProduct.rating.rate;

      const electronics = [];
      const jewelery = [];
      const mensClothing = [];
      const womensClothing = [];
      const recentArticles = [];

      products.forEach((product) => {
        if (product.category === "electronics") {
          electronics.push(product);
        } else if (product.category === "jewelery") {
          jewelery.push(product);
        } else if (product.category === "men's clothing") {
          mensClothing.push(product);
        } else if (product.category === "women's clothing") {
          womensClothing.push(product);
        }

        if (product.id >= 17 && product.id <= 20) {
          recentArticles.push(product);
        }
      });

      this.electronics = electronics;
      this.jewelery = jewelery;
      this.mensClothing = mensClothing;
      this.womensClothing = womensClothing;
      this.recentArticles = recentArticles;
      this.randomProduct = randomProduct;
      this.randomProductImage1 = randomProductImage1;
      this.randomProductImage2 = randomProductImage2;
      this.getRate = getRate;
    },
  },
});
