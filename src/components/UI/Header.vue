<template>
  <div class="header">
    <div>WEB APP</div>
    <img src="../../../src/assets/logo.jpeg" alt="" />
  </div>
</template>

<script>
export default {
  name: "FullHeader",
};
</script>

<style>
.header {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px 10px 25px;
}

.header img {
  max-width: 70px;
  border-radius: 20px;
}
</style>
