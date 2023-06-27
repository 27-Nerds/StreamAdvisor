<template>
  <StarsLayout />
  <div class="streams">
    <div class="streams-wrapper">
      <div class="streams-header">
        <div class="streams-header__info">
          <h1>Монетизуй свій <span>стрім</span></h1>
          <p>Ми надаємо можливість заробляти справжні гроші на стрімах. Обирай бренди, з якими хочеш співпрацювати, а наша система автоматично виведе рекламу під час трансляції.</p>
        </div>
        <div class="streams-header__image">
          <img src="../assets/images/2048/streamers/1.png" alt="">
        </div>
        <p class="streams-header__info-description--mobile">Ми надаємо можливість заробляти справжні гроші на стрімах. Обирай бренди, з якими хочеш співпрацювати, а наша система автоматично виведе рекламу під час трансляції.</p>
      </div>
      <div class="streams-info">
        <div class="streams-video">
          <div class="streams-video__wrapper">
            <div class="streams-video__gradients">
              <div class="streams-video__block-gradient-1" />
              <div class="streams-video__block-gradient-2" />
              <div class="streams-video__block">
                <div class="streams-video__block-content">
                  <img src="../assets/images/2048/streamers/icons/Twitch-4.svg" class="streams-video__block-images" alt="">
                  <img src="../assets/images/2048/streamers/icons/youtube.svg" class="streams-video__block-images" alt="">
                  <img src="../assets/images/2048/streamers/video-png.png" alt="">
<!--                  <div class="streams-video__controllers">-->
<!--                    <div class="streams-video__controllers-button">-->
<!--                      <img src="../assets/images/2048/streamers/player-button.svg" alt="">-->
<!--                    </div>-->
<!--                    <div class="streams-video__controllers-row" />-->
<!--                  </div>-->
                </div>
              </div>
            </div>
            <div class="streams-video-text">
              <span>Використовуєш TWITCH чи YOUTUBE? Можеш обрати обидва!</span>
            </div>
          </div>
        </div>
        <div class="streams-like">
          <div class="streams-like__wrapper">
            <img src="../assets/images/2048/streamers/like-line.svg" class="streams-like__line" alt="">
            <img src="../assets/images/2048/streamers/icons/Twitch-1.svg" class="streams-like__image first-image" alt="">
            <img src="../assets/images/2048/streamers/icons/Twitch.svg" class="streams-like__image second-image" alt="">
            <span class="streams-like__text">Це сподобається твоїй аудиторії, а фанати допоможуть тобі заробляти гроші та створювати більше контенту.</span>
            <img src="../assets/images/2048/streamers/icons/Twitch-2.svg" class="streams-like__image third-image" alt="">
            <img src="../assets/images/2048/streamers/icons/Twitch-3.svg" class="streams-like__image fourth-image" alt="">
          </div>
        </div>
        <div class="streams-form">
          <div class="streams-form__wrapper">
            <h3>Маєш питання?</h3>
            <p>Скористайся формою нижче або знайди відповіді на сторінці <NuxtLink to="/faq"><span>FAQ</span></NuxtLink> </p>
            <div class="streams-form__component-wrapper">
              <div class="streams-form__bg-gradient" id="streams-form__bg-gradient">
                <img src="../assets/images/2048/streamers/streamers-form.png" alt="">
              </div>
              <div class="streams-form__bg-image" id="streams-form__bg-image">
                <img src="../assets/images/2048/streamers/bg-spheres.png" alt="">
              </div>
              <div class="streams-form__component">
                <StreamsForm />
              </div>
            </div>
          </div>
        </div>
        <div class="streams-contact">
          <h3>Не вагайся!</h3>
          <p>Ти сам контролюєш все і вирішуєш, з якими брендами працювати і коли.</p>
          <VButton classes="primary" @click="register">Почати зараз</VButton>
        </div>
        <div class="streams-footer-bg">
          <img src="../assets/images/2048/streamers/5-footer.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarsLayout from "../layouts/StarsLayout";
import VButton from "../components/elements/VButton";
import StreamsForm from "../components/StreamsForm";
export default {
  name: "streams",
  components: {
    VButton,
    StarsLayout,
    StreamsForm
  },
  methods: {
    register() {
      window.open('https://streamer.instreamly.com/register/', 'blank')
    },
  }
}
</script>


