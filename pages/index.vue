<template>
  <div class="page">
    <StarsLayout />
    <VCursor />
    <div class="page-wrapper">
      <Header />
      <Kinesis/>
      <Cards />
      <div class="backgrounds">
        <div class="work-block__backgrounds">
          <Work />
          <Partners />
<!--          <div class="work-block__line" />-->
<!--          <div class="work-block__ellipse"/>-->
        </div>
        <Cases />
        <div class="cases-block__background-1" />
        <div class="cases-block__background-2"/>
      </div>
      <Contact />
    </div>
  </div>
</template>

<script>
import Kinesis from "../components/elements/Kinesis";
import Header from "../components/main/Header";
import Cards from "../components/main/Cards";
import Work from "../components/main/Work";
import Partners from "../components/main/Partners";
import Cases from "../components/main/Cases";
import Contact from "../components/main/Contact";
import VCursor from "../components/VCursor";
import StarsLayout from "../layouts/StarsLayout";
export default {
  name: "index.vue",
  components: {
    Contact,
    Header,
    Kinesis,
    Cards,
    Work,
    Partners,
    Cases,
    VCursor,
    StarsLayout
  },
}
</script>

<style scoped lang="scss">
.page {
  .page-wrapper {
    max-width: 2048px;
    margin-left: auto;
    margin-right: auto;
  }
}
.backgrounds {
  position: relative;
  overflow: hidden;
  .work-block__backgrounds {
    position: relative;
  }
  .work-block__line {
    width: 100%;
    height: 1px;
    background-image: linear-gradient(99.66deg, rgba(255, 255, 255, 0) 17.78%, rgba(112, 237, 210, 0.7) 93.16%);
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  .work-block__ellipse {
    background-image: url("../assets/images/2048/home/ellipse-partners.svg");
    background-repeat: no-repeat;
    position: absolute;
    right: 0;
    bottom: -20px;
    width: 100%;
    height: 100%;
    background-position: bottom right;
    z-index: -1;
  }
  .cases-block__background-1 {
    background: linear-gradient(240.57deg, #3662FF 19.66%, rgba(255, 255, 255, 0) 134.65%);
    position: absolute;
    bottom: 100px;
    left: 0;
    filter: blur(94px);
    transform: rotate(-128.97deg);
    width: 272.66px;
    height: 485.99px;
    z-index: -1;
  }
  .cases-block__background-2 {
    background: linear-gradient(234.11deg, rgba(254, 251, 225, 0.38) 18.35%, rgba(255, 255, 255, 0) 175.91%);
    filter: blur(100px);
    transform: rotate(-128.97deg);
    position: absolute;
    bottom: 200px;
    left: 150px;
    width: 180.58px;
    height: 582.67px;
    z-index: -1;
  }
}

@media screen and (max-width: 1920px) {
  .backgrounds {
    .work-block__ellipse {
      background-image: url("../assets/images/1920/home/ellipse-partners.svg");
    }
  }
}

@media screen and (max-width: 1440px) {
  .backgrounds {
    .work-block__ellipse {
      background-image: url("../assets/images/1440/home/ellipse-partners.svg");
    }
  }
}

@media screen and (max-width: 1280px) {
  .backgrounds {
    .work-block__ellipse {
      background-image: url("../assets/images/1280/home/ellipse-partners.svg");
    }
  }
}

@media screen and (max-width: 650px){
  .work-block__line {
    display: none;
  }
  .work-block__ellipse {
    display: none;
  }
}
</style>
