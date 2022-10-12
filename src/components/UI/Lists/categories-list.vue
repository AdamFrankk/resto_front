<template>
  <div class="list">
    <h3 class="list__title">Меню:</h3>
    <div class="list__body">
      {{ this.tg }}
      <div class="list__cards">
        <CategoriesCard
          v-for="item in categories"
          :key="item.id"
          :title="item.title"
          :img="item.img"
        />
      </div>
      <div class="list__other">
        <button class="resto-button">Показать еще</button>
      </div>
      <div>
        {{ this.categ }}
      </div>
    </div>
  </div>
</template>

<script>
import CategoriesCard from "../Cards/categories-card.vue";
import axios from "axios";
import { backDomain } from "../../../../MainConstant";

export default {
  name: "CategoriesList",
  components: { CategoriesCard },
  data() {
    return {
      categories: [
        { id: 1, title: "Вино", img: "vine" },
        { id: 2, title: "Супы", img: "soup" },
        { id: 3, title: "Пицца", img: "pizza" },
        { id: 4, title: "Бургеры", img: "burger" },
        { id: 5, title: "Блины", img: "pancake" },
        { id: 6, title: "Пиво", img: "beer" },
        { id: 7, title: "Салаты", img: "salad" },
        { id: 8, title: "Блюда из говядины", img: "beef" },
      ],
      categ: null,
      tokenStr: "YWRhbUZyYW5rOjJSdDNmX20zQDN5",
    };
  },
  watch: {
    categ(newData) {
      this.categ = newData;
    },
  },
  async mounted() {
    axios
      .get(backDomain + "/api/categories/getAllCategories", {
        headers: { Authorization: `Basic YWRhbUZyYW5rOjJSdDNmX20zQDN5` },
      })
      .then((res) => {
        this.categ = res.data;
        console.log(this.categ);
      })
      .catch((error) => {
        console.log(error);
        this.categ = error;
      });
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 25px;
  &__title {
    margin-bottom: 20px;
  }
  &__cards {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__other {
    margin-top: 25px;
    .resto-button {
      font-family: "Montserrat";
      font-size: 15px;
      font-weight: 600;
      width: 100%;
      min-height: 50px;
      background: rgb(255, 255, 255);
      color: #343332;
      border: 1px solid #343332;
      cursor: pointer;
      border-radius: 10px;
      transition: all 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955);
      &:hover {
        background: #343332;
        color: rgb(255, 255, 255);
        border: 1px solid rgb(255, 255, 255);
      }
    }
  }
}

ul {
  display: flex;
  gap: 15px;
  flex-direction: column;
  list-style: none;
  text-align: left;
}
</style>
