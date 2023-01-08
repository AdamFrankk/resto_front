<template>
  <div class="cartItem">
    <div class="cartItem__body">
      <div class="cartItem__count">{{ count }}</div>
      <div class="cartItem__img">
        <img :src="`data:image/jpeg;base64,${img}`" alt="" />
      </div>
      <div class="cartItem__info">
        <h3>{{ title }}</h3>
        <div>Цена: {{ price }}₽</div>
      </div>
    </div>

    <div class="cartItem__actions">
      <div class="cartItem__buttons">
        <button class="cartItem__button red" @click="count--">-</button>
        <button class="cartItem__button orange" @click="count++">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RestoCart",
  props: {
    img: {
      type: String,
    },
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  data() {
    return {
      count: 1,
    };
  },
  watch: {
    count() {
      if (this.count < 1) {
        this.count = 1;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.cartItem {
  display: flex;
  gap: 10px;
  max-width: 100%;
  min-width: 100%;
  background: #fff;
  border-radius: 10px;
  color: #343332;
  position: relative;
  justify-content: space-between;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  img {
    max-width: 80px;
    border-radius: 5px;
  }
  &__count {
    position: absolute;
    left: -10px;
    font-size: 14px;
    top: -10px;
    border-radius: 50%;
    padding: 4px 9px;
    background: #992dc8;
    color: #fff;
  }
  &__body {
    display: flex;
    justify-content: space-between;
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
      border-radius: 0px 10px 0 0;
    }
    &:last-child {
      border-radius: 0px 0 10px 0;
    }
    color: white;
    font-weight: 700;
    font-size: 20px;
    min-height: 45px;
    cursor: pointer;
    min-width: 100%;
    &.orange {
      background: rgb(255, 175, 27);
      transition: all 0.1s;
      &:active {
        background: rgb(213, 142, 10);
      }
    }
    &.red {
      background: rgb(255, 24, 24);
      transition: all 0.1s;
      &:active {
        background: rgb(180, 2, 2);
      }
    }
  }
}
</style>
