<template>
  <div class="order__container">
    <ul class="order__list">
      <li
        class="order__item"
        v-for="(dish, index) of order.dishes"
      >
        <DishItem
          :dish="dish"
        />
      </li>
    </ul>
    <div class="order__line">
      <div class="line__item">
        {{ order.line }}
      </div>
      <div class="line__title">
        Ваша очередь
      </div>
      <div class="line__time">
        {{ time }}
      </div>
      <div class="line__price">
        {{ price }}
      </div>
    </div>
  </div>
</template>

<script>
import DishItem from './dishItem.vue';

export default {
    props: {
        order: {
            required: true
        }
    },
    components: { DishItem },
    computed: {
      time () {
        return `Примерное время 12:${this.order.line < 10 ? '0' + this.order.line : this.order.line}`
      },
      price () {
        return `Итого: ${this.order.price} руб`
      }
    }
}
</script>

<style lang="scss" scoped>
  .order__container{
    display: flex;
    align-items: flex-start;
    width: 100%;
  }
  .order__list{
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    width: 100%;
  }

  .order__item{
    margin-right: 24px;
    margin-bottom: 24px;
  }

  .order__line{
    width: 445px;
    padding: 16px 24px;
    flex-shrink: 0;
    background-color: #fff;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .line__item{
    background-color: #C9F843;
    border-radius: 100px;
    padding: 12px 32px;
    font-size: 88px;
    font-weight: 800;
    line-height: 88px;
    color: $text-main;
    margin-bottom: 8px;
  }

  .line__title{
    font-weight: 600;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 4px;
  }

  .line__time{
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: $text-description;
    margin-bottom: 53px;
  }

  .line__price{
    background-color: $background;
    padding: 16px;
    width: 100%;
    color: $text-main;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    border-radius: 60px;
  }
</style>