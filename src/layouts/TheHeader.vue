<template>
  <header>
    <div class="container">
      <div>
        <span>
          <select name="languages">
            <option value="volvo">EN</option>
            <option value="saab">AR</option>
            <option value="opel">FR</option>
          </select>
        </span>
        <span>
          <select name="currency">
            <option value="volvo">USD</option>
            <option value="saab">EGP</option>
          </select></span
        >
      </div>
      <div class="cart-profile">
        <span><font-awesome-icon :icon="['fas', 'user']" /> My Profile</span>
        <span>
          <router-link class="cart-link" to="/cart"
            ><font-awesome-icon :icon="['fas', 'cart-shopping']" /> Cart
          </router-link>
          <span class="categoriesNumber"
            >{{ categoriesNumber }} Items(<span class="total-price"
              >${{ cartStore.cartTotal }} </span
            >)</span
          >
        </span>
      </div>
    </div>
  </header>
</template>

<script>
import { useCartStore } from "@/stores/CartStore";
import { computed } from "vue";

export default {
  name: "TheHeader",
  setup() {
    const cartStore = useCartStore();
    const categoriesNumber = computed(() => {
      return cartStore.cartItems.length;
    });
    return {
      cartStore,
      categoriesNumber,
    };
  },
};
</script>

<style scoped>
header {
  width: 100%;
  background-color: var(--light-gray);
  border-bottom: 2px solid var(--border-color);
}
header .container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}
header .container div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 1rem;
}

header .container div span select {
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 12px;
}
header .cart-profile span {
  font-size: 14px;
}
.total-price {
  color: #ff3030;
  font-size: 12px !important;
}
.cart-profile span a {
  color: var(--main-color);
}
</style>
