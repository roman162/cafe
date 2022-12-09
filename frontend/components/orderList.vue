<template>
  <div
    class="order__container"
  >
    <div class="order__title-container">
      <p class="order__name">
        Имя
      </p>
      <p class="order__number">
        Номер заказа
      </p>
      <p class="order__time">
        Время
      </p>
      <p class="order__unmount">
        Сумма
      </p>
    </div>
    <ul class="order__list">
      <li
        class="order__item"
        v-for="(order, index) of orderList"
        :key="index"
      >
        <p class="order__name">
          {{ `${index + 1} ${order.user}`}}
        </p>
        <p class="order__number">
          {{ index + 1 }}
        </p>
        <p class="order__time">
          {{ `12:${order.line < 10 ? '0' + order.line : order.line}` }}
        </p>
        <p class="order__unmount">
          {{ order.price }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    orderList: {
      required: true
    }
  },
  mounted () {
    console.log(this.orderList)
  }
}
</script>

<style lang="scss" scoped>
  .order__title-container{
    display: flex;
    background-color: #DBE1E8;
    border-radius: 10px;
    padding: 12px 24px;
    color: #555E69;
  }

  .order__list{
    margin-top: 12px;
  }

  .order__item{
    display: flex;
    background-color: #fff;
    border-radius: 10px;
    padding: 24px;
    color: $text-main;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
  }

  .order__name{
    width: 30%;
  }

  .order__number{
    width: 20%;
  }

  .order__time{
    width: 20%;
  }

  .order__unmount{
    margin-left: auto;
  }
</style>
