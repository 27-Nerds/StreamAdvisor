<template>
  <div class="work">
    <div class="work-wrapper">
      <h1 class="work-header">Як це працює</h1>
      <div class="work-block work-block__first">
        <img src="../../assets/images/account.svg" alt="">
        <p>Налаштуй акаунт за 1 хв</p>
      </div>
      <div class="work-block work-block__second">
        <img src="../../assets/images/link.svg" alt="">
        <p>Підключи StreamAdvisor до своєї платформи</p>
      </div>
      <div class="work-block work-block__third">
        <img src="../../assets/images/choose.svg" alt="">
        <p>Обери бренди для співпраці</p>
      </div>
      <div class="work-block work-block__fourth">
        <img src="../../assets/images/growth.svg" alt="">
        <p>Заробляй гроші</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work"
}
</script>

<style scoped lang="scss">
.work {
  max-width: 800px;
  padding: 15px 15px 150px 15px;
  margin-left: auto;
  margin-right: auto;
  &-wrapper {

  }
  &-header {
    text-align: center;
    margin-bottom: 104px;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 120%;
    color: #FEFEFE;
  }
  &-block {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 35px 0px 35px 16px;
    &__first {
      background: linear-gradient(257.77deg, rgba(0, 0, 0, 0) -3.74%, #7994FF 28.24%, rgba(0, 0, 0, 0) 57.27%) bottom /* left or right or else */ no-repeat;
      background-size: 80% 1px;
      margin-bottom: 15px;
    }
    &__second {
      background: linear-gradient(251.18deg, rgba(0, 0, 0, 0) 52.35%, #8DFDE9 75.79%, rgba(0, 0, 0, 0) 97.09%) top left /* left or right or else */ no-repeat;
      background-size: 60% 1px;
    }
    &__third {
      background: linear-gradient(251.18deg, rgba(0, 0, 0, 0) 52.35%, #8DFDE9 75.79%, rgba(0, 0, 0, 0) 97.09%) top /* left or right or else */ no-repeat;
      background-position-x: 40px;
      background-size: 100% 1px;
    }
    &__fourth {
      background: linear-gradient(99.66deg, rgba(255, 255, 255, 0) 17.78%, rgba(112, 237, 210, 0.7) 93.16%) top right /* left or right or else */ no-repeat;
      background-size: 100% 1px;

    }
    img {
      width: 140px;
      margin-right: 16px;
    }
    p {
      font-weight: 500;
      font-size: 32px;
      line-height: 150%;
      color: #FFFFFF;
    }
  }
}

@media screen and (max-width: 1920px) {
  .work {
    padding-bottom: 115px;
    &-block {
      img {
        width: 120px;
        height: 120px;
      }
    }
  }
}

@media screen and (max-width: 1750px) {
  .work {
    max-width: 500px;
    &-header {
      margin-bottom: 52px;
    }
    &-block {
      padding: 24px 0 24px 16px;
      p {
        font-size: 20px;
      }
      img {
        width: 100px;

      }
    }
  }
}

@media screen and (max-width: 1650px) {
  .work {
    padding-bottom: 60px;
    &-block {
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
}

@media screen and (max-width: 1440px) {
  .work {
    padding-bottom: 60px;
    &-block {
      padding: 16px 0 16px 16px;
      img {
        width: 90px;
        height: 90px;
      }
    }
  }
}

@media screen and (max-width: 1312px){
  .work {
    &-header {
      margin-bottom: 54px;
    }
    &-block {
      padding: 20px 0px 20px 16px;
      p {
        font-size: 24px;
      }
    }
  }
}

@media screen and (max-width: 1280px) {
  .work {
    padding-bottom: 20px;
  }
}
@media screen and (max-width: 768px) {
  .work {
    &-block {
      p {
        font-size: 20px;
      }
    }
  }
}
@media screen and (max-width: 650px) {
  .work {
    &-header {
      font-weight: 500;
      font-size: 32px;
      line-height: 120%;
      margin-bottom: 30px;
    }
    &-block {
      align-items: center;
      padding-right: 16px;
      img {
        width: 80px;
        height: 80px;
      }
      p {
        font-size: 16px;
      }
    }
  }
}
</style>
