import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import ProductCard from "@/components/ProductCard.vue";
import CategoriesAside from "./components/CategoriesAside.vue";
import CategoriesArticle from "./components/CategoriesArticle.vue";
import HomeAside from "./components/HomeAside.vue";

// import fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas);
library.add(fab);

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("ProductCard", ProductCard);
app.component("CategoriesAside", CategoriesAside);
app.component("CategoriesArticle", CategoriesArticle);
app.component("HomeAside", HomeAside);
app.mount("#app");
