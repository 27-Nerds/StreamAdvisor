<template>
  <div class="main-contact">
    <div class="main-contact-wrapper">
      <h3 class="main-contact__title">Досі вагаєшся?</h3>
      <p class="main-contact__description">StreamAdvisor – ідеальний інструмент для розвитку та просування брендів та стримерів в інтернеті.</p>
      <VButton classes="primary" @click="register">Почати зараз</VButton>
    </div>
  </div>
</template>

<script>
import VButton from "../elements/VButton";
export default {
  name: "Contact",
  components: {VButton},
  methods: {
    register() {
      window.open('https://streamer.instreamly.com/register/', 'blank')
    },
  }
}
</script>

<style scoped lang="scss">
.main-contact {
  background-image: url("../../assets/images/2048/home/footer.png");
  background-repeat: no-repeat;
  background-position: center bottom;
  padding-bottom: 180px;
  padding-top: 270px;
  background-size: 1300px;
  position: relative;
  &-wrapper {
    max-width: 546px;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
  }
  &__title {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 120%;
    text-align: center;
    color: #FFFFFF;
  }
  &__description {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    margin-top: 24px;
    line-height: 150%;
    text-align: center;
    color: #E0F9FF;
  }
  .v-button {
    margin-top: 64px;
    margin-left: auto;
    margin-right: auto;
  }
  &__line {
    position: absolute;
    width: 100%;
    height: 1px;
    background-image: radial-gradient(51.47% 99.69% at 41.79% 11.16%, #85FFC9 0%, #0091FF 42.04%, #2F50FD 100%);
    bottom: 0;
    left: 0;

  }
}

@media screen and (max-width: 1920px) {
  .main-contact {
    background-image: url("../../assets/images/1920/home/footer.png");
  }
}

@media screen and (max-width: 1440px) {
  .main-contact {
    background-image: url("../../assets/images/1440/home/footer.png");
  }
}

@media screen and (max-width: 1280px) {
  .main-contact {
    background-image: url("../../assets/images/1280/home/footer.png");
  }
}

@media screen and (max-width: 650px) {
  .main-contact {
    padding-top: 100px;
    padding-left: 24px;
    padding-right: 24px;
  }
}
</style>
