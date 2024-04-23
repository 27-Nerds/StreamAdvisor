<template>
  <form class="content-form" @submit.prevent="submitHandler" ref="form">
    <div class="content-form__wrapper">
      <div class="content-form__element w-50 w-m-100">
        <BaseInput
            v-model="user"
            label="ПІБ"
            :is-valid="isUserValid"
        />
      </div>
      <div class="content-form__element w-50 w-m-100">
        <BaseInput
            v-model="email"
            :is-valid="isEmailValid"
            label="Електронна пошта"
        />
      </div>
      <div class="content-form__element w-50 w-m-100">
        <BaseInput
            v-model="job"
            :is-valid="isJobValid"
            label="Назва посади"
        />
      </div>
      <div class="content-form__element w-50 w-m-100">
        <BaseInput
            v-model="companyName"
            :is-valid="isCompanyNameValid"
            label="Назва компанії"
        />
      </div>
      <div class="content-form__element w-50 w-m-100">
        <BasePhoneInput
            v-model="phoneNumber"
            :is-valid="isPhoneNumberValid"
            label="Номер телефону"
            placeholder="+380"
        />
      </div>
      <div class="content-form__element w-100 p-0">
        <BaseTextarea
            v-model="message"
            :is-valid="isMessageValid"
            label="Повідомлення"
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
import BasePhoneInput from "./elements/BasePhoneInput";
import BaseTextarea from "./elements/BaseTextarea";
import VButton from "./elements/VButton";
export default {
  name: "BrandsForm",
  components: {
    BaseInput,
    BaseTextarea,
    BasePhoneInput,
    VButton
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
      user: '',
      job: '',
      companyName: '',
      phoneNumber: '',
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
    isUserValid() {
      return this.user !== ''
    },
    isJobValid() {
      return this.job !== ''
    },
    isCompanyNameValid() {
      return this.companyName !== ''
    },
    isPhoneNumberValid() {
      return this.phoneNumber !== ''
    },
    isMessageValid() {
      return this.message !== ''
    }
  },
  methods: {
    async submitHandler() {
      const formData = new FormData()
      formData.append('email', this.email)
      formData.append('user', this.user)
      formData.append('job', this.job)
      formData.append('companyName', this.companyName)
      formData.append('phoneNumber', this.phoneNumber)
      formData.append('message', this.message)
      const response = await this.$axios.post('https://formspree.io/f/mknlwqkz', formData)
      if (response.data.ok) {
        this.$emit('showMessage', true)
        this.$refs.form.reset()
        this.trackEvent('form_submitted', { type: 'streams' })
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
