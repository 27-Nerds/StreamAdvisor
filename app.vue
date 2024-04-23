<template>
  <DefaultLayout>
    <NuxtPage/>
  </DefaultLayout>
</template>

<style lang="scss">
@import "../assets/css/index";
</style>

<script>
import DefaultLayout from "./layouts/DefaultLayout";
export default {
  components: {
    DefaultLayout
  }
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
