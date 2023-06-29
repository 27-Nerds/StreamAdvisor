<template>
  <div class="partners">
    <div class="partners-wrapper">
      <h3 class="partners-header">Наші партнери</h3>
      <div class="partners-images">
        <img src="../../assets/images/nova.svg" alt="nova post">
        <img src="../../assets/images/silpo.svg" alt="siplo">
        <img src="../../assets/images/epic.svg" alt="epicenter">
        <img src="../../assets/images/allo.svg" alt="allo">
        <img src="../../assets/images/rozetka.svg" alt="rozetka">
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
  text-align: center;
  position: relative;
  &-wrapper {
    padding: 0px 0 40px;
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
    img {
      width: 250px;
      margin: 0 32px;
    }
  }
}

@media screen and (max-width: 1440px){
  .partners {
    &-images {
      img {
        width: 184px;
        margin: 0 28px;
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
        margin: 0 28px;
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
        margin: 20px 16px;
      }
    }
  }
}
</style>
