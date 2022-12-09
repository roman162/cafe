<template>
  <div class="tray__container">
    <div
      class="tray__null"
      v-if="(trayList.length === 0)"
    >
      На подносе пусто
    </div>
    <div
      v-else
      class="tray__wrapper"
    >
      <p class="tray__title">
        На подносе
      </p>
      <ul class="tray__list">
        <li
          class="tray__item"
          v-for="(dish, index) of trayList"
          :key="index"
        >
          <span class="dish__category">
            {{ `${getCategory(dish)}: ` }}
          </span>
          <span class="dish__title">
            {{ dish.title }}
          </span>
          <span class="dish__price">
            {{ dish.price + ' ' + 'руб'}}
          </span>
          <span
            class="dish__button"
            @click="deleteItem(dish)"
          >
            <img src="/icons/close.svg" class="dish__button-container">
          </span>
        </li>
      </ul>
      <button
        class="tray__button"
        @click="getTrayModal(true)"
      >
        {{ `Оформить за ${totalPrice} руб.` }}
      </button>
    </div>
    <modalWindow
      v-if="visibleModal"
      @modalVisible="getTrayModal"
    >
      <div
        class="modal__send"
        v-if="!line"
      >
        <div class="modal__title">
          {{ modalTitle }}
        </div>
        <div class="modal__list-container">
          <ul class="tray__list">
            <li
              class="tray__item"
              v-for="(dish, index) of trayList"
              :key="index"
            >
              <span class="dish__category">
                {{ `${getCategory(dish)}: ` }}
              </span>
              <span class="dish__title">
                {{ dish.title }}
              </span>
              <span class="dish__price">
                {{ dish.price + ' ' + 'руб'}}
              </span>
              <span
                class="dish__button"
                @click="deleteItem(dish)"
              >
                <img src="/icons/close.svg" class="dish__button-container">
              </span>
            </li>
          </ul>
          <div class="modal__price">
            {{ `Итого: ${totalPrice}руб` }}
          </div>
        </div>
        <div class="button__container">
          <button
            class="button__item button__item--back"
            @click="getTrayModal(false)"
          >
            Назад
          </button>
          <button
            class="button__item"
            @click="publicOrder"
          >
            Встать в очередь
          </button>
        </div>
      </div>
      <div
        v-else
        class="modal__send"
      >
        <div class="modal__title">
          Ваш заказ оформлен
        </div>
        <div class="order__line">
          <div class="line__item">
            {{ line }}
          </div>
          <div class="line__title">
            Ваша очередь
          </div>
          <div class="line__time">
            {{ time }}
          </div>
        </div>
        <div class="button__container">
          <button
            class="button__item"
            @click="getTrayModal(false)"
          >
            Отлично
          </button>
        </div>
      </div>
    </modalWindow>
  </div>
</template>

<script>
export default {
  props: {
    trayList: {
      required: true
    },
    categories: {
      required: true
    }
  },
  data () {
    return {
      visibleModal: false,
      isSended: true,
      line: null
    }
  },
  computed: {
    totalPrice () {
      let price = 0
      for (const item of this.trayList) {
        price += Number(item.price)
      }
      return price
    },
    modalTitle () {
      const dishes = [
        'Блюдо', 'Блюда', 'Блюд'
      ]
      const total = this.trayList.length === 1 ? `${this.trayList.length} ${dishes[0]}` : this.trayList.length < 5 ? `${this.trayList.length} ${dishes[1]}` : `${this.trayList.length} ${dishes[2]}`
      return `${total}, на ${this.totalPrice} руб`
    },
    time () {
      if (this.line) {
        return `Примерное время 12:${this.line < 10 ? '0' + this.line : this.line}`
      }
    }
  },
  methods: {
    getCategory (dish) {
      const category = this.categories.find(category => category.url === dish.category)
      return category.title
    },
    deleteItem (dish) {
      this.$emit('deleteDish', dish)
    },
    getTrayModal (value) {
      this.visibleModal = value
    },
    publicOrder () {
      const user = localStorage.getItem('name')
      const data = {
        date: new Date(Date.now() + 86400000).toLocaleDateString(),
        dishes: this.trayList,
        price: this.totalPrice,
        user
      }
      this.$axios.post('http://localhost:3000/menu/order', data)
        .then((result) => {
          console.log(result.data)
          this.line = result.data.line
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .tray__container{
    background-color: #fff;
    border-radius: 40px;
    padding: 16px 24px;
  }

  .tray__null{
    width: 100%;
    height: 186px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $text-description;
    font-size: 32px;
    line-height: 44px;
    font-weight: 600;
  }

  .tray__wrapper{
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .tray__title{
    font-size: 32px;
    line-height: 44px;
    font-weight: 600;
    color: $text-main;
    margin-bottom: 20px;
  }

  .tray__item{
    font-size: 22px;
    line-height: 32px;
    font-weight: 500;
    display: flex;
    align-items: center;
    margin-bottom: 9px;
  }

  .dish__category{
    color: $text-description;
  }

  .dish__title{
    color: $text-main;
    margin-left: 8px;
  }

  .dish__price{
    margin-left: auto;
  }

  .dish__button{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 16px;
    cursor: pointer;
  }

  .dish__button-container{
    width: 24px;
    height: 24px;
  }

  .tray__button{
    @include button;
    margin-top: 45px;
    align-self: flex-end;
  }

  .modal__send{
    width: 700px;
    padding: 12px;
  }

  .modal__title{
    padding: 34px 24px;
    padding-bottom: 0;
    color: $text-main;
    font-weight: 800;
    font-size: 44px;
    line-height: 48px;
    margin-bottom: 32px;
  }

  .modal__list-container{
    background-color: #fff;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.12);
    border-radius: 32px;
    width: 100%;
    padding: 16px;
    padding-bottom: 27px;
    margin-bottom: 49px;
  }

  .modal__price{
    margin-top: 44px;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    color: $text-main;
  }

  .tray__item{
    padding-bottom: 12px;
    border-bottom: 1px solid #DBE1E8;

    &:last-child{
      border: none;
    }
  }

  .button__container{
    display: flex;
    justify-content: flex-end;
  }

  .button__item{
    @include button;
    font-size: 24px;
    line-height: 24px;
    padding: 18px 32px;
    margin-right: 12px;

    &--back{
      background-color: $background;
      color: $text-main;

      &:hover{
        background-color: $background;
        color: $primary-action;
      }
    }
  }

  .order__line{
    width: 100%;
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
