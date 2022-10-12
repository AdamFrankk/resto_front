<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="first"><Header> </Header> <CategoriesList /></div>
</template>

<script>
import Header from "../components/LayoutComponents/Header.vue";
import CategoriesList from "../components/UI/Lists/categories-list.vue";

export default { name: "mainPage", components: { Header, CategoriesList } };
</script>

<style></style>
