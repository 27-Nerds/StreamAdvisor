<template>
  <BaseElementWrapper
      :label="label"
      :is-valid="isValid"
      :checkValidation="checkValidation"
      :error-message="errorMessage"
  >
    <textarea
      :placeholder="placeholder"
      :value="modelValue"
      @input="inputHandler"
    ></textarea>
  </BaseElementWrapper>
</template>

<script>
import BaseElementWrapper from "./BaseElementWrapper";
export default {
  name: "BaseTextarea",
  components: {
    BaseElementWrapper
  },
  props: {
    modelValue: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    isValid: {
      type: Boolean
    },
    errorMessage: {
      type: String
    }
  },
  data() {
    return {
      checkValidation: false
    }
  },
  methods: {
    inputHandler(event) {
      this.checkValidation = true
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>
