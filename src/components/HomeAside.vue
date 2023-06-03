<template>
  <div>
    <div class="accessories">
      <h6>ACCESSORIES</h6>
      <ul>
        <li v-for="acc in accessories" :key="acc">
          <span>
            <input type="checkbox" name="accessories" :id="acc.num" />
            <label :for="acc.num">{{ acc.name }}</label>
          </span>
          <span>({{ acc.num }})</span>
        </li>
      </ul>
    </div>
    <div class="price-ranger">
      <h6>PRICES RANGER</h6>
      <div class="price-ranger-input">
        <p>
          <span>Ranger:</span><span>${{ InputValue }} - $100</span>
        </p>
        <input min="0" max="100" step="1" v-model="InputValue" type="range" />
      </div>
    </div>
    <div class="colors">
      <h6>COLOR</h6>
      <div class="switches">
        <div v-for="(color, index) in colors" :key="index" class="color">
          <div :class="'swatch ' + color.name">
            <input
              type="radio"
              name="swatch_demo"
              :id="'swatch_' + color.num"
              :value="color.num"
              checked=""
            />
            <label :for="'swatch_' + color.num"></label>
          </div>
          <span>{{ color.name }}</span>
        </div>
      </div>
    </div>
    <div class="brands">
      <h6>BRAND</h6>
      <ul>
        <li v-for="brand in brands" :key="brand">
          <span>
            <input type="checkbox" name="brand" :id="brand.name" />
            <label :for="brand.name">{{ brand.name }}</label>
          </span>
          <span>({{ brand.num }})</span>
        </li>
      </ul>
    </div>
    <div class="sizes">
      <h6>SIZE</h6>
      <div class="switch-sizes">
        <div v-for="(size, index) in sizes" :key="index" class="size">
          <input
            type="checkbox"
            name="size"
            :id="'size_' + size.num"
            :value="size.num"
          />
          <label :for="'size_' + size.num">{{ size.name }}</label>
        </div>
      </div>
    </div>
    <div class="random-product">
      <h6>BEST SELLERS</h6>
      <div class="product">
        <div class="product-img">
          <img :src="randomProduct.image" alt="product" />
        </div>
        <div class="product-body">
          <p class="title">{{ randomProduct.title }}</p>
          <p class="rate-price">
            <span class="price">${{ randomProduct.price }}</span>
            <span class="rate"
              ><font-awesome-icon :icon="['fas', 'star']" />{{ getRate }}</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductStore } from "@/stores/ProductStore";
import { ref, computed } from "vue";

export default {
  name: "HomeAside",
  setup() {
    const productStore = useProductStore();
    productStore.fetchProducts();

    const InputValue = ref(0);
    const accessories = [
      { name: "Apple Car", num: "13" },
      { name: "Air Port & Wireless", num: "56" },
      { name: "Cables & Docks", num: "69" },
      { name: "Cases & Films", num: "96" },
      { name: "Charging Devices", num: "78" },
      { name: "Connected Home", num: "87" },
      { name: "Display", num: "37" },
      { name: "Headphones", num: "0" },
    ];

    const colors = [
      { name: "Blue", num: "1" },
      { name: "Red", num: "2" },
      { name: "Black", num: "3" },
      { name: "Yellow", num: "4" },
      { name: "Pink", num: "5" },
      { name: "Gray", num: "6" },
    ];

    const brands = [
      { name: "Apple", num: "13" },
      { name: "Google", num: "24" },
      { name: "Samsung", num: "69" },
      { name: "Sony", num: "96" },
      { name: "Nokia", num: "78" },
    ];

    const sizes = [
      { name: "XS", num: "1" },
      { name: "S", num: "2" },
      { name: "M", num: "3" },
      { name: "L", num: "4" },
      { name: "XL", num: "5" },
      { name: "XXL", num: "6" },
    ];

    return {
      InputValue,
      accessories,
      colors,
      brands,
      sizes,
      randomProduct: computed(() => productStore.randomProduct),
      getRate: computed(() => productStore.getRate),
    };
  },
};
</script>

