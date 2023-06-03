<template>
  <div>
    <TheHeader />
    <TheNavbar />
    <router-view />
    <TheFooter />
    <FloatBtn />
  </div>
</template>

<script>
import TheNavbar from "@/layouts/TheNavbar.vue";
import TheHeader from "@/layouts/TheHeader.vue";
import TheFooter from "./layouts/TheFooter.vue";
import FloatBtn from "./components/FloatBtn.vue";

export default {
  components: {
    TheNavbar,
    TheHeader,
    TheFooter,
    FloatBtn,
  },
};
</script>

<style>
@import url("../public/css/variables.css");
@font-face {
  font-family: proximanova;
  src: url("../public/fonts/ProximaNovaSemibold.ttf");
}

* {
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: proximanova;
}
body {
  color: var(--main-color);
}
h1 {
  font-size: 56px;
}
h2 {
  font-size: 48px;
}
h3 {
  font-size: 36px;
}
h4 {
  font-size: 40px;
}
h5 {
  font-size: 24px;
}
h6 {
  font-size: 18px;
}

.container,
main {
  max-width: 1300px;
  margin: auto;
  padding: 1rem;
}
main {
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 25% 75%;
  min-height: 50vh;
}
main article {
  padding: 1rem 2rem;
}
main .route {
  display: none;
}

/* responsive styles */
@media screen and (max-width: 992px) {
  main {
    grid-template-columns: 1fr;
    max-width: 95%;
    margin: 0 auto;
    margin-top: 4rem;
  }
  main article {
    padding: 1rem;
  }
  main .route {
    display: flex;
    padding: 1rem 0;
    border-bottom: 2px solid var(--border-color);
    margin-bottom: 1rem;
  }
  main .route span {
    color: var(--btn-blue-color);
    margin-left: 0.5rem;
  }
  h3 {
    font-size: 24px;
  }
}
</style>
