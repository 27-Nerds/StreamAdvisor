<template>
  <div class="brands">
    <StarsLayout>
    </StarsLayout>
    <div class="brands-header">
      <div class="brands-header__wrapper">
        <div class="brands-header__block">
          <div class="brands-header__text mobile">
            <p class="brands-header__description">Розмістіть свій бренд у центрі живої стрімінгової спільноти та охопіть нову молоду аудиторію.</p>
          </div>
          <div class="brands-header__img-wrapper">
            <img src="../assets/images/2048/brands/1-screen.png" alt="" class="brands-header__img">
          </div>
          <div class="brands-header__text">
            <h1 class="brands-header__title">Просувай свій <span>бренд</span></h1>
            <p class="brands-header__description hide-in-mobile">Розмістіть свій бренд у центрі живої стрімінгової спільноти та охопіть нову молоду аудиторію.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="brands-stats">
      <div class="brands-stats__wrapper">
        <div class="brands-stats__block-wrapper">
          <div class="brands-stats__block">
            <h3>61%</h3>
            <p>представників покоління Z не мають телевізора</p>
          </div>
          <div class="brands-stats__block">
            <h3>66%</h3>
            <p>використовують блокування реклами</p>
          </div>
          <div class="brands-stats__block">
            <h3>50%</h3>
            <p>з них споживають понад 8 годин потокового контенту щодня</p>
          </div>
        </div>

        <div class="brands-stats__gradient-1" />
        <div class="brands-stats__gradient-2" />
        <div class="brands-stats__gradient-3" />
        <div class="brands-stats__gradient-4" />
        <div class="brands-stats__ellipse" />
      </div>
    </div>
    <div class="brands-info">
      <div class="brands-info__wrapper">
        <div class="brands-info__circle-container">
          <div class="brands-info__circle">
            <div class="brands-info__title">
              Чому <span>StreamAdvisor</span> це круто?
            </div>
          </div>
          <div class="brands-info__circle-small">
            <img src="../assets/images/2048/brands/small-circle.svg" alt="">
          </div>
        </div>
        <div class="brands-info__block">
          <div class="brands-info__item">
            <img src="../assets/images/2048/brands/icons/1.svg" alt="">
            <p>Повідомлення бренду стає частиною трансляції</p>
          </div>
          <div class="brands-info__item">
            <img src="../assets/images/2048/brands/icons/2.svg" alt="">
            <p>Коефіцієнт переглядів (VTR) 100%</p>
          </div>
          <div class="brands-info__item">
            <img src="../assets/images/2048/brands/icons/3.svg" alt="">
            <p>Клікабельність (CTR) до 10%</p>
          </div>
          <div class="brands-info__item">
            <img src="../assets/images/2048/brands/icons/4.svg" alt="">
            <p>Відсутність конкурентів у етері</p>
          </div>
        </div>
      </div>
    </div>
    <div class="brands-form">
      <div class="brands-form__wrapper">
        <h3>Маєш питання?</h3>
        <div class="brands-form__component-wrapper">
          <div class="brands-form__bg-gradient">
            <img src="../assets/images/2048/brands/brands-form.png" alt="">
          </div>
          <div class="brands-form__component">
            <BrandsForm  @showMessage="showMessageHandler"/>
          </div>
        </div>
      </div>
    </div>
    <VMessage message="Ваше повідомлення відправленно!" :show-message="showMessage"/>
  </div>
</template>

<script>
import StarsLayout from "../layouts/StarsLayout";
import BrandsForm from "../components/BrandsForm";
import VMessage from "../components/VMessage.vue";
export default {
  name: "brands",
  components: {
    VMessage,
    StarsLayout,
    BrandsForm
  },
  data() {
    return {
      showMessage: false
    }
  },
  methods: {
    showMessageHandler() {
      this.showMessage = true
      setTimeout(() => {
        this.showMessage = false
      }, 3000)
    }
  }
}
</script>

