<template>
  <div class="layout">
    <Header> </Header>
    <div class="list">
      <h3 class="list__title">Блюда:</h3>
      <div class="list__body">
        <ul>
          <li>Горячее</li>
          <li>Супы</li>
          <li>Вино</li>
          <li>Мясо</li>
          <li>Горячее</li>
          <li>Супы</li>
          <li>Вино</li>
          <li>Мясо</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/UI/Header.vue";
export default {
  name: "App",
  components: { Header },
};
</script>

<style>
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

.list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px;
}

.list__title {
  margin-bottom: 20px;
}

ul {
  display: flex;
  gap: 15px;
  flex-direction: column;
  list-style: none;
  text-align: left;
}
</style>
