<template>
  <div class="kinesis-animation">
    <kinesis-container
        perspective="1"
        :duration="100"
        class="kinesis-container"
        event="scroll">
      <kinesis-element
          class="kinesis-item first-item"
          :transformOrigin="'-10% -50%'"
          :strength="40"
          :originY="0"
          :event="'scroll'"
          type="translate">
        <img src="../../assets/images/gifs/1.gif" />
      </kinesis-element>
      <kinesis-element
          class="kinesis-item second-item"
          :transformOrigin="'-50% -50%'"
          :strength="30"
          type="translate">
        <img src="../../assets/images/gifs/2.gif" />
      </kinesis-element>
      <kinesis-element
          :transformOrigin="'center center'"
          :strength="30"
          type="div">
        <p class="kinesis-text"><span>StreamAdvisor</span> допомагає знайти партнерів для співпраці зі стрімерами у всіх сферах – від геймінгу до кулінарії та музики</p>
      </kinesis-element>
      <kinesis-element
          class="kinesis-item third-item"
          :transformOrigin="'80% -40%'"
          :originY="0"
          :strength="20"
          type="translate">
        <img src="../../assets/images/gifs/3.gif" />
      </kinesis-element>
      <kinesis-element
          class="kinesis-item fourth-item"
          :transformOrigin="'-25% -70%'"
          :strength="100"
          type="translate">
        <img src="../../assets/images/gifs/4.gif" />
      </kinesis-element>
      <kinesis-element
          class="kinesis-item fifth-item"
          :transformOrigin="'-30% -50%'"
          :strength="50"
          type="translate">
        <img src="../../assets/images/gifs/5.gif" />
      </kinesis-element>
      <kinesis-element
          class="kinesis-item sixth-item"
          :transformOrigin="'-40% -40%'"
          :strength="60"
          type="translate">
        <img src="../../assets/images/gifs/6.gif" />
      </kinesis-element>
      <kinesis-element
          class="kinesis-item seventh-item"
          :transformOrigin="'60% 90%'"
          :strength="50"
          type="translate">
        <img src="../../assets/images/gifs/7.gif" />
      </kinesis-element>
    </kinesis-container>
  </div>
</template>

<script>
import pkg from 'vue-kinesis';



export default {
  name: "Kinesis",
  // components: {
  //   KinesisContainer: pkg.KinesisContainer,
  //   KinesisElement: pkg.KinesisElement
  // }
}
</script>

<style scoped lang="scss">
.kinesis-animation {
  max-width: 2048px;
  margin-left: auto;
  margin-right: auto;
  .kinesis-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 650px 0 500px;
    position: relative;
    @media screen and (max-width: 1650px) {
      padding: 450px 0 350px;
    }
    .kinesis-text {
      color: #D9E9ED;
      max-width: 600px;
      text-align: center;
      font-size: 24px;
      padding-left: 24px;
      padding-right: 24px;
      span {
        // linear-gradient(270.63deg, #09FF93 9.48%, #F7FECA 90.02%)
        background: linear-gradient(118.16deg, #FEFFD7 -3.29%, #69FFE5 53.5%, #3662FF 99.36%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
    .kinesis-item {
      position: absolute;
      img {
        border-radius: 16px;
        @media screen and (max-width: 768px){
          border-radius: 8px;
        }
      }
      @media screen and (max-width: 1650px){
        img {
          width: 213px
        };
      }
      // верх первый
      &.first-item {
        left: 4%;
        top: 35%;
        @media screen and (max-width: 1300px){
            top: 25%
        }
      }
      // низ третий
      &.second-item {
        bottom: 18%;
        right: 15%;
        @media screen and (max-width: 1650px){
          bottom: 12%
        }
        @media screen and (max-width: 1300px){
          bottom: 17%
        }
      }
      // верх второй
      &.third-item {
        top: 20%;
        left: 30%;
        @media screen and (max-width: 1300px){
          top: 15%
        }
        @media screen and (max-width: 1100px){
          display: none;
        }
      }
      // верх третий
      &.fourth-item {
        top: 24%;
        right: 30%;
        @media screen and (max-width: 1300px){
          top: 14%
        }
        @media screen and (max-width: 1100px){
          right: 45%;
        }
      }
      // верх четвертый
      &.fifth-item {
        top: 30%;
        right: 7%;
        @media screen and (max-width: 1300px){
          top: 20%
        }
      }
      // низ первый
      &.sixth-item {
        bottom: 16%;
        left: 20%;
        @media screen and (max-width: 1650px){
          bottom: 16%
        }
        @media screen and (max-width: 1300px){
          bottom: 23%
        }
      }
      // низ второй
      &.seventh-item {
        bottom: 14%;
        left: 45%;
        @media screen and (max-width: 1650px){
          bottom: 12%
        }
        @media screen and (max-width: 1300px){
          bottom: 16%
        }
        @media screen and (max-width: 1100px){
          display: none;
        }
      }
    }
  }
}

@media screen and (max-width: 768px){
  .kinesis-animation {
    .kinesis-container {
      padding: 250px 0;
      .kinesis-item {
        img {
          width: 142px;
        }
      }
    }
  }
}

@media screen and (max-width: 560px){
  .kinesis-animation {
    .kinesis-container {
      padding: 350px 0;
      .kinesis-item {
        img {
          width: 107px;
        }
      }
    }
  }
}
</style>
