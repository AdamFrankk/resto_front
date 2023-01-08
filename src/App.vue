<template>
  <div class="layout">
    <Pages></Pages>
  </div>
</template>

<script>
import Pages from "./pages/index.vue";
export default {
  name: "App",
  data() {
    return {
      tg: null,
    };
  },
  mounted() {
    this.tg = window.Telegram.WebApp;
  },
  components: { Pages },
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
</style>
