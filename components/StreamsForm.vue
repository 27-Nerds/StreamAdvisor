<template>
  <form class="content-form" @submit.prevent="submitHandler">
    <div class="content-form__wrapper">
      <div class="content-form__element w-50 w-m-100">
        <BaseInput
            v-model="email"
            label="Електронна пошта"
            placeholder="Random@gmail.com"
            :isValid="isEmailValid"
        />
      </div>
      <div class="content-form__element w-50 w-m-100">
        <BaseInput
            v-model="twitch"
            label="Назва каналу Twitch"
            placeholder="Random"
            :isValid="isTwitchValid"
        />
      </div>
      <div class="content-form__element w-50 w-m-100">
        <BaseInput
            v-model="emailConfirm"
            label="Електронна пошта"
            placeholder="Random@gmail.com"
            :isValid="isEmailConfirmValid"
        />
      </div>
      <div class="content-form__element w-50 w-m-100">
        <BaseInput
            v-model="twitchConfirm"
            label="Назва каналу Twitch"
            placeholder="Random"
            :isValid="isTwitchConfirmValid"
        />
      </div>
      <div class="content-form__element w-100 p-0">
        <BaseTextarea
            v-model="message"
            label="Повідомлення"
            placeholder="Ваше повідомлення"
            :isValid="isMessageValid"
        />
      </div>
      <VButton class="outline-primary form-button">
        Надіслати
      </VButton>
    </div>
  </form>
</template>

<script>
import BaseInput from "./elements/BaseInput";
import BaseTextarea from "./elements/BaseTextarea";
import VButton from "./elements/VButton";
export default {
  name: "BrandsForm",
  components: {
    BaseInput,
    BaseTextarea,
    VButton
  },
  data() {
    return {
      email: '',
      twitch: '',
      emailConfirm: '',
      twitchConfirm: '',
      message: ''
    }
  },
  computed: {
    isEmailValid() {
      const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (this.email.match(validRegex)) {
        return true;
      } else {
        return false;
      }
    },
    isEmailConfirmValid() {
      return this.email === this.emailConfirm
    },
    isTwitchValid() {
      return this.twitch !== ''
    },
    isTwitchConfirmValid() {
      return this.twitchConfirm === this.twitch
    },
    isMessageValid() {
      return this.message !== ''
    }
  },
  methods: {
    submitHandler() {
      console.log('email', this.email)
      console.log('twitch', this.twitch)
      console.log('emailConfirm', this.emailConfirm)
      console.log('twitchConfirm', this.twitchConfirm)
      console.log('message', this.message)
      this.$mail.send({
        config: 'support',
        from: this.email,
        subject: 'Contact form message',
        text:  `${this.message}`,
      })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
