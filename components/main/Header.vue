<template>
  <div class="header">
    <div class="header-wrapper">
      <h1 class="header-title">Коли бренд зустрічається зі стрімерами</h1>
      <div class="header-video">
        <div class="header-video-block">
          <iframe width="100%" height="100%"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="scss">
// default styles
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 220px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    max-width: 100vw;
    width: 100%;
    height: 100%;
    bottom: -50%;
    left: 50%;
    transform: translate(-50%, -63%);
    background-image: url("../../assets/images/2048/home/1screen.png");
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: -50%;
    left: 50%;
    max-width: 100vw;
    width: 100%;
    height: 100%;
    transform: translate(-50%, 28%);
    background-image: url("./assets/images/2048/home/HeaderElipse.svg");
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
  }
  &-title {
    font-style: normal;
    font-weight: 400;
    font-size: 96px;
    line-height: 120%;
    text-align: center;
    color: #FFFFFF;
    max-width: 1337px;
    margin-bottom: 135px;
  }
  &-video {
    position: relative;
    background: linear-gradient(122.06deg, rgba(157, 255, 212, 0.2) 9.65%, rgba(0, 161, 255, 0.2) 69.25%);
    border-radius: 80px;
    padding: 10px;
    display: flex;
    align-items: center;
    max-width: 1124px;
    height: 565px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    &-block {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 80px;
      iframe {
        border-radius: 80px;
      }
    }
  }
}

@media screen and (max-width: 1920px){
  .header {
    padding-top: 140px;
    &:before {
      background-image: url("./assets/images/1920/home/1screen.png");
      transform: translate(-50%, -57%);
    }
    &:after {
      background-image: url("./assets/images/1920/home/HeaderElipse.svg");
      transform: translate(-50%, 32.5%);
    }
    &-title {
      max-width: 835px;
    }
    &-video {
      max-width: 940px;
      height: 460px;
    }
  }
}
@media screen and (max-width: 1800px) {
  .header {
    &-title {
      font-size: 72px;
      max-width: 1100px;
      padding-left: 32px;
      padding-right: 32px;
    }
    &:before {
      transform: translate(-50%, -68%);
    }
  }

}
@media screen and (max-width: 1440px){
  .header {
    padding-top: 95px;
    &:before {
      background-image: url("./assets/images/1440/home/1screen.png");
      transform: translate(-50%, -70%);
      background-size: cover;
    }
    &:after {
      background-image: url("./assets/images/1440/home/HeaderElipse.svg");
      transform: translate(-50%, 16%);
    }
  }
}
@media screen and (max-width: 1312px) {
  .header {
    &:before {
      transform: translate(-50%, -72%);
      background-image: url("./assets/images/1280/home/1screen.png");
    }
    &:after {
      background-image: url("./assets/images/1280/home/HeaderElipse.svg");
      transform: translate(-50%, 14.5%);
    }
    &-title {
      font-size: 54px;
      line-height: 150%;
      margin-bottom: 80px;
      margin-top: 40px;
    }
  }
}
@media screen and (max-width: 1280px){
  .header {
    &:before {
      transform: translate(-50%, -76%);
      background-image: url("./assets/images/1280/home/1screen.png");
    }
    &:after {
      background-image: url("./assets/images/1280/home/HeaderElipse.svg");
    }
    &-title {

    }
    &-video {
      max-width: 835px;
      height: 414px;
    }
  }
}

@media screen and (max-width: 768px){
  .header {
    padding-top: 60px;
    padding-bottom: 80px;
    &:before {
      transform: translate(-50%, -67%);
      background-image: url("./assets/images/768/home/1screen.png");
      background-size: 100%;
    }
    &:after {
      background-image: url("./assets/images/768/home/HeaderElipse.svg");
      transform: translate(-50%, 0%);
      z-index: -1;
    }
    &-title {
      max-width: 544px;
      padding-left: 15px;
      padding-right: 15px;
      font-size: 40px;
      margin-bottom: 80px;
    }
    &-video {
      border-radius: 30px;
      padding: 5px;
      width: 500px;
      height: 250px;
      &-block {
        border-radius: 30px;
        iframe {
          border-radius: 30px;
        }
      }
    }
  }
}
@media screen and (max-width: 560px){
  .header {
    &:before {
      transform: translate(-50%, -32%);
      background-image: url("./assets/images/mobile/home/1screen.png");
      background-size: auto 500px;
    }
    &:after {
      background-image: url("./assets/images/mobile/home/HeaderElipse.svg");
      transform: translate(-50%, 0%);
      z-index: -1;
    }
    &-title {
      max-width: 544px;
      padding-left: 15px;
      padding-right: 15px;
      font-size: 40px;
      margin-bottom: 40px;
    }
    &-video {
      border-radius: 30px;
      padding: 5px;
      width: 324.88px;
      height: 210.01px;
      &-block {
        border-radius: 30px;
        iframe {
          border-radius: 30px;
        }
      }
    }
  }
}
</style>
