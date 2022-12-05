<template>
  <div class="user__info">

  </div>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    const id = this.$route.params.id
    axios.get(`http://localhost:3000/users/user?id=${id}`)
      .then((result) => {
        console.log(result.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss" scoped>

</style>
