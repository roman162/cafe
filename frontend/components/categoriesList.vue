<template>
  <div class="categories__container">
    <input
      type="text"
      v-model="cat1"
    >
    <input
      type="text"
      v-model="cat2"
    >
    <input
      type="text"
      v-model="cat3"
    >
    <input
      type="text"
      v-model="cat4"
    >
    <input
      type="text"
      v-model="cat5"
    >
    <button
      @click="addCategory"
    >click</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cat1: null,
      cat2: null,
      cat3: null,
      cat4: null,
      cat5: null
    }
  },
  methods: {
    addCategory () {
      const data = {
        title: this.cat1,
        price: this.cat2,
        weight: this.cat3,
        image: this.cat4,
        category: this.cat5
      }
      this.$axios.post(`http://localhost:3000/categories/dish`, data)
        .then((result) => {
          console.log(result.data)
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
