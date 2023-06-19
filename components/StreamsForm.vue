<template>
  <form class="content-form" @submit.prevent="submitHandler">
    <div class="content-form__wrapper">
      <div class="content-form__element w-50 w-m-100">
        <BaseInput
            error-message="test error"
            label="ПІБ"
            placeholder="Василь Шевченко"
        />
      </div>
      <div class="content-form__element w-50 w-m-100">
        <BaseInput
            error-message="test error"
            label="Електронна пошта"
            placeholder="Random@gmail.com"
        />
      </div>
      <div class="content-form__element w-50 w-m-100">
        <BaseInput
            error-message="test error"
            label="Країна"
            placeholder="Оберіть країну"
        />
      </div>
      <div class="content-form__element w-50 w-m-100">
        <BaseInput
            error-message="test error"
            label="Номер телефону"
            placeholder="+380 (00) 000-00-00"
        />
      </div>
      <div class="content-form__element w-50 w-m-100">
        <BaseInput
            error-message="test error"
            label="Назва посади"
            placeholder="Маркетолог"
        />
      </div>
      <div class="content-form__element w-50 w-m-100">
        <BaseInput
            error-message="test error"
            label="Назва компанії"
            placeholder="Василь та Партнери"
        />
      </div>
      <div class="content-form__element w-100 p-0">
        <BaseTextarea
            v-model="message"
            label="Повідомлення"
            error-message="test error"
            placeholder="Ваше повідомлення"
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
  name: "StreamsForm",
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
    }
  }
}
</script>

<style scoped lang="scss">
</style>