<style scoped lang="scss">
.brands {
  overflow: hidden;
  &-header {
    width: 100%;
    position: relative;
    //padding-top: 300px;
    //padding-bottom: 500px;
    &__wrapper {
    }
    &__img {
      margin-left: -100px;
      margin-top: -80px;
      &-wrapper {

      }
    }
    &__block {
      display: flex;
      align-items: center;
    }
    &__text {
      display: block;
      max-width: 550px;
      margin-left: auto;
      margin-right: 270px;
      &.mobile {
        display: none ;
      }
    }
    &__title {
      font-style: normal;
      font-weight: 500;
      font-size: 64px;
      line-height: 120%;
      color: #FEFEFE;
      span {
        background: linear-gradient(118.16deg, #FEFFD7 -3.29%, #69FFE5 53.5%, #3662FF 99.36%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
    &__description {
      margin-top: 48px;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 150%;
      color: rgba(255, 255, 255, 0.9);
    }
  }
  &-stats {
    &__wrapper {
      overflow: hidden;
      position: relative;
      padding-bottom: 450px;
    }
    &__block {
      padding-top: 24px;
      max-width: 280px;
      background: linear-gradient(150.08deg, #47776E 33.61%, rgba(0, 0, 0, 0) 74.98%, rgba(0, 0, 0, 0) -11.94%) top left no-repeat;
      background-size: 100% 1px;
      &-wrapper {
        margin-left: auto;
        margin-right: auto;
        max-width: 1240px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      h3 {
        font-weight: 500;
        font-size: 64px;
        line-height: 120%;
        background: linear-gradient(118.16deg, #FEFFD7 -3.29%, #69FFE5 53.5%, #3662FF 99.36%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        margin-bottom: 24px;
      }
      p {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 150%;
        color: #D9E9ED;
      }
      &:nth-child(1) {

      }

      &:nth-child(2) {
        margin-top: 400px;
      }
      &:nth-child(3) {
        margin-top: 168px;
      }
    }
    &__gradient-1 {
      position: absolute;
      background-image: url("../assets/images/2048/brands/2-stats.png");
      background-repeat: no-repeat;
      background-size: 100%;
      left: 0px;
      top: 90px;
      width: 1606px;
      height: 300.93px;
      z-index: -1;
    }
    &__gradient-2 {
      position: absolute;
      bottom: 150px;
      left: -100px;
      width: 246.94px;
      height: 372.18px;
      background: linear-gradient(244.5deg, rgba(254, 251, 225, 0.38) 33.85%, rgba(255, 255, 255, 0) 168.31%);
      filter: blur(64px);
      transform: rotate(-128.97deg);
    }
    &__gradient-3 {
      position: absolute;
      bottom: 100px;
      left: -100px;
      width: 246.94px;
      height: 372.18px;
      background: linear-gradient(244.5deg, #3662FF 33.85%, rgba(255, 255, 255, 0) 168.31%);
      filter: blur(64px);
      transform: rotate(-128.97deg);
    }
    &__gradient-4 {
      position: absolute;
      top: -250px;
      right: 0;
      width: 180.05px;
      height: 1355.88px;
      background: linear-gradient(127.7deg, rgba(108, 255, 243, 0.73) 20.4%, rgba(35, 69, 193, 0.73) 60.49%);
      filter: blur(124px);
      transform: matrix(0.57, 0.82, -0.87, 0.49, 0, 0);
    }
    &__ellipse {
      position: absolute;
      background-image: url("../assets/images/2048/brands/stats-sphere.svg");
      background-repeat: no-repeat;
      background-size: 100%;
      top: 0;
      right: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
    }
  }
  &-info {
    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__circle {
      width: 500px;
      height: 500px;
      background: linear-gradient(225.88deg, rgba(255, 255, 255, 0.008) 21.9%, rgba(255, 255, 255, 0.007) 55.7%);
      backdrop-filter: blur(41px);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      //transform: rotate(60deg);
      z-index: 1;
      &-container {
        position: relative;
        padding-right: 120px;
      }
      &-small {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
      }
      &::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 50%;
        padding: 1px; /* control the border thickness */
        background: linear-gradient(261.17deg, rgba(1, 241, 160, 0.4) 4.29%, rgba(1, 182, 231, 0.4) 56.73%);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
      }
    }
    &__title {
      margin-left: 100px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 48px;
      line-height: 120%;
      color: #FEFEFE;
      span {
        background: linear-gradient(97.04deg, #7CFFE4 13.56%, #3763FF 91.67%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
    &__block {
      display: flex;
      max-width: 720px;
      flex-wrap: wrap;
    }
    &__item {
      padding: 20px 32px;
      width: 350px;

      img {
        width: 140px;
      }
      p {
        margin-top: 20px;
        font-weight: 500;
        font-size: 20px;
        line-height: 150%;
        color: #D9E9ED;
      }
    }
  }
  &-form {
    position: relative;
    padding-bottom: 320px;
    padding-top: 350px;
    &__wrapper {
      h3 {
        font-weight: 500;
        font-size: 48px;
        line-height: 120%;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: 48px;
        margin-top: 48px;
      }
    }
    &__bg-gradient {
      position: absolute;
      z-index: -1;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -40%);
      width: 100%;
    }
    &__component {
      &-wrapper {
        padding-left: 16px;
        padding-right: 16px;
        width: 100%;
        position: relative;
      }
      position: relative;
      margin-left: auto;
      margin-right: auto;
      max-width: 1248px;
      border-radius: 40px;
      padding: 56px 56px 56px 56px;
      background: rgba(22, 37, 54, 0.6);
      border: 1px solid rgba(22, 37, 54, 0.6);
      backdrop-filter: blur(76.5px);
      @media screen and (max-width: 768px) {
        padding: 40px 16px 40px 16px;
        border-radius: 24px;
      }
    }
  }
}

@media screen and (max-width: 1700px) {
  .brands {
    &-header {
      &__text {
        margin-right: 170px;
      }
    }
  }
}

@media screen and (max-width: 1700px) {
  .brands {
    &-header {
      &__text {
        margin-right: 100px;
      }
    }
  }
}

@media screen and (max-width: 1440px){
  .brands {
    &-header {
      &__text {
        margin-left: -100px;
      }
    }
    &-stats {
      &__block {
        &-wrapper {
          padding-left: 80px;
          padding-right: 80px;
        }
      }
      &__ellipse {
        top: 200px;
        background-image: url("../assets/images/1280/brands/stats-sphere.svg");
      }
    }
    &-info {
      &__wrapper {
        padding-left: 40px;
        padding-right: 40px;
      }
      &__circle {
        &-container {
          padding-right: 50px;
        }
      }
      &__item {
        padding: 16px 24px;
        img {
          width: 100px;
        }
      }
    }
    &-form {
      padding-bottom: 200px;
      padding-top: 200px;
    }
  }
}

@media screen and (max-width: 1313px) {
  .brands {
    &-header {
      &__text {
        max-width: 600px;
        margin-right: 70px;
      }
      &__title {
        font-size: 52px;
      }
      &__description {
        margin-top: 32px;
        font-size: 20px;
      }
    }
  }
}

@media screen and (max-width: 1280px) {
  .brands {
    &-stats {
      //&__ellipse {
      //  top: 200px;
      //  background-image: url("../assets/images/1280/brands/stats-sphere.svg");
      //}
    }
    &-form {
      padding-bottom: 150px;
      padding-top: 150px;
    }
  }
}

@media screen and (max-width: 1330px){
  .brands {
    &-info {
      &__wrapper {
        padding-left: 40px;
        padding-right: 40px;
        flex-direction: column;
      }
      &__circle {
        &-container {
          padding-right: 0px;
        }
      }
      &__block {
        margin-top: 40px;
        max-width: 800px;
      }
      &__item {
        width: 400px;
        padding: 24px 40px;
        img {
          width: 72px;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px){
  .brands {
    &-header {
      &__img {
        margin-left: -80px;
        margin-top: -20px;
      }
      &__text {
        margin-left: -100px;
        margin-right: 70px;
      }
      &__title {
        font-size: 48px;
      }
      &__description {
        font-size: 20px;
      }
    }
    &-stats {
      &__wrapper {

      }
      &__block {
        &-wrapper {

        }
        h3 {
          font-size: 48px;
        }
        p {
          font-size: 20px;
        }
      }
    }
  }
}

@media screen and (max-width: 1024px){
  .brands {
    &-header {
      &__text {
        margin-left: -80px;
      }
      &__title {
        font-size: 42px;
      }
      &__description {
        font-size: 16px;
      }
    }
    &-stats {
      &__gradient-1 {
        display: none;
      }
    }
    &-form {
      padding-bottom: 100px;
      padding-top: 100px;
      h3 {
        font-size: 40px;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .brands {
    &-info {
      &__block {
        margin-top: 40px;
        max-width: 640px;
      }
      &__item {
        width: 320px;
        padding: 16px 24px;
        img {
          width: 72px;
        }
      }
    }
    &-stats {
      &__wrapper {
        padding-bottom: 250px;
      }
      &__block {
        margin-top: 0 !important;
        margin-bottom: 48px !important;
        h3 {
          font-size: 40px;
        }
        p {
          font-size: 16px;
        }
        &:nth-child(1), &:nth-child(3) {
          margin-left: 0;
          margin-right: auto;
        }
        &:nth-child(2) {
          margin-right: 0;
          margin-left: auto;
        }
        &-wrapper {
          padding-left: 24px;
          padding-right: 24px;
          flex-direction: column;
        }
      }
      &__gradient-2 {
        width: 144.64px;
        height: 217.99px;
      }
      &__gradient-3 {
        width: 144.64px;
        height: 217.99px;
      }
      &__gradient-4 {
        display: none;
      }

      &__ellipse {
        top: 350px;
        background-image: url("../assets/images/768/brands/stats-sphere.svg");
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .hide-in-mobile {
    display: none;
  }
  .brands {
    &-header {
      padding-top: 100px;
      padding-bottom: 100px;
      overflow: hidden;
      &__block {
        display: flex;
        align-items: center;
        flex-direction: column-reverse;
        justify-content: center;
      }
      &__img {
        margin-left: auto;
        margin-top: 0px;
        width: 100%;
        &-wrapper {
          position: relative;
          max-width: 460px;
          &:before {
            content: '';
            position: absolute;
            width: 246.94px;
            bottom: -80px;
            left: 150px;
            height: 372.18px;
            background: linear-gradient(244.5deg, rgba(22, 121, 255, 0.38) 33.85%, rgba(254, 255, 213, 0.38) 57.66%, rgba(255, 255, 255, 0) 168.31%);
            filter: blur(64px);
            transform: rotate(-128.97deg);
            z-index: -1;
          }
          &:after {
            content: '';
            position: absolute;
            bottom: -80px;
            width: 246.94px;
            height: 372.18px;
            background: linear-gradient(244.5deg, rgba(22, 121, 255, 0.38) 33.85%, rgba(255, 255, 255, 0) 168.31%);
            filter: blur(64px);
            transform: rotate(-128.97deg);
            z-index: -1;
          }

        }
      }
      &__text {
        margin-left: auto;
        margin-right: auto;
        padding-left: 24px;
        padding-right: 24px;
        text-align: center;
        &.mobile {
          display: block;
        }
      }
      &__title {
        font-size: 42px;
      }
      &__description {
        font-size: 16px;
      }
    }
    &-info {
      &__block {
        margin-top: 40px;
        max-width: 640px;
        flex-direction: column;
      }
      &__wrapper {
        padding-left: 24px;
        padding-right: 24px;
      }
      &__circle {
        width: 328px;
        height: 328px;
        &-small {
          position: absolute;
          top: -62px;
          left: 50%;
          transform: translateX(-50%);
          z-index: -1;
        }
      }
      &__title {
        font-size: 32px;
        margin-left: 40px;
      }
      &__item {
        width: unset;
        padding: 16px 24px;
        display: flex;
        align-items: center;
        img {
          width: 72px;
          margin-right: 24px;
        }
        p {
          margin-top: 0;
        }
      }
    }
    &-form {
      &__bg-gradient {
        transform: translate(-50%, -80%);
      }
      h3 {
        font-size: 32px;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .brands {
    &-stats {
      &__ellipse {
        top: 450px;
      }
    }
    &-form {
      &__bg-gradient {
        transform: translate(-50%, -90%);
      }
    }
  }
}

@media screen and (max-width: 450px) {
  .brands {
    &-form {
      &__bg-gradient {
        transform: translate(-50%, -100%);
      }
    }
  }
}
</style>
