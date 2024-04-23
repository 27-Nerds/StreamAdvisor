<template>
  <div class="cards">

    <Card
        ref='card_1'
        :title="cards.card1.title"
        :description="cards.card1.description"
        :label="cards.card1.label"
        :image="cards.card1.image"
        :to="'streams'"
        :style="{
          transform: cardTransform1,
          transition: 'transition 0.25s ease-out'
        }"
    />
    <Card
        ref='card_2'
        :title="cards.card2.title"
        :description="cards.card2.description"
        :label="cards.card2.label"
        :to="'brands'"
        :image="cards.card2.image"
        :style="{
          transform: cardTransform2,
          transition: 'transition 0.25s ease-out'
        }"
    />
  </div>
</template>

<script setup>
import Stream from "../../assets/images/1920/home/streamer-card-image.png";
import Brand from "../../assets/images/1920/home/brand-card-image.png";
import {useMouseInElement} from "@vueuse/core";

const card_1 = ref(null)
const card_2 = ref(null)
const { $device } = useNuxtApp()
const element1 = useMouseInElement(card_1)
const element2 = useMouseInElement(card_2)

const cardTransform1 = computed(() => {
  if ($device.isDesktop && $device.isChrome) {

    const MAX_ROTATION = 6

    const rx = (MAX_ROTATION/2 - (element1.elementY.value / element1.elementHeight.value) * MAX_ROTATION).toFixed(2)
    const ry = ((element1.elementX.value / element1.elementWidth.value) * MAX_ROTATION - MAX_ROTATION/2).toFixed(2)
    return element1.isOutside.value
        ? ''
        : `perspective(${element1.elementWidth.value}px) rotateX(${rx}deg) rotateY(${ry}deg)`
  }
  return ''
})

const cardTransform2 = computed(() => {
  if ($device.isDesktop && $device.isChrome) {
    const MAX_ROTATION = 6

    const rx = (MAX_ROTATION/2 - (element2.elementY.value / element2.elementHeight.value) * MAX_ROTATION).toFixed(2)
    const ry = ((element2.elementX.value / element2.elementWidth.value) * MAX_ROTATION - MAX_ROTATION/2).toFixed(2)
    return element2.isOutside.value ? '' : `perspective(${element2.elementWidth.value}px) rotateX(${rx}deg) rotateY(${ry}deg)`
  }
  return  ''
})

const cards = {
  card1: {
    id: 1,
    title: 'Mонетизуй свій стрім',
    description: 'Обирай бренди, з якими хочеш співпрацювати, а наша система автоматично виведе рекламні прояви на твоєму стрімі.',
    label: 'Для стрімерів',
    image: Stream
  },
  card2: {
    id: 2,
    title: 'Реклама для брендів',
    description: 'Ефективне просування бренду в середовищі стрімінгових платформ та доступ до широкої аудиторії глядачів.',
    label: 'Для  брендів',
    image: Brand
  }
}

</script>

<script>
import Card from "../elements/Card";
export default {
  name: "Cards",
  components: {
    Card
  },
}
</script>

<style scoped lang="scss">
.cards {
  padding-top: 70px;
  padding-bottom: 180px;
  background-image: url("../../assets/images/2048/home/under-cards.png");
  background-repeat: no-repeat;
  background-position: left center;
  .card {
    &:nth-child(1) {
      margin-bottom: 100px;
    }
  }
}

@media screen and (max-width: 1920px){
  .cards {
    background-image: url("../../assets/images/1920/home/under-cards.png");
  }
}
@media screen and (max-width: 1440px){
  .cards {
    background-image: url("../../assets/images/1440/home/under-cards.png");
  }
}
@media screen and (max-width: 1280px){
  .cards {
    background-image: url("../../assets/images/1280/home/under-cards.png");
  }
}
@media screen and (max-width: 650px){
  .cards {
    padding: 0 24px 100px 24px;
    .card {
      &:nth-child(1) {
        margin-bottom: 32px;
      }
    }
  }
}
</style>
