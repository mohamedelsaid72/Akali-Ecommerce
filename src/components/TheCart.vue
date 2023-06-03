<template>
  <main>
    <div class="cart">
      <div class="cart-items" v-if="cartStore.cartItems.length">
        <div
          class="cart-item"
          v-for="item in cartStore.cartItems"
          :key="item.id"
        >
          <div class="cart-item-image">
            <img :src="item.image" :alt="item.title" />
          </div>
          <div class="cart-item-text">
            <p class="title">
              <router-link
                :to="{
                  name: 'product-details',
                  params: { id: item.id },
                }"
                >{{ item.title }}</router-link
              >
            </p>
            <p class="price"><strong>Price:</strong> ${{ item.price }}</p>
            <div class="cart-item-quantity">
              <button @click="decrementQuantity(item)">-</button>
              <p>{{ item.quantity }}</p>
              <button @click="incrementQuantity(item)">+</button>
            </div>
            <div class="cart-item-delete">
              <button @click="removeFromCart(item)">Remove From Cart</button>
            </div>
          </div>
        </div>
        <div class="cart-total">
          <p>Total: ${{ cartStore.cartTotal }}</p>
        </div>
      </div>
      <div class="empty-cart" v-else>
        <p>Your cart is empty</p>
      </div>
    </div>
  </main>
</template>

<script>
import { useCartStore } from "../stores/CartStore";

export default {
  name: "TheCart",
  setup() {
    const cartStore = useCartStore();

    const removeFromCart = (item) => {
      cartStore.removeFromCart(item);
    };

    const incrementQuantity = (item) => {
      cartStore.incrementQuantity(item);
    };

    const decrementQuantity = (item) => {
      cartStore.decrementQuantity(item);
    };

    return {
      cartStore,
      removeFromCart,
      incrementQuantity,
      decrementQuantity,
    };
  },
};
</script>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr;
}
.cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.cart-items {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.cart-item {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  border-bottom: 2px solid var(--border-color);
}
.cart-item-image {
  flex: 1 1 200px;
  display: flex;
  justify-content: center;
  height: fit-content;
  padding: 4rem 2rem;
  background-color: #fff;
  border: 2px solid var(--border-color);
}
.cart-item-image img {
  width: 200px;
  height: 200px;
  object-fit: contain;
}
.cart-item-text {
  flex: 2 1 300px;
}
.cart-item-text .title {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
.cart-item-text .title a {
  text-decoration: none;
  color: #000;
}
.cart-item-text .title a:hover {
  text-decoration: underline;
}
.cart-item-quantity {
  display: flex;
  align-items: center;
  margin: 1rem 0;
  background-color: var(--dark-gray);
  width: fit-content;
}
.cart-item-quantity button {
  all: unset;
  color: var(--btn-blue-color);
  padding: 1rem 1.25rem;
  cursor: pointer;
  font-size: 16px;
}
.cart-item-quantity p {
  padding: 1rem;
}
.cart-item-quantity button:hover {
  background-color: var(--btn-blue-color);
  color: #fff;
}
.cart-item-delete button {
  background-color: var(--red-color);
  color: #fff;
  border: 1px solid var(--red-color);
  padding: 1rem;
  cursor: pointer;
  margin-top: 2rem;
}
.cart-total {
  margin: 1rem 0 2rem;
  font-weight: bold;
}
.empty-cart {
  padding: 1rem;
  border: 1px solid #ccc;
}

.empty-cart p {
  font-size: 1.2rem;
  font-weight: bold;
}

.empty-cart p::before {
  content: "⚠️ ";
}

/* responsive styles */
@media (max-width: 768px) {
  .cart h2 {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  .cart h2::before {
    bottom: -5px;
    height: 2px;
  }
  .cart-item {
    padding: 1rem;
    gap: 1rem;
  }
  .cart-item-image img {
    width: 100%;
    height: 160px;
    object-fit: contain;
  }
  .cart-item-text .title {
    margin-bottom: 1rem;
  }
  .cart-item-text .title a {
    font-size: 1rem;
  }
  .cart-item-text .description {
    font-size: 0.8rem;
  }
  .cart-item-text .price {
    font-size: 0.8rem;
  }
  .cart-item-text .addToCart {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
  .cart-item-delete button {
    font-size: 0.8rem;
    padding: 0.5rem;
    margin-top: 1rem;
  }
  .cart-total {
    font-size: 0.8rem;
  }
  .empty-cart p {
    font-size: 1rem;
  }
  .empty-cart p::before {
    font-size: 1rem;
  }
}
</style>
