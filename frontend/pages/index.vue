<template>
  <div class="index-page">  
    <div class="dish__list-container">
      <DishList
        @pushDish="pushDish"
      />
    </div>
    <div class="tray__container">

    </div>
  </div>
</template>

<script>
import DishList from '~/components/dishList.vue';

export default {
  components: { DishList },
  computed: {
    menu () {
      return this.$store.getters.GET_MENU
    }
  },
  methods: {
    pushDish (dish) {
      const str = dish.split(':')
      const cat = this.menu.find(cat => cat.title === str[0])
      this.$store.commit('PUSH_DISH', cat.dishes[str[1]])
    }
  }
}
</script>
