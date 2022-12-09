<template>
  <div class="toggle__container">
    <div
      class="toggle__item"
      :class="{
        'toggle__item--active': day === 'today'
      }"
      @click="changeToggle('today')"
    >
      <p class="toggle__title">
        Сегодня
      </p>
      <p class="toggle__date">
        {{ curDate(true) }}
      </p>
    </div>
    <div
      class="toggle__item"
      :class="{
        'toggle__item--active': day === 'tomorrow'
      }"
      @click="changeToggle('tomorrow')"
    >
      <p class="toggle__title">
        Предзаказ
      </p>
      <p class="toggle__date">
        {{ curDate(false) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    day: {
      type: String,
      default: 'today'
    }
  },
  methods: {
    curDate (isCurrent) {
      const date = isCurrent ? new Date() : new Date(Date.now() + 86400000)
      const month = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря'
      ]
      return `${date.getDate()} ${month[date.getMonth()]}`
    },
    changeToggle (day) {
      this.$emit('changeToggle', day)
    }
  }
}
</script>

<style lang="scss" scoped>
  .toggle__container{
    display: flex;
  }
  .toggle__item{
    margin-right: 36px;
    display: flex;
    flex-direction: column;
    color: $text-description;
    cursor: pointer;

    &--active{
      & .toggle__title{
        color: $text-main;
      }
    }
  }

  .toggle__title{
    font-weight: 800;
    font-size: 44px;
    line-height: 48px;
    margin-bottom: 2px;
  }

  .toggle__date{
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
  }
</style>
