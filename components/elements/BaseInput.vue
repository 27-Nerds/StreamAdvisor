<template>
  <BaseElementWrapper
    :label="label"
    :isValid="isValid"
    :checkValidation="checkValidation"
    :error-message="errorMessage"
  >
    <input
      type="text"
      class="base-input"
      :value="modelValue"
      @input="inputHandler"
      :placeholder="placeholder"
    >
  </BaseElementWrapper>
</template>

<script>
import BaseElementWrapper from "./BaseElementWrapper";

export default {
  name: "BaseInput",
  props: {
    label: {
      type: String,
      required: true,
    },
    errorMessage: {
      type: String,
      default: 'Обов’язкове поле'
    },
    modelValue: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    isValid: {
      type: Boolean,
    }
  },
  data() {
    return {
      checkValidation: false
    }
  },
  components: {
    BaseElementWrapper
  },
  methods: {
    inputHandler(event) {
      this.checkValidation = true
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
