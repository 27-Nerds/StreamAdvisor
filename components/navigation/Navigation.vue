<template>
  <nav class="navigation" ref="navigation">
    <NuxtLink class="navigation-logo" to="/">
      <img src="../../assets/images/navigation/Logo.svg" alt="logo">
    </NuxtLink>
    <div class="navigation-list">
      <NuxtLink class="navigation-list__item" :activeClass="'active'" to="/streams">
        Стрімерам
      </NuxtLink>
      <NuxtLink class="navigation-list__item"  :activeClass="'active'" to="/brands">
        Брендам
      </NuxtLink>
      <NuxtLink class="navigation-list__item"  :activeClass="'active'" to="/faq">
        FAQ
      </NuxtLink>
    </div>
    <div class="navigation-button">
      <VButton :classes="'text-button medium-text'" @click="login">
        Увійти
      </VButton>
      <VButton :classes="'primary medium-text'" @click="register">
        Зареєструватись
      </VButton>
    </div>
    <div class="navigation-burger" @click="showNav = true">
      <img src="../../assets/images/burger.svg" alt="burger">
    </div>
    <VButton :classes="'mobile-button primary medium-text'" @click="register">
      Почати зараз
    </VButton>

    <div class="mobile-navigation" v-show="showNav">
      <div class="mobile-navigation-blur" v-if="showNav" @click="showNav = false"></div>
      <div class="mobile-navigation-wrapper" :class="{ active: showNav }">
        <NuxtLink class="mobile-navigation-logo" to="/">
          <img src="../../assets/images/navigation/Logo.svg" alt="logo">
        </NuxtLink>
        <div class="mobile-navigation-list">
          <NuxtLink class="navigation-list__item" :activeClass="'active'" to="/streams" @click="showNav = false">
            Стрімерам
          </NuxtLink>
          <NuxtLink class="navigation-list__item" :activeClass="'active'" to="/brands" @click="showNav = false">
            Брендам
          </NuxtLink>
          <NuxtLink class="navigation-list__item" :activeClass="'active'" to="/faq" @click="showNav = false">
            FAQ
          </NuxtLink>
        </div>
        <div class="mobile-navigation-policy">
          <NuxtLink class="navigation-policy-item" to="/policy" :activeClass="'active'" @click="showNav = false">
            Privacy Policy
          </NuxtLink>
          <NuxtLink class="navigation-policy-item" to="terms" :activeClass="'active'" @click="showNav = false">
            Terms of use
          </NuxtLink>
        </div>
        <div class="mobile-navigation-button">
          <VButton :classes="'text-button medium-text'" @click="login">
            Увійти
          </VButton>
          <VButton :classes="'primary medium-text'" @click="register">
            Зареєструватись
          </VButton>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import VButton from "../elements/VButton";
export default {
  name: "Navigation",
  components: {VButton},
  data() {
    return {
      showNav: false
    }
  },
  created () {
    if (this.checkWindowObject()) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  unmounted () {
    if (this.checkWindowObject()) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    register() {
      window.open('https://streamadvisor-streamer.streamcoi.com/register/', 'blank')
      this.showNav = false
    },
    login() {
      window.open('https://streamadvisor-streamer.streamcoi.com/login', 'blank')
      this.showNav = false
    },
    checkWindowObject() {
      if (typeof window === 'undefined') return false

      if (window === null) return false

      return true
    },
    handleScroll (event) {
      const nav = this.$refs.navigation
      const doc = document.documentElement;
      const top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
      if (top > 0) {
        nav.className = `navigation with-bg`
      } else {
        nav.className = `navigation`
      }
    }
  }
}
</script>

<style lang="scss">
.v-button.mobile-button {
  display: none;
}
.navigation-burger {
  display: none;
}
.mobile-navigation {
  display: none;
}
.mobile-navigation-blur {
  display: none;
}
@media screen and (max-width: 1023px) {
  .navigation {
    &-logo {
      width: 109px;
    }
    &-burger {
      display: block;
    }
    &-list {
      display: none !important;
    }
    &-button {
      display: none !important;;
    }
  }
  .v-button.mobile-button {
    display: block;
  }
}

@media screen and (max-width: 768px) {
  .v-button.mobile-button {
    width: 120px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 12px;
      font-weight: 500;
      line-height: 1.2;
    }
  }
  .mobile-navigation {
    display: block;
    position: fixed;
    height: 100%;
    top: 0;
    left: 0px;
    width: 210px;
    z-index: 20;

    &-wrapper {
      width: 100%;
      height: 100%;
      background: #262B3E;
      padding: 27px 27px 38px;
      overflow-y: scroll;
      transform: translateX(-210px);
      transition: transform .4s ease;
      &.active {
        transform: translateX(0);
      }
    }
    &-logo {
      img {
        width: 104px;
      }
      margin-bottom: 86px;
    }
    &-list {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 24px;
      .navigation-list__item {
        margin-bottom: 32px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    &-policy {
      padding: 25px 5px;
      border-top: 1px solid #5B6793;
      border-bottom: 1px solid #5B6793;
      .navigation-policy-item {
        color: #D9E9ED;
        cursor: pointer;
        &:first-child {
          margin-bottom: 24px;
        }
      }
    }
  }
  .mobile-navigation-button {
    padding: 25px 0;
    .v-button.text-button {
      margin-bottom: 32px;
      padding: 0 0 0 5px;
      color: #69FFE5
    }
    .v-button.primary {
      width: 100%;
      height: 43px;
      font-size: 14px;
      padding: 16px 12px;
      span {
        font-weight: 500;
      }
    }
  }
  .mobile-navigation-blur {
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(#D9D9D9, 0.01);
    backdrop-filter: blur(3px);
    z-index: -1;
  }
}
</style>
