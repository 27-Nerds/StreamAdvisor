<template>
  <div class="wrapper app">
    <Navigation />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: 'StreamAdvisor',
  meta: [
    { name: 'title', content: 'StreamAdvisor' },
    { name: 'description', content: 'Коли бренд зустрічається з стрімерами' },
    { property: 'og:title', content: `StreamAdvisor` },
    { property: 'og:description', content: `Коли бренд зустрічається з стрімерами` },
    { property: 'keywords', content: 'Стрімінг, Стрімери, Стрімери Україна, Стрімери заробіток, Як заробляти на стрімах, Реклама у твіч, Реклама на твічі, Реклама у twitch, Спонсорство стрімерів, Стрімінгові сервіси, Інфлюенсери, Трафік Twitch' }
  ],
})

</script>

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
  max-width: 2050px;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
