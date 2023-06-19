<template>
  <button class="v-button" :class="classes">
      <span>
        <slot />
      </span>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  classes: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: false
  },
})
</script>

<script>
export default {
  name: "VButton"
}
</script>


