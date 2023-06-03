import { createRouter, createWebHistory } from "vue-router";

import ProductsList from "./pages/ProductsList.vue";
import TheCart from "./components/TheCart.vue";
import ProductDetails from "./components/ProductDetails.vue";
import TheElectronics from "./pages/TheElectronics.vue";
import TheJewelery from "./pages/TheJewelery.vue";
import MensClothing from "./pages/MensClothing.vue";
import WomensClothing from "./pages/WomensClothing.vue";

const routes = [
  {
    path: "/",
    redirect: "/products",
  },
  {
    path: "/products",
    component: ProductsList,
  },
  {
    path: "/products/:id",
    name: "product-details",
    component: ProductDetails,
    props: true,
  },
  {
    path: "/cart",
    component: TheCart,
  },
  {
    path: "/electronics",
    component: TheElectronics,
  },
  {
    path: "/jewelery",
    component: TheJewelery,
  },
  {
    path: "/mens-clothing",
    component: MensClothing,
  },
  {
    path: "/womens-clothing",
    component: WomensClothing,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// router.js
