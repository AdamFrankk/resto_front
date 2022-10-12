<template>
  <div class="header">
    <div class="header__logo">
      <img src="../../../src/assets/logo.jpeg" alt="" />
      <span>WEB APP</span>
    </div>
    <div class="header__cart">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="30px"
        height="30px"
        viewBox="0 0 30 30"
        version="1.1"
      >
        <g id="surface1">
          <path
            fill="#343332"
            d="M 5.839844 6.5 L 5.421875 4 L 3.929688 4 C 3.707031 3.140625 2.929688 2.5 2 2.5 C 0.898438 2.5 0 3.394531 0 4.5 C 0 5.605469 0.898438 6.5 2 6.5 C 2.929688 6.5 3.707031 5.859375 3.929688 5 L 4.574219 5 L 4.824219 6.5 L 4.808594 6.5 L 7.390625 19.507812 C 6.160156 19.601562 5.132812 20.550781 5.011719 21.746094 C 4.941406 22.449219 5.171875 23.152344 5.644531 23.675781 C 6.121094 24.199219 6.796875 24.5 7.5 24.5 L 8.5 24.5 C 8.5 26.152344 9.847656 27.5 11.5 27.5 C 13.15625 27.5 14.5 26.152344 14.5 24.5 L 20 24.5 C 20 26.152344 21.34375 27.5 23 27.5 C 24.652344 27.5 26 26.152344 26 24.5 L 28 24.5 C 28.277344 24.5 28.5 24.277344 28.5 24 C 28.5 23.722656 28.277344 23.5 28 23.5 L 25.824219 23.5 C 25.410156 22.335938 24.300781 21.5 23 21.5 C 21.695312 21.5 20.585938 22.335938 20.175781 23.5 L 14.324219 23.5 C 13.914062 22.335938 12.804688 21.5 11.5 21.5 C 10.199219 21.5 9.089844 22.335938 8.675781 23.5 L 7.5 23.5 C 7.078125 23.5 6.675781 23.316406 6.390625 23.003906 C 6.097656 22.683594 5.964844 22.273438 6.007812 21.847656 C 6.085938 21.089844 6.78125 20.5 7.59375 20.5 L 7.988281 20.5 C 7.996094 20.5 8 20.5 8.007812 20.5 L 27.507812 20.5 C 28.882812 20.5 30 19.378906 30 18.007812 L 30 6.5 Z M 2 5.5 C 1.449219 5.5 1 5.050781 1 4.5 C 1 3.949219 1.449219 3.5 2 3.5 C 2.550781 3.5 3 3.949219 3 4.5 C 3 5.050781 2.550781 5.5 2 5.5 Z M 2 5.5 "
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "FullHeader",
};
</script>

<style lang="scss">
.header {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
  &__logo {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  &__cart {
    padding: 15px 15px 15px 12.5px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.33s;
    path {
      transition: all 0.33s;
    }
    &:hover {
      background: #343332;
      #surface1 path {
        fill: #fff;
      }
    }
  }
}

.header img {
  max-width: 70px;
  border-radius: 20px;
}
</style>
