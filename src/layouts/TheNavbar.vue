<template>
  <nav :class="{ sticky: isSticky }">
    <div class="container">
      <div class="nav-brand">
        <h3><router-link to="/">AKALI</router-link></h3>
      </div>
      <ul :class="{ 'menu-open': isMenuOpen }" class="links">
        <li
          @click="isMenuOpen = !isMenuOpen"
          v-for="(link, index) in links"
          :key="index"
        >
          <router-link :to="link.to">{{ link.name }}</router-link>
        </li>
        <li class="close" @click="isMenuOpen = !isMenuOpen">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </li>
      </ul>
      <div class="toggle" @click="isMenuOpen = !isMenuOpen">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
export default {
  name: "TheNavbar",
  setup() {
    const isSticky = ref(false);
    const isMenuOpen = ref(false);
    const links = [
      {
        name: "Home",
        to: "/products",
      },
      {
        name: "Electronics",
        to: "/electronics",
      },
      {
        name: "Jewelery",
        to: "/jewelery",
      },
      {
        name: "Mens Clothing",
        to: "/mens-clothing",
      },
      {
        name: "Womens Clothing",
        to: "/womens-clothing",
      },
    ];

    const handleScroll = () => {
      isSticky.value = window.pageYOffset > 0;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      isSticky,
      isMenuOpen,
      links,
    };
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  background-color: #fff;
  transition: all ease-in-out 0.3s;
  padding: 0 2%;
  border-bottom: 2px solid var(--border-color);
}
.sticky {
  top: 0;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}
nav .container {
  text-align: center;
  padding: 2rem 0;
}
nav .nav-brand {
  margin-bottom: 2rem;
}

nav .nav-brand a {
  color: var(--main-color);
  font-weight: bold;
  letter-spacing: 2px;
}
ul {
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 0 1rem;
}
ul .close {
  display: none;
}
ul li a {
  text-decoration: none;
  color: #000;
  font-weight: 500;
  padding: 0.5rem 2rem;
  text-transform: uppercase;
  border-width: 2px;
}

ul li a:hover,
ul li a:active,
ul li a.router-link-active {
  color: var(--text-blue-color);
  border: 2px solid var(--text-blue-color);
  border-radius: 2rem;
}

.toggle {
  display: none;
  cursor: pointer;
}

@media (max-width: 992px) {
  nav .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
  nav .nav-brand {
    margin-bottom: 0;
  }
  ul {
    display: none;
  }
  .toggle {
    display: flex;
  }
  /* open navbar */
  nav .container .menu-open {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #fff;
    z-index: 999;
  }
  nav .container .menu-open .close {
    position: absolute;
    top: 4.5rem;
    right: 2rem;
    cursor: pointer;
  }
  nav .container ul {
    flex-direction: column;
    gap: 2rem 0;
  }
}
</style>
