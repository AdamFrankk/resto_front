<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="first">
    <Header @openCart="changeCartState"></Header>
    <CategoriesList @updateData="changeCateg" v-if="component == 'categor'" />
    <ItemsList
      v-else-if="component == 'menu'"
      @nullerData="nullCateg"
      :id="item?.id"
      :img="item?.img"
      :name="item?.title"
    />
    <Cart v-else-if="component == 'cart'" @nullerData="nullCateg" />
  </div>
</template>

<script>
import Header from "../components/LayoutComponents/Header.vue";
import CategoriesList from "../components/UI/Lists/categories-list.vue";
import ItemsList from "@/components/UI/Lists/items-list.vue";
import Cart from "@/components/UI/Cart/cart.vue";

export default {
  name: "mainPage",
  components: { Header, CategoriesList, ItemsList, Cart },
  data() {
    return {
      items: false,
      item: null,
      name: null,
      itemID: null,
      component: "categor",
    };
  },
  // watch: {
  //   item(newData) {
  //     this.item = newData
  //   }
  // },
  methods: {
    changeCateg(data) {
      this.item = data.item;
      this.component = "menu";
    },
    changeCartState() {
      this.component = "cart";
    },
    nullCateg() {
      this.component = "categor";
    },
  },
};
</script>

<style></style>
