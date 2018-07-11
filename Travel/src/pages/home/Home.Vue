<template>
    <div>
      <home-header class="header"></home-header>
      <home-swiper></home-swiper>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style>
  .header {
    margin-top: -64px
  }
</style>
