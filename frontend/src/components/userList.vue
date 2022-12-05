<template>
  <div>
    <ul class="user__list">
      <li
        class="user__item"
        v-for="(user, index) of users"
        :key="index"
      >
        <router-link
          :to="`/user?id=${user._id}`"
        >
          <p class="user__text">
            {{ user.name }}
          </p>
          <p class="user__text">
            {{ user._id }}
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      users: null
    }
  },
  created () {
    axios.get(`http://localhost:3000/users/users`)
      .then((result) => {
        console.log(result)
        this.users = result.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss" scoped>

</style>
