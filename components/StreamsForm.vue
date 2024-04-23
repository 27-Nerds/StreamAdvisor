<template>
  <form class="content-form" @submit.prevent="submitHandler" ref="form">
    <div class="content-form__wrapper">
      <div class="content-form__element w-50 w-m-100">
        <BaseInput
            v-model="email"
            label="Електронна пошта"
            :isValid="isEmailValid"
        />
      </div>
      <div class="content-form__element w-50 w-m-100">
        <BaseInput
            v-model="youtube"
            label="Назва каналу Youtube"
            :isValid="true"
        />
      </div>
      <div class="content-form__element w-50 w-m-100">
        <BaseInput
            v-model="discord"
            label="Discord ID"
            :is-valid="true"
        />
      </div>
      <div class="content-form__element w-50 w-m-100">
        <BaseInput
            v-model="twitch"
            label="Назва каналу Twitch"
            :is-valid="true"
        />
      </div>
      <div class="content-form__element w-100 p-0">
        <BaseTextarea
            v-model="message"
            label="Повідомлення"
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
import VMessage from "./VMessage.vue";
export default {
  name: "BrandsForm",
  components: {
    BaseInput,
    BaseTextarea,
    VButton,
    VMessage
  },
  setup () {
    const trackEvent = useTrackEvent
    return {
      trackEvent
    }
  },
  data() {
    return {
      email: '',
      twitch: '',
      discord: '',
      youtube: '',
      message: '',
      requestMessage: {},
      showMessage: false
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
    isYoutubeValid() {
      return this.youtube !== ''
    },
    isTwitchValid() {
      return this.twitch !== ''
    },
    isDiscordValid() {
      return this.discord !== ''
    },
    isMessageValid() {
      return this.message !== ''
    }
  },
  methods: {
    async submitHandler() {
      const formData = new FormData()
      formData.append('email', this.email)
      formData.append('twitch', this.twitch)
      formData.append('youtube', this.youtube)
      formData.append('discord', this.discord)
      formData.append('message', this.message)
      const response = await this.$axios.post('https://formspree.io/f/mnqkaglw', formData)
      if (response.data.ok) {
        this.$emit('showMessage', true)
        this.trackEvent('form-submitted', { type: 'streams' })
        this.$refs.form.reset()
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
