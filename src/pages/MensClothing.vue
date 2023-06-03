<template>
  <main>
    <div class="route">Home / <span>Mens Clothing</span></div>
    <aside>
      <Categories-Aside></Categories-Aside>
    </aside>
    <article>
      <Categories-Article
        v-for="product in mensClothing"
        :key="product.id"
        :product="product"
      ></Categories-Article>
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
    ...mapState(useProductStore, ["mensClothing"]),
  },
};
</script>
