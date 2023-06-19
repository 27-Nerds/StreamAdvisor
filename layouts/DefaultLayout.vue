<template>
  <div class="wrapper app">
    <Navigation />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/Footer";
export default {
  name: "DefaultLayout",
  components: {Footer, Navigation}
}
</script>

<style scoped lang="scss">
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
