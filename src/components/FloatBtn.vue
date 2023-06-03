<template>
  <button @click="BackToTop">
    <font-awesome-icon :icon="['fass', 'up-long']" />
  </button>
</template>

<script>
export default {
  name: "FloatBtn",
  setup() {
    const BackToTop = () => {
      window.scrollTo(0, 0);
    };
    return { BackToTop };
  },
};
</script>

<style scoped>
button {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  color: var(--btn-blue-color) !important;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>
