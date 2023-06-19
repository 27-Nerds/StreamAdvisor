<template>
  <div class="card">
    <div class="card-image">
      <img
          :src="image"
          alt="gradient"
      >
    </div>
    <div class="card-info">
      <div class="card-info__label v-button outline-primary">
        <span>{{ label }}</span>
      </div>
      <h1 class="card-info__title">{{ title }}</h1>
      <p class="card-info__text">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    image: String,
    label: String,
    title: String,
    description: String
  }
}
</script>

<style scoped lang="scss">
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1330px;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(225.88deg, rgba(255, 255, 255, 0.08) 21.9%, rgba(255, 255, 255, 0.02) 55.7%);
  backdrop-filter: blur(100px);
  position: relative;
  border-radius: 80px;
  padding: 70px 218px 70px 58px;
  &:hover {
    .card-image {
      img {
        scale: 1.1;
      }
    }
  }
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 80px;
    padding: 1px; /* control the border thickness */
    background: linear-gradient(261.17deg, rgba(1, 241, 160, 0.4) 4.29%, rgba(1, 182, 231, 0.4) 56.73%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
  &-image {
    max-width: 450px;
    width: 100%;
    border-radius: 60px;
    margin-right: 58px;
    overflow: hidden;
    img {
      width: 100%;
      transition: .3s;
      border-radius: inherit;
    }
  }
  &-info {
    width: 60%;
    padding-top: 21px;
    padding-bottom: 21px;
    &__label {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__title {
      font-weight: 500;
      font-size: 48px;
      line-height: 120%;
      color: #FFFFFF;
      margin-top: 24px;
    }
    &__text {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 150%;
      color: #D9E9ED;
      margin-top: 24px;
    }
  }
}

@media screen and (max-width: 1920px) {
  .card {
    max-width: 1258px;
    padding: 58px 147px 58px 58px;
    &-image {

    }
  }
}

@media screen and (max-width: 1440px) {
  .card {
    max-width: 1160px;
    padding: 48px 122px 48px 48px;

    &-image {
      max-width: 418px;
      margin-right: 48px;
    }
  }
}

@media screen and (max-width: 1280px) {
  .card {
    max-width: 1034px;
    padding: 48px 122px 48px 48px;

    &-image {
      max-width: 370px;
      margin-right: 48px;
    }
  }
}

@media screen and (max-width: 768px) {
  .card {
    max-width: 738px;
    padding: 24px 62px 24px 24px;

    &-image {
      max-width: 322px;
      margin-right: 48px;
    }
    &-info {
      &__title {
        font-size: 32px;
      }
      &__text {
        font-size: 16px;
      }
    }
  }
}

@media screen and (max-width: 650px){
  .card {
    flex-direction: column;
    padding: 16px 16px 32px 16px;
    border-radius: 40px;
    &::before {
      border-radius: 40px;
    }
    &-image {
      border-radius: 24px;
      width: 100%;
      max-width: unset;
      margin-right: 0;
      img {
        width: 100%;
      }
    }
    &-info {
      padding: 21px 16px;
      width: 100%;
      &__label {

      }
      &__title {

      }
      &__text {

      }
    }
  }
}
</style>
