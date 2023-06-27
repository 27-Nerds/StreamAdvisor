<template>
  <div class="message" v-if="showMessage">
    <div class="message-block">
      <span>Ваше повідомлення відправленно!</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "VMessage",
  props: {
    message: {
      type: String,
      required: true
    },
    showMessage: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style scoped lang="scss">
  .message {
    position: fixed;
    right: 20px;
    bottom: 20px;
    background: rgba(green, 0.3);
    border-radius: 8px;
    padding: 12px 16px;
    border: 1px solid rgba(green, 0.5);
    color: #fff;
    font-size: 12px;
    max-width: 320px;
  }
  @media screen and (max-width: 768px) {
    .message {
      top: 70px;
      right: unset;
      left: 50%;
      transform: translateX(-50%);
      bottom: unset;
    }
  }

</style>
