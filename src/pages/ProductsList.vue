<template>
  <main>
    <div class="route"><span>Home</span></div>
    <aside>
      <home-aside></home-aside>
    </aside>
    <article>
      <ul>
        <product-card
          v-for="product in products"
          :key="product.id"
          :product="product"
        ></product-card>
      </ul>
    </article>
  </main>
</template>

<script>
import { useProductStore } from "../stores/ProductStore";
import { onMounted } from "vue";
import { mapState } from "pinia";

export default {
  name: "ProductsList",
  setup() {
    const productStore = useProductStore();
    productStore.fetchProducts();

    onMounted(() => {
      window.scrollTo(0, 0);
    });
  },
  computed: {
    ...mapState(useProductStore, ["products"]),
  },
};
</script>
