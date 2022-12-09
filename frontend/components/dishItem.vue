<template>
  <div
    class="dish__item"
  >
    <div class="dish__image-container"
      :style="{
        backgroundImage: `url(${dishImage})`
      }"
    />
    <div class="dish__content">
      <p class="dish__title">
        {{ dish.title }}
      </p>
      <span
        v-if="dish.weight"
        class="dish__weight"
      >
        {{ dish.weight + 'гр' }}
      </span>
      <p class="dish__price">
        {{ dish.price + 'руб' }}
      </p>
    </div>
    <button
      v-if="dish.active"
      class="dish__button"
    />
  </div>
</template>

<script>
export default {
  props: {
    dish: {
      required: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
    dishImage () {
      return this.dish?.image ?? '/Group6.jpg'
    }
  }
}
</script>

<style lang="scss" scoped>
  .dish__item{
    cursor: pointer;
    width: 199px;
    border-radius: 24px;
    overflow: hidden;
    font-family: Inter, sans-serif;
    color: #191A1C;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    box-sizing: border-box;
    transition-property: box-shadow;
    transition-duration: .2s;
    transition-timing-function: ease-in-out;
    background-color: #fff;

    &:hover{
      box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.12);
    }

    &--disabled{
      opacity: 0.6
    }
  }

  .dish__image-container{
    width: 199px;
    height: 199px;
    background-size: cover;
    background-position: center center;
  }

  .dish__content{
    margin: 8px 10px;
  }

  .dish__weight{
    color: #A2AEBC;
    font-weight: 500;
  }

  .dish__price{
    font-weight: 700;
    font-size: 22px;
    line-height: 32px;
    color: #191A1C;
  }

  .dish__button{
    margin: 8px 10px;
    box-sizing: border-box;
    outline: none;
    background-color: #EDF1F5;
    box-shadow: none;
    border: none;
    border-radius: 12px;
    width: calc(100% - 20px);
    padding: 10px;
    height: 36px;
    background-image: url('/icons/+.svg');
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>