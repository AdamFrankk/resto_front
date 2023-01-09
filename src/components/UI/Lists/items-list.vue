<template>
  <div class="itemsList">
    <div class="itemsList__top">
      <div class="itemsList__back" @click="nuller">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="25px"
          height="25px"
          viewBox="0 0 30 30"
          version="1.1"
        >
          <g id="surface1">
            <path
              style="
                stroke: none;
                fill-rule: nonzero;
                fill: rgb(255%, 255%, 255%);
                fill-opacity: 1;
              "
              d="M 12.335938 1.023438 C 12.054688 1.171875 1.15625 10.945312 1.042969 11.148438 C 0.902344 11.414062 0.914062 11.765625 1.070312 12.023438 C 1.257812 12.34375 12.0625 21.972656 12.386719 22.113281 C 12.8125 22.300781 13.3125 22.113281 13.539062 21.679688 C 13.648438 21.492188 13.652344 21.296875 13.652344 19.0625 L 13.652344 16.640625 L 13.792969 16.640625 C 14.265625 16.640625 15.546875 16.78125 16.140625 16.90625 C 19.273438 17.539062 22.179688 19.511719 24.273438 22.441406 C 25.390625 24 26.296875 25.875 26.894531 27.855469 C 27.035156 28.320312 27.175781 28.671875 27.257812 28.75 C 27.648438 29.171875 28.25 29.167969 28.648438 28.75 C 28.867188 28.511719 29.003906 27.46875 29.046875 25.652344 C 29.078125 24 29.027344 23.191406 28.792969 21.796875 C 28.085938 17.59375 26.101562 13.679688 23.234375 10.8125 C 22.347656 9.921875 21.757812 9.4375 20.742188 8.757812 C 18.71875 7.40625 16.554688 6.65625 14.3125 6.523438 L 13.65625 6.484375 L 13.640625 4.007812 C 13.625 1.609375 13.617188 1.53125 13.5 1.371094 C 13.4375 1.28125 13.3125 1.15625 13.230469 1.09375 C 13.023438 0.945312 12.5625 0.90625 12.335938 1.023438 Z M 11.921875 7.90625 C 11.988281 8.015625 12.15625 8.167969 12.296875 8.242188 C 12.53125 8.367188 12.632812 8.378906 13.351562 8.378906 C 14.660156 8.378906 15.695312 8.546875 16.976562 8.976562 C 21.292969 10.40625 24.855469 14.46875 26.375 19.671875 C 26.65625 20.648438 27.078125 22.8125 27.070312 23.28125 C 27.070312 23.320312 26.929688 23.109375 26.753906 22.816406 C 26.351562 22.125 25.710938 21.1875 25.21875 20.566406 C 24.691406 19.90625 23.121094 18.339844 22.5 17.859375 C 20.828125 16.578125 19.03125 15.679688 17.167969 15.203125 C 15.335938 14.742188 12.9375 14.636719 12.257812 14.988281 C 11.824219 15.210938 11.8125 15.269531 11.777344 17.320312 L 11.75 19.136719 L 9.199219 16.859375 C 5.824219 13.839844 3.578125 11.835938 3.410156 11.6875 L 3.273438 11.570312 L 5.570312 9.523438 C 6.832031 8.390625 8.742188 6.691406 9.808594 5.734375 L 11.75 4 L 11.777344 5.851562 C 11.804688 7.578125 11.8125 7.71875 11.921875 7.90625 Z M 11.921875 7.90625 "
            />
          </g>
        </svg>
      </div>
      <h3 class="itemsList__title">{{ name }}</h3>
    </div>
    <div class="itemsList__body">
      <div class="itemsList__cards" v-if="items !== null">
        <ItemCard
          v-for="item in items"
          :key="item.id"
          :title="item.title"
          :info="item.description"
          :cookTime="item.time"
          :price="item.price"
          :itemCount="item.count"
          :img="item.image"
          @click="saveItemInCart(item)"
        />
      </div>
      <div v-else-if="error !== null" class="itemsList__load">
        {{ error }}
      </div>
      <div v-else class="itemsList__load">Загрузка...</div>
      <div class="itemsList__other">
        <button class="resto-button">Показать еще</button>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { backDomain } from "../../../../MainConstant";
import ItemCard from "../Cards/item-card.vue";

export default {
  name: "ItemsList",
  components: { ItemCard },
  props: {
    name: {
      type: String,
    },
    // img: {
    //   type: String,
    // },
    id: {
      type: Number,
    },
  },
  data() {
    return {
      items_: [
        {
          id: 1,
          title: "Finagoria",
          info: "Виноград с Юга Италии",
          image: "vine",
          count: 2,
        },
        {
          id: 2,
          title: "Rosalia",
          info: "Виноград с Севера Италии",
          image: "vine",
        },
        {
          id: 3,
          title: "Italio",
          info: "Виноград с Центра Италии",
          image: "vine",
        },
        { id: 4, title: "Derbent", info: "Виноград с Дербента", image: "vine" },
        { id: 5, title: "Derbent", info: "Виноград с Дербента", image: "vine" },
        { id: 6, title: "Derbent", info: "Виноград с Дербента", image: "vine" },
      ],
      items: null,
      itemsLength: -1,
      error: null
    };
  },
  watch: {
    categories(newData) {
      this.items = newData;
    },
  },
  methods: {
    nuller() {
      this.$emit("nullerData", {
        data: null,
      });
    },
    saveItemInCart(data) {
      let products = [];
      if (localStorage.getItem("items")) {
        products = JSON.parse(localStorage.getItem("items"));
      }
      products.push(data);
      localStorage.setItem("items", JSON.stringify(products));
    },
  },
  async beforeCreate() {
    axios
      .get(backDomain + "/api/menu/getByCategory/" + this.id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa("CheckIst0" + ":" + "z4:20=)13#V")}`,
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((res) => {
        this.items = res.data;
        this.itemsLength = res.data.length;
        console.log(this.items);
      })
      .catch((err) => {
        this.error = err
      });
  },
};
</script>

<style lang="scss" scoped>
.itemsList {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 25px;
  &__top {
    display: flex;
    gap: 15px;
  }
  &__back {
    margin-top: 5px;
    cursor: pointer;
  }
  &__title {
    margin-bottom: 20px;
  }
  &__body {
    width: 100%;
  }
  &__cards {
    display: flex;
    row-gap: 20px;
    width: 100%;
    flex-direction: column;
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
