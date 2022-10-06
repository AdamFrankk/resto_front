<template>
  <div class="layout">
    <Header> </Header>
    <CategoriesList />
  </div>
</template>

<script>
import Header from "./components/LayoutComponents/Header.vue";
import CategoriesList from "./components/UI/Lists/categories-list.vue";
export default {
  name: "App",
  components: { Header, CategoriesList },
  data() {
    return {
      tg: null,
    };
  },
  mounted() {
    this.tg = this.window.Telegram.WebApp;
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap");

* {
  margin: 0;
  border: 0;
  padding: 0;
  outline: 0;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 500;
  font-size: 24px;
}

.layout {
  max-width: 500px;
  margin: 0 auto;
  background: #2c3e50;
  min-height: 100vh;
  color: #fff;
}
</style>
