<template>
  <div>
    <banner></banner>
    Detail
  </div>
</template>

<script>
import Banner from './components/Banner'

export default {
  name: 'Detail',
  components: {
    Banner
  },
  mounted () {
    console.log(this.$router.path)
  }
}
</script>

<style lang="stylus" scoped>

</style>
