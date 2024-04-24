<template>
  <div class="partners" id="partners">
    <div class="partners-wrapper">
      <h3 class="partners-header">Наші партнери</h3>
      <div class="partners-images">
        <NuxtImg src="/partners/dominos.svg" alt="dominos"/>
        <NuxtImg src="/partners/doritos.svg" alt="doritos"/>
        <NuxtImg src="/partners/energy-black.svg" alt="energy-black"/>
        <NuxtImg src="/partners/exmo.svg" alt="exmo"/>
        <NuxtImg src="/partners/kfc.svg" alt="kfc"/>
        <NuxtImg src="/partners/kite.svg" alt="kite"/>
        <NuxtImg src="/partners/logitech.svg" alt="logitech"/>
        <NuxtImg src="/partners/optima.svg" alt="optima"/>
        <NuxtImg src="/partners/oreo.svg" alt="oreo"/>
        <NuxtImg src="/partners/pepsi.svg" alt="pepsi"/>
        <NuxtImg src="/partners/uklon.svg" alt="uklon"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Partners"
}
</script>

<style scoped lang="scss">
.partners {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  position: relative;
  padding-top: 100px;
  &-wrapper {
    padding: 0px 0 20px;
  }
  &-header {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 120%;
    color: #FEFEFE;
    margin-bottom: 102px;
  }
  &-images {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    img {
      height: 90px;
      margin: 24px 32px;
    }
  }
}

@media screen and (max-width: 1440px){
  .partners {
    &-images {
      img {
        width: 184px;
        margin: 4px 28px;
      }
    }
  }
}

@media screen and (max-width: 1280px){
  .partners {
    &-images {
      flex-wrap: wrap;
      img {
        width: 148px;
        margin: 4px 28px;
      }
    }
  }
}
@media screen and (max-width: 650px){
  .partners {
    &-wrapper {
      padding-bottom: 0;
    }
    &-header {
      font-weight: 500;
      font-size: 32px;
      line-height: 120%;
      margin-bottom: 12px;
    }
    &-images {
      img {
        width: 80px;
        height: auto;
        margin: 20px 16px;
      }
    }
  }
}
</style>
