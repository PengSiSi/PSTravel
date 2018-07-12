<template>
    <div>
      <home-header class="header" :city="city"></home-header>
      <home-swiper :swiperList="swiperList"></home-swiper>
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
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeWeekend,
    homeRecommend
  },
  data () {
    return {
      city: '',
      swiperList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/static/mock/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>
  .header {
    margin-top: -64px
  }
</style>
