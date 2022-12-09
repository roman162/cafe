<template>
  <div
    class="modal-window"
    @click.stop="closeModal"
  >
    <div class="modal-container">
      <slot></slot>
      <span class="icon-close"></span>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    document.body.style.overflow = 'hidden'
  },
  beforeDestroy () {
    document.body.style.overflow = 'visible'
  },
  methods: {
    closeModal (event) {
      if (event.target === document.querySelector('.modal-window') || event.target === document.querySelector('.icon-close')) {
        this.$emit('modalVisible', false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal-window{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal-container{
    @include modal;
    margin: 0 30px;
    background-color: #fff;
    position: relative;
    min-width: 300px;
    max-width: 943px;
    width: auto;
    min-height: 100px;
    border-radius: 16px;
    z-index: 1000;

    @media screen and (max-width: $mobile){
      margin: 0;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100vw;
      max-height: 70vh;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }

  .icon-close{
    position: absolute;
    background-image: url('/icons/icon-close.svg');
    width: 24px;
    height: 24px;
    top: 0;
    right: -56px;
    background-position: center center;
    background-repeat: no-repeat;
    cursor: pointer;

    @media screen and (max-width: $tab) {
      top: 12px;
      right: 12px;
      background-image: url('/icons/icon-close-gray.svg');
      background-size: cover;
    }
  }
</style>
