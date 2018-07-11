<template>
    <div>
      <home-header class="header"></home-header>
      <home-swiper></home-swiper>
      <home-icons></home-icons>
      <home-recommend></home-recommend>
      <home-weekend></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import homeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeWeekend,
    homeRecommend
  }
}
</script>

<style>
  .header {
    margin-top: -64px
  }
</style>
