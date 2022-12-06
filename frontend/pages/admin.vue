<template>
  <div class="main-page">
    <DishList />
    <CategoriesList />
  </div>
</template>

<script>
import CategoriesList from '~/components/categoriesList.vue';
import DishList from '~/components/dishList.vue';


export default {
    components: { CategoriesList, DishList }
}
</script>

<style lang="scss" scoped>

</style>
