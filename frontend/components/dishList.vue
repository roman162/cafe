<template>
  <div>
    <ul class="categories__list">
      <li
        class="category__item"
        v-for="(category, index) of categories"
        :key="index"
      >
        <div
          v-if="(category.dishes.length > 0)"
          class="category__title-container"
        >
          <div
            v-if="!isAdmin"
            class="category__icon-container"
          >
            <img
              :src="category.icon"
              class="category__icon"
            >
          </div>
          <h2 class="category__title">
            {{ category.title }}
          </h2>
        </div>
        <div class="category__container">
          <HorizontalScroll
            v-if="!isAdmin"
            :containerName="`dish__list--${category.url}`"
            :isArrow="false"
            @changeItem="pushDish"
          >
            <ul
              v-if="category.dishes.length > 0"
              class="dish__list"
              :class="`dish__list--${category.url}`"
            >
              <li
                class="dish__item"
                v-for="(dish, index) of category.dishes"
                :key="index"
                :data-index="(category.url + ':' +  index)"
              >
              <DishItem
                :dish="dish"
              />
              </li>
            </ul>
          </HorizontalScroll>
          <div
            v-else
            class="dish__list-container"
          >
            <ul
              v-if="category.dishes.length > 0"
              class="dish__list"
              :class="`dish__list--${category.url}`"
            >
              <li
                class="dish__item-container"
                v-for="(dish, index) of category.dishes"
                :key="index"
                :data-index="(category.url + ':' +  index)"
                @click="pushDish(category.url + ':' +  index)"
              >
              <DishItem
                :dish="dish"
              />
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import DishItem from './dishItem.vue';
import HorizontalScroll from './horizontalScroll.vue';

export default {
  props: {
    categories: {
      required: true
    },
    isAdmin: {
      default: false
    }
  },
  components: { DishItem, HorizontalScroll },
  methods: {
    pushDish (dish) {
      const str = dish.split(':')
      const cat = this.categories.find(cat => cat.url === str[0])
      this.$emit('pushDish', cat.dishes[str[1]])
    }
  }
}
</script>

<style lang="scss" scoped>
  .categories__list{
    list-style: none;
    padding: 0;
    height: 100%;
    overflow: scroll;
  }

  .category__title-container{
    display: flex;
    align-items: center;
    margin-bottom: 24px;
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

  .category__container{
    margin-bottom: 48px;
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

  .dish__list-container{
    & .dish__list{
      display: flex;
      flex-wrap: wrap;
    }
  }

  .dish__item-container{
    margin-right: 24px;
  }
</style>
