<template>
  <div class="product">
    <div class="product-image">
      <img :src="product.image" alt="product Image" />
    </div>
    <div class="product-content">
      <h6>{{ product.title }}</h6>
      <p>3 comments | March 24, 2015</p>
      <p>{{ product.description }}</p>
    </div>
    <router-link
      :to="{
        name: 'product-details',
        params: { id: product.id },
      }"
      >Read More</router-link
    >
  </div>
</template>

<script>
export default {
  name: "CategoriesArticle",
  props: ["product"],
};
</script>

<style scoped>
.product {
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--border-color);
  padding: 2rem 1rem;
}
.product .product-image {
  width: 100%;
  height: 300px;
  border: 2px solid var(--border-color);

  display: flex;
  align-items: center;
}
.product img {
  width: 100%;
  height: 200px;
  object-fit: contain;
}
.product .product-content {
  margin-top: 1.5rem;
}
.product .product-content h6 {
  margin-bottom: 1rem;
}
p {
  font-size: 12px;
  margin-bottom: 1rem;
  line-height: 2;
}

.product a {
  padding: 0.5rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 2rem;
  font-size: 12px;
  color: var(--main-color);
}
</style>
