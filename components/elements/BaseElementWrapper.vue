<template>
  <div class="form-element">
    <span class="form-element__label">{{ label }}</span>
    <div
        class="form-element__wrapper"
        :class="[{success: isValid && checkValidation, error: !isValid && checkValidation}]"
    >
      <slot/>
    </div>
    <div class="form-element__error" v-if="!isValid && checkValidation">
      <span>{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseFormWrapper",
  props: {
    label: {
      type: String,
      required: true
    },
    isValid: {
      type: Boolean
    },
    checkValidation: {
      type: Boolean
    },
    errorMessage: {
      type: String
    }
  }
}
</script>

<style lang="scss">
</style>
