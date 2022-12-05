<template>
  <div class="login-modal">
    <input
      type="text"
      class="login__input"
      placeholder="Введите e-mail"
      v-model="email"
    >
    <input
      type="text"
      class="login__input"
      placeholder="Введите пароль"
      v-model="name"
    >
    <button
      class="login__button"
      @click="sendForm"
    >
      Зарегистрироваться
    </button>
  </div>
</template>

<script>
import md5 from 'md5'
import axios from 'axios'
  export default {
    name: 'loginModal',
    data () {
      return {
        email: '',
        name: '',
        token: '',
        balance: 0
      }
    },
    methods: {
      sendForm () {
        if (this.email.length > 0 && this.name.length > 0) {
          this.token = md5(this.email + this.name + new Date())
          const data = {
            mail: this.email,
            name: this.name
            // token: this.token,
            // balance: this.balance
          }
          axios.post(`http://localhost:3000/users/user`, data)
            .then((result) => {
              console.log(result)
            })
            .catch((error) => {
              console.log(error)
            })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
