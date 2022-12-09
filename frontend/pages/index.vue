<template>
  <div>
    <div
      v-if="visibleModal"
      class="login__modal"
    >
      <div class="login__content">
        <div class="login__title-container">
          <div class="login__icon-container">
            <img src="/Emoji.svg" class="login__icon">
          </div>
          <div class="login__title">
            Привет, это кухня у лайма
          </div>
        </div>
        <div class="login__input-wrapper">
          <div class="login__input-container">
            <span class="login__input-text">
              Введите имя и фамилию
            </span>
            <input
              type="text"
              class="login__input"
              placeholder="Имя Фамилия"
              v-model="user"
            >
          </div>
          <button
            class="login__button"
            @click="setUser"
          >
            Продолжить
          </button>
        </div>
      </div>
    </div>
    <header class="index__header">
      <DayToggle
        :day="currentDay"
        @changeToggle="changeToggle"
      />
      <div
        class="user__container"
        @click="logout"
      >
        {{ this.user }}
      </div>
    </header>
    <div class="index-page">
      <div
        v-if="(currentDay === 'today' && !todayOrder)"
        class="content__container text__container"
      >
        <p>Вы ничего не заказывали</p>
      </div>
      <div
        v-else-if="(currentDay === 'today' && todayOrder)"
        class="content__container"
      >
        <orderInfo
          :order="todayOrder"
        />
      </div>
      <div
        v-else-if="(currentDay === 'tomorrow' && !tomorrowOrder && tomorrowMenu)"
        class="content__container dish__container"
      >
        <div class="dish__notification">
          Предзаказ доступен до 12:00
        </div>
        <div class="dish__wrapper">
          <div
            class="dish__list-container"
          >
            <DishList
              :categories="tomorrowMenu.categories"
              @pushDish="pushDish"
            />
          </div>
          <div class="tray__container">
            <trayList
              :trayList="trayList"
              :categories="tomorrowMenu.categories"
              @deleteDish="deleteDish"
            />
          </div>
        </div>
      </div>
      <div
        v-else-if="(currentDay === 'tomorrow' && tomorrowOrder && tomorrowMenu)"
        class="content__container"
      >
        <orderInfo
          :order="tomorrowOrder"
        />
      </div>
      <div
        v-else
        class="content__container text__container"
      >
        <p>Блюда пока готовятся</p>
      </div>
    </div>
  </div>
</template>

<script>
import DayToggle from '~/components/dayToggle.vue';
import DishList from '~/components/dishList.vue';

export default {
  components: { DishList, DayToggle },
  data () {
    return {
      trayList: [],
      menu: null,
      categories: null,
      user: null,
      currentDay: 'today',
      menus: null,
      todayOrder: null,
      tomorrowOrder: null,
      tomorrowMenu: null,
      todayMenu: null,
      visibleModal: true
    }
  },
  async mounted () {
    this.user = localStorage.getItem('name')
    if (this.user) {
      this.visibleModal = false
    }
    await this.$axios.get('http://localhost:3000/menu/menus')
      .then((result) => {
        this.menus = result.data
        const tomorrowDate = new Date(Date.now() + 86400000).toLocaleDateString()
        const todayDate = new Date(Date.now()).toLocaleDateString()
        this.todayMenu = this.menus.find(menu => menu.date === todayDate)
        if (this.todayMenu) {
          this.todayOrder = this.todayMenu.orders.find(order => order.user === this.user)
        }
        this.tomorrowMenu = this.menus.find(menu => menu.date === tomorrowDate)
        if (this.tomorrowMenu) {  
          this.tomorrowOrder = this.tomorrowMenu.orders.find(order => order.user === this.user)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    logout () {
      this.user = null
      localStorage.removeItem('name')
      this.visibleModal = true
    },
    pushDish (dish) {
      this.trayList.push(dish)
    },
    deleteDish (dish) {
      const index = this.trayList.findIndex(tray => tray.title === dish.title)
      this.trayList.splice(index, 1)
    },
    changeToggle (day) {
      this.currentDay = day
    },
    setUser () {
      localStorage.setItem('name', this.user)
      this.visibleModal = false
    }
  }
}
</script>

<style scoped lang="scss">
  .index-page{
    max-width: 1680px;
    margin: 0 auto;
  }

  .index__header{
    padding: 15px 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .user__container{
    padding: 8px 16px;
    background-color: #DBE1E8;
    border-radius: 40px;
    color: #171718;
    font-weight: 600;
    font-size: 32px;
    line-height: 44px;
    cursor: pointer;
  }

  .content__container{
    display: flex;
    min-height: calc(100vh - 72px);
    margin-top: 24px;
  }

  .text__container{
    align-items: center;
    justify-content: center;
    color: $text-description;
    font-weight: 600;
    font-size: 32px;
  }

  .dish__container{
    flex-direction: column;
    margin-top: 36px;
  }

  .dish__wrapper{
    display: flex;
    margin-top: 41px;
  }

  .dish__notification{
    color: $text-main;
    padding: 20px 24px;
    background-color: #DBE1E8;
    border-radius: 24px;
    color: $text-main;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
  }

  .dish__list-container{
    flex-grow: 1;
  }

  .tray__container{
    flex-shrink: 0;
    min-width: 445px;
  }

  .login__modal{
    width: calc(100vw - 80px);
    height: calc(100vh - 44px);
    position: fixed;
    top: 22px;
    left: 40px;
    background-color: #fff;
    border-radius: 40px;
    display: flex;
    align-items: stretch;
  }

  .login__content{
    width: 528px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 32px;
  }

  .login__title-container{
    display: flex;
    align-items: center;
    font-weight: 800;
    font-size: 48px;
    line-height: 52px;
    color: $text-main;
    margin-top: 48px;
    margin-bottom: 88px;
  }

  .login__icon-container{
    margin-right: 32px;
  }

  .login__input-container{
    font-weight: 500;
    font-size: 19.2px;
    line-height: 26px;
    color: $text-main;
    display: flex;
    flex-direction: column;
  }

  .login__input{
    @include input;
    margin-top: 6px;
  }

  .login__button{
    @include button;
    width: 100%;
    margin-top: 40px;
  }

  .login__input-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: auto;
  }
</style>