<style lang="scss">
.streams {
  padding-top: 40px;
  overflow: hidden;
  position: relative;
  &-wrapper {

  }
  &-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    &__info {
      max-width: 840px;
      margin-right: 120px;
      padding-left: 120px;
      position: relative;
      z-index: 1;
      &-description--mobile {
        display: none;
      }
      h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 64px;
        line-height: 120%;
        color: #FEFEFE;
        span {
          background: radial-gradient(96.04% 190.69% at -2.78% 8.37%, #85FFC9 0%, #0091FF 42.04%, #2F50FD 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
      }
      &-description--mobile, p {
        margin-top: 48px;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 150%;
        color: #D9E9ED;
      }
    }
    &__image {
      max-width: 1030px;
      width: 100%;
      margin-right: -120px;
      img {
        width: 100%;
      }
    }
  }
  &-info {

  }
  &-video {
    padding-left: 120px;
    padding-right: 120px;
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__gradients {
      position: relative;
    }
    &__block {
      &-content {
        display: block;
        background: linear-gradient(225.88deg, rgba(255, 255, 255, 0.08) 21.9%, rgba(255, 255, 255, 0.02) 55.7%);
        backdrop-filter: blur(112.5px);
        border-radius: 45px;
        padding: 24px;
        width: 742px;
      }
      &:before {
        content: '';
        bottom: -42px;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        width: 617.8px;
        height: 517.3px;
        background: linear-gradient(225.88deg, rgba(255, 255, 255, 0.08) 21.9%, rgba(255, 255, 255, 0.02) 55.7%);
        border-radius: 44px;
        z-index: -1;
      }
      margin-right: 120px;
      position: relative;
      &-images {
        position: absolute;
        &:nth-child(1) {
          top: -40px;
          left: -40px;
        }
        &:nth-child(2) {
          bottom: -40px;
          right: -40px;
        }
      }
      &-gradient {
        &-1 {
          position: absolute;
          bottom: 100px;
          left: 0;
          background: #FDFFDD;
          filter: blur(160.8px);
          width: 300.01px;
          height: 220.32px;
          z-index: -1;
        }
        &-2 {
          position: absolute;
          bottom: -50px;
          right: 0 ;
          background: #3A59B4;
          filter: blur(160.8px);
          transform: rotate(-165deg);
          width: 300px;
          height: 400px;
          z-index: -1;
        }
      }
    }
    &-text {
      max-width: 500px;
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 150%;
      color: #FFFFFF;
    }
    &__controllers {
      padding-top: 42px;
      padding-left: 34px;
      padding-right: 34px;
      display: flex;
      align-items: center;
      &-button {
        margin-right: 20px;
        img {

        }
      }
      &-row {
        margin-right: 10%;
        display: block;
        height: 3px;
        width: 100%;
        background: #fff;
      }
    }
  }
  &-like {
    padding-top: 250px;
    &__wrapper {
      max-width: 660px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 92px;
    }

    &__line {
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
    }
    &__image {
      width: 145px;
      &.first-image {
        margin-right: 4%;
        margin-left: auto;
        transform: rotate(28.12deg);
      }
      &.second-image {
        margin-left: 20%;
        margin-top: 48px;
        margin-right: auto;
        transform: rotate(-19.12deg);
        margin-bottom: 50px;
      }
      &.third-image {
        margin-top: 70px;
        margin-left: 0;
        margin-right: auto;
        transform: rotate(-18.12deg);
      }
      &.fourth-image {
        margin-top: 40px;
        transform: rotate(26.12deg);
        margin-right: 0;
        margin-left: auto;
      }
    }
    &__text {
      font-weight: 500;
      font-size: 32px;
      line-height: 150%;
      text-align: center;
      color: #FEFEFE;
    }
  }
  &-form {
    position: relative;
    padding-bottom: 320px;
    &__wrapper {
      h3 {
        font-weight: 500;
        font-size: 48px;
        line-height: 120%;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: 24px;
        margin-top: 48px;
      }
      p {
        font-weight: 500;
        font-size: 24px;
        line-height: 150%;
        text-align: center;
        color: #D9E9ED;
        margin-bottom: 24px;
        max-width: 598px;
        margin-left: auto;
        margin-right: auto;
        span {
          color: #69FFE5;
        }
      }
    }
    &__bg-gradient {
      position: absolute;
      z-index: -1;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -65%);
      width: 100%;
    }
    &__bg-image {
      width: 100%;
      position: absolute;
      z-index: -1;
      left: 50%;
      top: 0;
      transform: translate(-50%, -50%);
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
      @media screen and (max-width: 768px){
        padding: 40px 16px 40px 16px;
        border-radius: 24px;
      }
    }
  }
  &-contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 200px;
    h3 {
      font-weight: 500;
      font-size: 48px;
      line-height: 120%;
      text-align: center;
      color: #FFFFFF;
      margin-bottom: 24px;
    }
    p {
      max-width: 546px;
      padding-left: 24px;
      padding-right: 24px;
      font-weight: 500;
      font-size: 24px;
      line-height: 150%;
      text-align: center;
      color: #E0F9FF;
      margin-bottom: 64px;
    }
  }
  &-footer-bg {
    width: 100%;
    position: absolute;
    bottom: -1px;
    left: 0;
    z-index: -1;
  }
}
@media screen and (max-width: 1920px) {
  .streams {
    &-like {
      &__image {
        width: 136px;
      }
    }
  }
}
@media screen and (max-width: 1700px){
  .streams {
    &-header {
      &__info {
        margin-right: -120px;
        max-width: 840px;
      }
    }
    &-form {
      padding-bottom: 200px;

    }
  }
}

