<template>
  <div
    class="button__container"
  >
    <button
      v-if="day === 'today'"
      class="button"
    >
      Изменить меню
    </button>
  </div>
</template>

<script>
export default {
  props: {
    day: {
      type: String,
      default: 'today'
    }
  }
}
</script>

<style lang="scss" scoped>
  .button__container{
    display: flex;
    align-items: center;
  }

  .button{
    @include button;
  }
</style>