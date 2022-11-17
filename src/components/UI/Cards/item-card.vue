<template>
  <div class="itemCard">
    <img :src="`data:image/jpeg;base64,${img}`" alt="" />
    <!-- <img :src="require(`../../../static/images/${img}.jpg`)" alt="" /> -->
    <div class="itemCard__info">
      <h2 class="itemCard__title">
        <b>{{ title }}</b>
      </h2>
      <p class="itemCard__description">
        Информация: <b>{{ info }}</b>
      </p>
      <p v-if="cookTime" class="itemCard__time">
        Время готовки: <b>Примерно {{ cookTime }}</b>
      </p>
      <p class="itemCard__price">
        Цена: <b>{{ price }}₽</b>
      </p>
    </div>
    <div class="itemCard__change">
      <div class="itemCard__button orange">
        <button @click="showGreenButton">+</button>
      </div>
      <div class="itemCard__button red"><button>-</button></div>
    </div>
    <div class="itemCard__itemCount" v-if="itemCount > 0">
      <span>{{ itemCount }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    img: {
      type: String,
    },
    title: {
      type: String,
    },
    info: {
      type: String,
    },
    cookTime: {
      type: String,
    },
    price: {
      type: Number,
    },
    itemCount: {
      type: Number,
    },
  },
  methods: {
    showGreenButton() {
      const tg = window?.Telegram.WebApp;
      console.log(tg);
      console.log(tg.version);
      console.log(tg.viewportHeight);
      console.log(tg.viewportStableHeight);
      console.log(tg.MainButton);
    },
  },
};
</script>

<style lang="scss" scoped>
.itemCard {
  display: flex;
  gap: 10px;
  max-width: 100%;
  min-width: 100%;
  background: #fff;
  position: relative;
  border-radius: 10px;
  color: #343332;
  &:hover {
    cursor: pointer;
  }
  img {
    max-width: 100px;
    border-radius: 5px;
  }
  &__info {
    padding: 10px 0;
    font-family: "Montserrat";
    font-size: 12px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: left;
  }
  &__title {
    font-family: "Montserrat";
    font-size: 15px;
    margin-bottom: 3px;
    font-weight: 600;
  }
  &__itemCount {
    position: absolute;
    z-index: 2;
    top: -10px;
    left: -10px;
    padding: 10px 12.5px;
    font-weight: 600;
    color: white;
    background-color: #992dc8;
    border-radius: 50%;
    font-size: 10px;
  }
  &__change {
    margin-left: auto;
    min-width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  &__button {
    min-height: 50%;
    &:first-child {
      button {
        border-radius: 0px 10px 0 0;
      }
    }
    &:last-child {
      button {
        border-radius: 0px 0 10px 0;
      }
    }
    button {
      color: white;
      font-weight: 700;
      font-size: 20px;
      min-height: 100%;
      cursor: pointer;
      min-width: 100%;
    }
    &.orange {
      button {
        background: rgb(255, 175, 27);
      }
    }
    &.red {
      button {
        background: rgb(255, 24, 24);
      }
    }
  }
}
</style>
