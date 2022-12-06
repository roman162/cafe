<template>
  <div class="main-page">
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted () {
    document.body.style.backgroundColor = '#EDF1F5'
  }
}
</script>

<style lang="scss" scoped>
  .main-page{
    max-width: 1680px;
    margin: 0 auto;
  }
</style>