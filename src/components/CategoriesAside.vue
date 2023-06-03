<template>
  <div>
    <h6>RECENT ARTICLES</h6>
    <div class="recent">
      <div
        class="recent-item"
        v-for="article in recentArticles"
        :key="article.id"
      >
        <div class="item-image">
          <img loading="lazy" :src="article.image" alt="article.title" />
        </div>
        <div class="item-content">
          <p>
            <router-link
              :to="{
                name: 'product-details',
                params: { id: article.id },
              }"
              >{{ truncateText(article.title, 25) }}</router-link
            >
          </p>
          <p>{{ truncateText(article.description, 25) }}</p>
          <p>${{ article.price }}</p>
        </div>
      </div>
    </div>
    <div class="tags">
      <h6>Tags</h6>
      <div class="tags-items">
        <span v-for="tag in tags" :key="tag">{{ tag }}</span>
      </div>
    </div>
    <div class="banners">
      <div class="baner1">
        <img :src="randomProductImage1" alt="" />
      </div>
      <div class="baner2">
        <img width="270" height="185" :src="randomProductImage2" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { useProductStore } from "../stores/ProductStore";
import { mapState } from "pinia";
import { reactive } from "vue";

export default {
  name: "CategoryAside",
  setup() {
    const tags = reactive([
      "akali",
      "website",
      "template",
      "close",
      "responsive",
      "simple",
      "modern",
      "flat",
      "blue",
    ]);

    const truncateText = (title, num) => {
      if (title.length > num) {
        return title.slice(0, num);
      } else {
        return title;
      }
    };

    return {
      tags,
      truncateText,
    };
  },
  computed: {
    ...mapState(useProductStore, ["recentArticles"]),
    ...mapState(useProductStore, ["randomProductImage1"]),
    ...mapState(useProductStore, ["randomProductImage2"]),
  },
};
</script>

<style scoped>
aside {
  position: relative;
}

.recent-item {
  display: flex;
  justify-content: start;
  align-items: start;
  border-bottom: 2px solid var(--border-color);
  margin-top: 2rem;
  padding: 0 0 1rem;
}

.recent-item img {
  width: 75px;
  height: 75px;
  object-fit: contain;
  margin-right: 1rem;
}
.recent-item .item-content {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
.recent-item .item-content a {
  color: var(--main-color);
}
.recent-item .item-content a:hover {
  color: var(--main-color);
  text-decoration: underline;
}
.recent-item .item-content p:first-child {
  font-size: 16px;
  margin: 0;
}
.recent-item .item-content p {
  font-size: 12px;
  margin: 0.5rem 0;
}
.tags {
  margin: 2rem 0;
}
.tags-items {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}
.tags span {
  text-align: center;
  padding: 0.5rem 1rem;
  border: 2px solid var(--border-color);
  font-size: 12px;
  flex-basis: calc(33.33% - 0.67rem);
}
.banners {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}
.banners .baner1,
.banners .baner2 {
  border: 2px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.banners .baner1 {
  width: 270px;
  height: 270px;
}
.banners .baner1 img,
.banners .baner2 img {
  width: 100%;
  height: 80%;
  object-fit: contain;
}
.banners .baner2 {
  width: 270px;
  height: 185px;
}
</style>
