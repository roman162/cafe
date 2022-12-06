<template>
  <div>
    <ul class="categories__list">
      <li
        class="category__item"
        v-for="(category, index) of dishList"
        :key="index"
      >
        <div class="category__title-container">
          <div class="category__icon-container">
            <img
              :src="category.icon"
              class="category__icon"
            >
          </div>
          <h2 class="category__title">
            {{ category.name }}
          </h2>
        </div>
        <div class="category__container">
          <HorizontalScroll
            :containerName="'dish__list'"
            :isArrow="false"
            @changeItem="pushDish"
          >
            <ul class="dish__list">
              <li
                class="dish__item"
                v-for="(dish, index) of category.dishes"
                :key="index"
                :data-index="(category.title + ':' +  index)"
              >
              <DishItem
                :dish="dish"
              />
              </li>
            </ul>
          </HorizontalScroll>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import DishItem from './dishItem.vue';
import HorizontalScroll from './horizontalScroll.vue';

export default {
  data() {
    return {
      categories: [
        {
          title: 'soup',
          name: 'Первое',
          icon: '/food/icons/soup.svg'
        }
      ]
    }
  },
  components: { DishItem, HorizontalScroll },
  computed: {
    dishes () {
      return this.$store.getters.GET_MENU
    },
    dishList () {
      const categories = this.categories
      for (const category of categories) {
        category.dishes = []
        for (const dish of this.dishes) {
          if (category.title === dish.category) {
            category.dishes.push(dish)
          }
        }
      }
      return categories
    }
  },
  methods: {
    pushDish (dish) {
      this.$emit('pushDish', dish)
    }
  }
}
</script>

<style lang="scss" scoped>
  .categories__list{
    list-style: none;
    padding: 0;
  }

  .category__title-container{
    display: flex;
    align-items: center;
  }

  .category__icon-container{
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
  }

  .category__title{
    font-size: 44px;
    line-height: 48px;
    font-weight: 800;
  }

  .category__icon{
    width: 100%;
  }
  .dish__list{
    list-style: none;
    padding: 0;
    display: inline-flex;
    position: relative;
  }

  .dish__item{
    margin-right: 24px;
  }
</style>