@media screen and (max-width: 1500px) {
  .streams {
    &-video {
      &__block {
        &-content {
          width: 522px;
        }
        &:before {
          width: 434px;
          height: 364px;
          bottom: -32px
        }
      }
    }
    &-like {
      padding-left: 24px;
      padding-right: 24px;
      &__image {
        width: 100px;
      }
    }
  }
}

@media screen and (max-width: 1313px){
  .streams {
    &-header {
      h1 {
        font-size: 52px;
      }
      p {
        margin-top: 32px;
        font-size: 20px;
      }
    }
    &-video {
      padding-top: 120px;
      &__block {
        &-content {
          width: 464px;
        }
        &:before {
          width: 386px;
          height: 324px;
          bottom: -28px
        }
      }
    }
    &-like {
      &__image {
        width: 90px;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .streams {
    &-header {
      padding-top: 100px;
      flex-direction: column;
      h1 {
        max-width: 400px;
      }
      &__info {
        margin-right: auto;
        margin-left: auto;
        padding: 0 24px;
        max-width: 840px;
        text-align: center;
        &-description--mobile {
          max-width: 700px;
          padding-left: 24px;
          padding-right: 24px;
          text-align: center;
          display: block;
        }
        p {
          display: none;
        }
      }
      &__image {
        margin-left: -50px;
        margin-right: -50px;
        max-width: 600px;
      }
    }
    &-like {
      padding-top: 100px;
    }
  }
}
@media screen and (max-width: 1024px) {
  .streams {
    &-video {
      padding-top: 120px;
      padding-right: 32px;
      padding-left: 32px;
      &__wrapper {
        flex-direction: column;
      }
      &__block {
        margin-right: auto;
        &-content {
          width: 464px;
        }
        &:before {
          width: 386px;
          height: 324px;
          bottom: -28px
        }
      }
      &-text {
        margin-top: 64px;
        font-size: 24px;
        text-align: center;
        padding-left: 30px;
        padding-right: 30px;
      }
    }
    &-like {
      &__text {
        font-size: 24px;
      }
    }
    &-form {
      padding-bottom: 150px;
      h3 {
        font-size: 40px;
      }
      p {
        font-size: 24px;
      }
    }
    &-contact {
      h3 {
        font-size: 40px;
      }
      p {
        font-size: 24px;
      }
    }
  }
}
@media screen and (max-width: 768px){
  .streams {
    &-header {
      &__info {
        h1 {
          font-size: 40px;
        }
        &-description--mobile {
          font-size: 20px;
        }
      }
    }
    &-video {
      &-text {
        font-size: 20px;
      }
    }
    &-like {
      &__wrapper {
        max-width: 400px;
      }
      &__image {
        width: 60px;
      }
      &__text {
        font-size: 20px;
      }
    }
    &-form {
      &__bg-gradient {
        display: none;
      }
      &__bg-image {
        transform: translate(-50%, -65%);
        width: 150%;
      }
    }
    &-form {
      padding-bottom: 100px;
      h3 {
        font-size: 32px;
      }
      p {
        font-size: 16px;
        max-width: 380px;
      }
    }
    &-contact {
      padding-bottom: 100px;
      h3 {
        font-size: 32px;
      }
      p {
        font-size: 16px;
        max-width: 380px;
      }
    }
  }
}
@media screen and (max-width: 570px) {
  .streams {
    &-video {
      padding-top: 120px;
      padding-right: 32px;
      padding-left: 32px;
      &__wrapper {
        flex-direction: column;
      }
      &__block {
        margin-right: auto;
        &-content {
          width: 100%;
          padding: 16px 16px 16px 16px;
        }
        &:before {
          width: 80%;
          height: 70%;
          bottom: -28px
        }
        &-images {
          width: 76px;
          height: 76px;
          &:nth-child(1) {
            top: -32px;
            left: -32px;
          }
          &:nth-child(2) {
            bottom: -32px;
            right: -32px;
            width: 100px;
            height: 100px;
          }
        }
      }
      &-text {
        margin-top: 64px;
        text-align: center;
        padding-left: 30px;
        padding-right: 30px;
      }
      &__controllers {
        padding-top: 7%;
        padding-left: 4%;
        padding-right: 4%;
        display: flex;
        align-items: center;
        &-button {
          margin-right: 20px;
          img {

          }
        }
        &-row {
          margin-right: 10%;
          display: block;
          height: 3px;
          width: 100%;
          background: #fff;
        }
      }
    }
  }
}
</style>
