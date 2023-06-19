<template>
  <div class="cards">
    <Card
        v-for="card in cards"
        :key="card.id"
        :title="card.title"
        :description="card.description"
        :label="card.label"
        :image="card.image"
    />
  </div>
</template>

<script>
import Card from "../elements/Card";
import Brand from '../../assets/images/1920/home/brand-card-image.png'
import Stream from '../../assets/images/1920/home/streamer-card-image.png'
export default {
  name: "Cards",
  components: {
    Card
  },
  computed: {
    cards() {
      return [
        {
          id: 1,
          title: 'Mонетизуй свій стрім',
          description: 'Обирай бренди, з якими хочеш співпрацювати, а наша система автоматично виведе рекламні прояви на твоєму стрімі.',
          label: 'Для стрімерів',
          image: Stream
        },
        {
          id: 2,
          title: 'Реклама для брендів',
          description: 'Ефективне просування бренду в середовищі стрімінгових платформ та доступ до широкої аудиторії глядачів.',
          label: 'Для  брендів',
          image: Brand
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.cards {
  padding-top: 180px;
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
