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
      <!-- <ul>
        <li>Горячее</li>
        <li>Вино</li>
        <li>Мясо</li>
        <li>Пиво</li>
        <li>Рыба</li>
        <li>Азиатское</li>
        <li>Европейское</li>
        <li>Кофе</li>
        <li>Чай</li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import CategoriesCard from "../Cards/categories-card.vue";

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
    };
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
        font-family: 'Montserrat';
        font-size: 15px;
        font-weight: 600;
        width: 100%;
        min-height: 50px;
        background: rgb(255, 255, 255);
        color: rgb(123, 64, 21);
        border: 1px solid rgb(123, 64, 21);
        cursor: pointer;
        border-radius: 10px;
        transition: all 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955);
        &:hover {
            background: rgb(123, 64, 21);
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
