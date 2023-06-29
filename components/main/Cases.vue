<template>
  <div class="cases">
    <div class="cases-wrapper">
      <h3 class="cases-title">Кейси</h3>
      <div class="cases-slider">
        <swiper
            :effect="'cards'"
            :grabCursor="true"
            :modules="modules"
            navigation
            class="mySwiper"
        >
          <swiper-slide>
            <div class="cases-slide">
              <div class="cases-slide__wrapper">
                <div class="cases-slide__video">
                  <iframe width="100%" height="100%"
                          src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
                  </iframe>
                </div>
                <p class="cases-slide__title">Danio</p>
                <p class="cases-slide__description">Кампанія “Малий голод” для Danone</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="cases-slide">
              <div class="cases-slide__wrapper">
                <div class="cases-slide__video">
                  <iframe width="100%" height="100%"
                          src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
                  </iframe>
                </div>
                <p class="cases-slide__title">Danio</p>
                <p class="cases-slide__description">Кампанія “Малий голод” для Danone</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="cases-slide">
              <div class="cases-slide__wrapper">
                <div class="cases-slide__video">
                  <iframe width="100%" height="100%"
                          src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
                  </iframe>
                </div>
                <p class="cases-slide__title">Danio</p>
                <p class="cases-slide__description">Кампанія “Малий голод” для Danone</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="cases-slide">
              <div class="cases-slide__wrapper">
                <div class="cases-slide__video">
                  <iframe width="100%" height="100%"
                          src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
                  </iframe>
                </div>
                <p class="cases-slide__title">Danio</p>
                <p class="cases-slide__description">Кампанія “Малий голод” для Danone</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="cases-slide">
              <div class="cases-slide__wrapper">
                <div class="cases-slide__video">
                  <iframe width="100%" height="100%"
                          src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
                  </iframe>
                </div>
                <p class="cases-slide__title">Danio</p>
                <p class="cases-slide__description">Кампанія “Малий голод” для Danone</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="cases-slide">
              <div class="cases-slide__wrapper">
                <div class="cases-slide__video">
                  <iframe width="100%" height="100%"
                          src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
                  </iframe>
                </div>
                <p class="cases-slide__title">Danio</p>
                <p class="cases-slide__description">Кампанія “Малий голод” для Danone</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper'
import 'swiper/css/navigation';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

// import required modules
import { Controller, EffectCards } from 'swiper';

export default {
  name: 'Cases',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCards, Controller, Navigation]
    };
  },
};
</script>

<style lang="scss">
.cases {
  padding-top: 120px;
  &-wrapper {

  }
  .cases-slider {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }
  &-title {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 120%;
    color: #FEFEFE;
    margin-bottom: 36px;
    text-align: center;
    margin-top: 16px;
  }
  &-slide {
    width: 100%;
    height: 100%;
    text-align: left;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      background: linear-gradient(233.69deg, #7F7984 24.87%, #494952 70.57%);
      backdrop-filter: blur(100px);
      background-size: cover;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    &__wrapper {
      padding: 16px 16px 32px;
    }
    &__video {
      width: 100%;
      iframe {
        width: 100%;
        height: 100%;
        min-height: 409px;
        border: none;
        border-radius: 36px!important;
        @media screen and (max-width: 1400px){
          min-height: 300px;
        }
        @media screen and (max-width: 1100px){
          min-height: 280px;
        }
        @media screen and (max-width: 1024px){
          min-height: 291px;
        }
        @media screen and (max-width: 700px){
          min-height: 203px;
        }
      }
    }
    &__title {
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 150%;
      color: #FFFFFF;
      margin-bottom: 8px;
      margin-top: 8px;
      padding: 0 12px;

    }
    &__description {
      padding: 0 12px;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 150%;
      color: #D9E9ED;
    }
  }
}
.swiper {
  width: 100%;
  height: 100%;
  padding: 50px 350px 150px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: linear-gradient(225.88deg, rgba(255, 255, 255, 0.08) 21.9%, rgba(255, 255, 255, 0.02) 55.7%);
  border-radius: 36px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 40px;
    padding: 1px; /* control the border thickness */
    background: linear-gradient(261.17deg, rgba(1, 241, 160, 0.4) 4.29%, rgba(1, 182, 231, 0.4) 56.73%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 36px;
}
@media screen and (max-width: 1280px) {
 .swiper {
   padding-left: 250px;
   padding-right: 250px;
 }
}

@media screen and (max-width: 960px) {
  .swiper {
    padding-left: 150px;
    padding-right: 150px;
  }
}


@media screen and (max-width: 768px) {
  .cases {
    padding-top: 90px;
  }
  .swiper {
    padding-left: 150px;
    padding-right: 150px;
  }
}


@media screen and (max-width: 650px) {
  .swiper {
    max-width: 383px;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 42px;
    padding-right: 42px;
  }
}
.swiper-button-next, .swiper-button-prev {
  outline: none;
  width: 40px !important;
  height: 40px !important;
  top: unset;
  bottom:  40px;
  @media screen and (max-width: 650px){
    bottom: -10px;
  }
}
.swiper-button-prev {
  background: url("../../assets/images/arrow2.png");
  rotate: 180deg;
  background-size: contain;
  left: 50%;
  margin-left: -50px;
}
.swiper-button-next {
  background: url("../../assets/images/arrow2.png");
  background-size: contain;
  right: 50%;
  margin-right: -50px;
}
</style>
