<template>
  <main class="product-details">
    <div class="product-image">
      <img loading="lazy" :src="product.image" :alt="product.title" />
    </div>
    <div class="product-text">
      <h3>{{ product.title }}</h3>
      <p class="description">{{ product.description }}</p>
      <div class="card-info">
        <p>
          <strong>Price:</strong><span>${{ product.price }}</span>
        </p>
        <p>
          <strong>Rating:</strong><span>{{ product.rating.rate }}</span>
        </p>
        <p>
          <strong>Count:</strong><span>{{ product.rating.count }}</span>
        </p>
      </div>
      <button class="addToCart" @click="addToCart">
        <font-awesome-icon :icon="['fas', 'cart-shopping']" /> Add to Cart
      </button>
    </div>
  </main>
</template>

<script>
import { computed, onMounted } from "vue";
import { useProductStore } from "@/stores/ProductStore";
import { useCartStore } from "@/stores/CartStore";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductDetails",
  props: ["id"],
  setup(props) {
    const productStore = useProductStore();
    const cartStore = useCartStore();

    const product = computed(() => {
      return productStore.products.find((res) => res.id == props.id);
    });

    const addToCart = () => {
      cartStore.addToCart({
        id: product.value.id,
        ...product.value,
        quantity: 1,
      });
    };

    onMounted(() => {
      productStore.fetchProducts();
      window.scrollTo(0, 0);
    });

    return {
      product,
      addToCart,
    };
  },
});
</script>

<style scoped>
.product-details {
  min-height: 60vh;
}
.product-details .product-image {
  display: flex;
  justify-content: center;
  height: fit-content;
  padding: 4rem 2rem;
  background-color: #fff;
  border: 2px solid var(--border-color);
}
.product-details img {
  width: 80%;
  max-height: 250px;
  object-fit: contain;
}

.product-details .product-text {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
}
.product-details .product-text h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
}
.product-details .product-text .description {
  width: 90%;
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 1rem;
}
.product-details .product-text .card-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.product-details .product-text .card-info p strong {
  font-weight: 500;
  margin-right: 0.5rem;
}
.product-details .product-text .card-info p span {
  font-size: 0.8rem;
}
.product-text button {
  width: fit-content;
  background-color: var(--btn-blue-color);
  border: 2px solid var(--btn-blue-color);
  transition: all 0.3s ease-in-out;
  color: #fff;
  border-radius: 2rem;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  font-size: 12px;
  margin-top: 1rem;
}
button svg {
  margin-right: 0.5rem;
}
</style>
