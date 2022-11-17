<template>
  <div class="categoriesList">
    <h3 class="categoriesList__title">Меню:</h3>
    <div class="categoriesList__body">
      {{ this.tg }}
      <div class="categoriesList__cards">
        <CategoryCard
          v-for="item in categories"
          :key="item.id"
          :title="item.title"
          :img="item.img"
          @click="upData(item)"
        />
      </div>
      <div class="categoriesList__other">
        <button class="resto-button">Показать еще</button>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import CategoryCard from "../Cards/category-card.vue";
import axios from "axios";
import { backDomain } from "../../../../MainConstant";

export default {
  name: "CategoriesList",
  components: { CategoryCard },
  data() {
    return {
      loading: true,
      categories_: [
        { id: 1, title: "Вино", img: "vine" },
        { id: 2, title: "Супы", img: "soup" },
        { id: 3, title: "Пицца", img: "pizza" },
        { id: 4, title: "Бургеры", img: "burger" },
        { id: 5, title: "Блины", img: "pancake" },
        { id: 6, title: "Пиво", img: "beer" },
        { id: 7, title: "Салаты", img: "salad" },
        { id: 8, title: "Блюда из говядины", img: "beef" },
      ],
      categories: null,
    };
  },
  watch: {
    categories(newData) {
      this.categories = newData;
    },
  },
  async beforeMount() {
    axios
      .get(backDomain + "/api/category/getAll")
      .then((res) => {
        this.categories = res.data;
        console.log(this.categ);
        localStorage.setItem("categories", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    upData(data) {
      this.$emit("updateData", {
        item: data,
      });
    },
    decode() {
      // var xhr = new XMLHttpRequest();
      // xhr.open("GET", "image?id=1", true);
      // xhr.responseType = "arraybuffer";
      // xhr.onload = function (e) {
      //   var arrayBufferView = new Uint8Array(this.response);
      //   var blob = new Blob([arrayBufferView], { type: "image/jpeg" });
      //   var urlCreator = window.URL || window.webkitURL;
      //   var imageUrl = urlCreator.createObjectURL(blob);
      //   var img = document.querySelector("#image");
      //   img.src = imageUrl;
      // };
      // xhr.send();
    },
  },
};
</script>

<style lang="scss" scoped>
.categoriesList {
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
