<template>
  <div class="categoriesCard">
    <img :src="`data:image/jpeg;base64,${img}`" alt="" />
    <!-- ПОМЕНЯТЬ -->
    <!-- <img :src="require(`../../../static/images/${img}.jpg`)" alt="" /> -->
    <div class="categoriesCard__title">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesCard",
  props: {
    img: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  data() {
    return {
      datar: 0,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.categoriesCard {
  max-width: 47.5%;
  max-height: 40vmin;
  background: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    img {
      transform: scale(1.05);
    }
  }
  img {
    transition: transform 0.2s;
    max-width: 100%;
    width: 100%;
    min-height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
  &__title {
    position: absolute;
    z-index: 2;
    bottom: 0;
    border-radius: 0px 0 10px 10px;
    padding: 2vmin 10px 3.5vmin;
    line-height: 0;
    width: calc(100% - 20px);
    background: rgba(0, 0, 0, 0.412);
    text-align: center;
    span {
      font-family: "Montserrat";
      font-size: 2.4vmin;
      font-weight: 500;
    }
  }
}
</style>