<style>
h6 {
  margin-bottom: 1rem;
}
.accessories,
.price-ranger,
.colors,
.brands,
.sizes,
.random-product {
  margin-bottom: 3rem;
}
.accessories ul li,
.brands ul li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 14px;
  margin-left: 0.5rem;
}
.accessories ul li span,
.brands ul li span {
  display: flex;
  align-items: center;
}
.accessories ul li span input[type="checkbox"],
.brands ul li span input[type="checkbox"],
.sizes .size input[type="checkbox"] {
  accent-color: var(--btn-blue-color);
}
.accessories ul li span label,
.brands ul li span label {
  cursor: pointer;
}

.accessories ul li span input,
.brands ul li span input {
  margin-right: 0.5rem;
}
.accesories ul li span:hover,
.brands ul li span:hover {
  color: var(--btn-blue-color);
}
.price-ranger .price-ranger-input p {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 14px;
}
.price-ranger .price-ranger-input p span {
  font-size: 14px;
}
.price-ranger .price-ranger-input input {
  width: 100%;
  height: 2px;
  border-radius: 20px;
  -webkit-appearance: none;
  appearance: none;
  background-color: var(--btn-blue-color);
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
}
.price-ranger .price-ranger-input input:hover {
  opacity: 1;
}
.price-ranger .price-ranger-input input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--btn-blue-color);
  cursor: pointer;
}

.color,
.sizes .switch-sizes .size {
  display: flex;
  align-items: center;
}
.color span,
.sizes .switch-sizes .size label {
  margin-left: 0.5rem;
}
.switches,
.switch-sizes {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.swatch {
  position: relative;
  margin: 0.5rem;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  line-height: 20px;
  display: inline-block;
}
.swatch > [type="radio"],
.swatch > [type="checkbox"] {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
}
.swatch > [type="radio"] + label,
.swatch > [type="checkbox"] + label {
  width: 20px;
  height: 20px;
  border-radius: 20px;
  line-height: 20px;
  text-align: center;
  position: absolute;
  transition: all 0.5s ease-in-out;
}
.swatch > [type="radio"]:checked + label,
.swatch > [type="checkbox"]:checked + label {
  border: 4px solid #cecece;
  transition: all 0.1s ease-in-out;
}
.swatch.Blue > [type="radio"] + label,
.swatch.Blue > [type="checkbox"] + label {
  background-color: var(--btn-blue-color);
  color: #fff;
}
.swatch.Red > [type="radio"] + label,
.swatch.Red > [type="checkbox"] + label {
  background-color: var(--red-color);
  color: #fff;
}
.swatch.Black > [type="radio"] + label,
.swatch.Black > [type="checkbox"] + label {
  background-color: var(--main-color);
  color: #fff;
}
.swatch.Yellow > [type="radio"] + label,
.swatch.Yellow > [type="checkbox"] + label {
  background-color: #fff600;
  color: #fff;
}
.swatch.Pink > [type="radio"] + label,
.swatch.Pink > [type="checkbox"] + label {
  background-color: #ff00b4;
  color: #fff;
}
.swatch.Gray > [type="radio"] + label,
.swatch.Gray > [type="checkbox"] + label {
  background-color: #efdfdf;
  color: #fff;
}

.sizes .switch-sizes .size {
  margin-bottom: 1rem;
}
.sizes .switch-sizes .size input[type="checkbox"] {
  margin-left: 0.5rem;
}
.sizes .switch-sizes .size label {
  cursor: pointer;
  font-size: 14px;
}

/* Random Product Style */
.random-product .product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--border-color);
  padding: 1rem;
}
.random-product .product .product-img {
  position: relative;
  width: 270px;
  height: 270px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid var(--border-color);
}
.random-product .product .product-img img {
  width: 80%;
  height: 80%;
  object-fit: contain;
}
.random-product .product .title {
  font-weight: 500;
  margin: 1rem auto;
  text-align: center;
  width: 100%;
  height: 16px;
  overflow: hidden;
}
.random-product .product .rate-price {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem 2rem;
  font-size: 14px;
}

.random-product .product .rate-price .price {
  font-weight: 500;
  color: var(--red-color);
}
.random-product .product .rate-price .rate svg {
  margin-right: 0.5rem;
}
</style>
