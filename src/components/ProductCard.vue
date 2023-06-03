<template>
  <li>
    <div class="card-image">
      <router-link
        :to="{
          name: 'product-details',
          params: { id: product.id },
        }"
      >
        <img loading="lazy" :src="product.image" :alt="product.title" />
      </router-link>
    </div>
    <div class="card-body">
      <h6>
        <router-link
          :to="{
            name: 'product-details',
            params: { id: product.id },
          }"
          >{{ truncateTitle }}</router-link
        >
      </h6>
      <p class="review-rate">
        <span class="rate"
          ><font-awesome-icon :icon="['fas', 'star']" />
          {{ product.rating.rate }}</span
        >
        <span class="review">0 Reviews</span>
      </p>
      <p class="price">
        <span class="new">${{ product.price }}</span>
        <span class="old">${{ product.price * 2 }}</span>
      </p>
      <p class="description">{{ product.description }}</p>
      <div class="product-card-actions">
        <button class="addToCart" @click="addToCart">
          <font-awesome-icon :icon="['fas', 'cart-shopping']" /> Add to Cart
        </button>
      </div>
    </div>
  </li>
</template>

<script>
import { computed } from "vue";
import { useCartStore } from "@/stores/CartStore";

export default {
  name: "ProductCard",
  props: ["product"],
  setup(props) {
    const cartStore = useCartStore();

    const truncateTitle = computed(() => {
      if (props.product.title.length > 50) {
        return props.product.title.slice(0, 50) + "...";
      } else {
        return props.product.title;
      }
    });

    const addToCart = () => {
      cartStore.addToCart({
        id: props.product.id,
        ...props.product,
        quantity: 1,
      });
    };

    return {
      truncateTitle,
      addToCart,
    };
  },
};
</script>

<style scoped>
li {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 2rem;
}
li .card-image {
  flex: 1 1 200px;
  padding: 1rem;
  border: 2px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}
li .card-image img {
  width: 100%;
  height: 200px;
  object-fit: contain;
}
li .card-body {
  flex: 2 1 300px;
  padding: 0 1rem;
}
li .card-body a {
  color: var(--main-color);
}
li .card-body a:hover {
  text-decoration: underline;
}

li .card-body .review-rate {
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 0 1rem;
}

li h3 a:hover {
  text-decoration: underline;
}
li .description {
  font-size: 12px;
  line-height: 1.7;
  margin: 1rem 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 60px;
}
li .price {
  display: flex;
  align-items: center;
  font-weight: 500;
  margin: 1rem 0;
}
li .price .new {
  color: var(--red-color);
  margin-right: 1rem;
  font-size: 16px;
}
li .price .old {
  text-decoration: line-through;
  font-size: 14px;
}
.product-card-actions {
  margin-top: 1rem;
}
.product-card-actions button {
  text-decoration: none;
  background-color: var(--btn-blue-color);
  border: 2px solid var(--btn-blue-color);
  transition: all 0.3s ease-in-out;
  color: #fff;
  border-radius: 2rem;
  padding: 0.65rem 1.25rem;
  cursor: pointer;
  font-size: 12px;
}
.product-card-actions button svg {
  margin-right: 0.5rem;
}
</style>

<!-- ProductCard.vue -->
