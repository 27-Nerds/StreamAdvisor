<template>
  <div class="footer">
    <div class="line"/>
    <div class="footer-info">
      <span class="footer-info__company">
        <img src="../assets/images/copy.svg" alt="">
        2023 StreamAdvisor
      </span>
      <span class="footer-info__email">welcome@streamadvisor.com.ua</span>
    </div>
    <div class="footer-links">
      <NuxtLink class="footer-link" to="/policy">
        Privacy Policy
      </NuxtLink>
      <NuxtLink class="footer-link" to="/terms">
        Terms of use
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="scss">
.line {
  position: absolute;
  width: 100%;
  height: 1px;
  background-image: radial-gradient(51.47% 99.69% at 41.79% 11.16%, #85FFC9 0%, #0091FF 42.04%, #2F50FD 100%);
  top: 0;
  left: 0;
}
.footer {
  background: rgba(14, 16, 23, 0.7);
  backdrop-filter: blur(50px);
  padding: 52px 26px 52px 32px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  &-info {
    &__company {
      display: flex;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 141.52%;
      color: #FFFFFF;
      img {
        margin-right: 4px;
      }
    }
    &__email {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 141.52%;
      color: rgba(255, 255, 255, 0.7);
      margin-left: 24px;
    }
  }
  &-links {
    display: flex;
  }
  &-link {
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 141.52%;
    color: rgba(255, 255, 255, 0.7);
    &:first-child {
      margin-right: 18px;
    }
  }
}
@media screen and (max-width: 768px){
  .footer {
    padding: 23px 26px 29px 26px;
    &-info {
      &__company {
        font-size: 16px !important;
        img {
          margin-right: 4px;
        }
      }
      &__email {
        font-size: 12px !important;
      }
    }
    &-links {
      display: none;
    }
  }
}
</style>
