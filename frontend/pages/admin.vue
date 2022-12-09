<template>
  <div class="main-page">
    <header
      class="main__header"
      :class="{
        'main__header--white': isAddedMenu
      }"
    >
      <dayToggle
        :day="currentDay"
        @changeToggle="changeToggle"
      />
      <div
        v-if="isAddedMenu"
        class="button__container"
      >
        <button
          class="new-dish"
          @click="changeVisibleAddedDish(true)"
        >
          Новое блюдо
        </button>
        <button
          class="public"
          @click="publicMenu"
        >
          Опубликовать
        </button>
      </div>
    </header>
    <main class="main__content">
      <div
        v-if="(currentDay === 'today' && todayMenu)"
        class="today__container"
      >
        <div class="menu__container">
          <dishList
            v-if="todayMenu"
            :isAdmin="true"
            :categories="todayMenu.categories"
            @pushDish="changeDish"
          />
        </div>
        <div class="all__container">
          <orderList
            :orderList="todayMenu.orders"
          />
        </div>
      </div>
      <div
        v-else
        class="tomorrow__container"
      >
        <div
          v-if="!menuCategories"
          class="tomorrow__button-initialize-container"
        >
          <button
            class="tomorrow__button-initialize"
            @click="initializeMenu"
          >
            Добавить меню
          </button>
        </div>
        <div
          v-else
          class="tomorrow-menu__container"
        >
          <div class="menu__container">
            <dishList
              :isAdmin="true"
              :categories="menuCategories"
              @pushDish="changeDish"
            />
          </div>
          <div class="all__container">
            <dishList
              :isAdmin="true"
              :categories="categories"
              @pushDish="changeDish"
            />
          </div>
        </div>
      </div>
    </main>
    <modalWindow
      v-if="isAddedDish"
      @modalVisible="changeVisibleAddedDish"
    >
      <addDish
        :categories="categories"
        @closeModal="changeVisibleAddedDish"
      />
    </modalWindow>
  </div>
</template>

<script>
import CategoriesList from '~/components/categoriesList.vue';
import DishList from '~/components/dishList.vue';


export default {
  components: { CategoriesList, DishList },
  data () {
    return {
      categories: null,
      menuCategories: null,
      isAddedMenu: true,
      isAddedDish: false,
      currentDay: 'today',
      dishKey: null,
      menus: null,
      todayMenu: null
    }
  },
  async created () {
    await this.$axios.get('http://localhost:3000/categories/categories')
      .then((result) => {
        this.categories = result.data
      })
      .catch((error) => {
        console.log(error)
      })
    await this.$axios.get('http://localhost:3000/menu/menus')
      .then((result) => {
        this.menus = result.data
        const date = new Date(Date.now() + 86400000).toLocaleDateString()
        const todayDate = new Date(Date.now()).toLocaleDateString()
        const menu = this.menus.find(menu => menu.date === date)
        this.todayMenu = this.menus.find(menu => menu.date === todayDate)
        if (menu) {
          this.menuCategories = menu.categories 
        } else {
          this.initializeMenu()
        }
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    publicMenu () {
      const data = {
        date: new Date(Date.now() + 86400000).toLocaleDateString(),
        categories: this.menuCategories
      }
      this.$axios.post('http://localhost:3000/menu/menu', data)
        .then((result) => {
          console.log(result.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    initializeMenu () {
      this.menuCategories = []
      let i = 0
      for (const category of this.categories) {
        this.menuCategories.push({...category})
        this.menuCategories[i].dishes = []
        i++
      }
    },
    changeToggle (day) {
      this.currentDay = day
    },
    changeVisibleAddedDish (value) {
      this.isAddedDish = value
    },
    changeDish (dish) {
      if (!this.dishKey && dish) {
        this.dishKey = true
        if (dish) {
          const cat = this.menuCategories.find(category => category.url === dish.category)
          if (!cat.dishes.includes(dish)) {
            cat.dishes.push(dish)
          } else {
            const index = cat.dishes.findIndex(dishItem => dishItem.title === dish.title)
            cat.dishes.splice(index, 1)
          }
        }
        setTimeout(() => {
          this.dishKey = null
        }, 100)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .main__page{
    max-height: 100vh;
  }
  .main__header{
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15px 64px;

    &--white{
      background-color: #fff;
      padding: 10px 32px;
    }
  }

  .main__content{
    max-width: 1680px;
    max-height: calc(100vh - 92px);
    margin: 0 auto;
  }
  .button__container{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .new-dish{
    @include button;
    background-color: $background;
    color: $text-main;
    font-size: 24px;
    line-height: 24px;
    padding: 18px 32px;
    margin-right: 12px;

    &:hover{
      background-color: $background;
      color: $primary-action;
    }
  }
  .public{
    @include button;
    font-size: 24px;
    line-height: 24px;
    padding: 18px 32px;
  }

  .tomorrow__button-initialize-container{
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tomorrow__button-initialize{
    @include button;
  }

  .tomorrow-menu__container{
    display: flex;
    padding: 24px 0;
    overflow: scroll;
  }

  .today__container{
    display: flex;
    padding: 24px 0;
  }

  .menu__container{
    border-right: 1px solid #CAD3DC;
    width: 50%;
    padding-right: 52px;
  }

  .all__container{
    width: 50%;
    padding-left: 52px;
  }
</style>
