<template>
  <div class="main-page">
    <loginModal />
    <userList />
  </div>
</template>

<script>
import loginModal from './components/login-modal.vue';
import userList from './components/userList.vue'
export default {
  name: 'App',
  components: {loginModal, userList}
}
</script>

<style scoped lang="scss">
</style>
