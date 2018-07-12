<template>
  <div>
    <city-header></city-header>
    <div @click="clickCityName">
      三亚
    </div>
  </div>
</template>

<script>

import CityHeader from './components/Header'
import axios from 'axios'

export default {
  name: 'City',
  components: {
    CityHeader
  },
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/static/mock/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    clickCityName () {
      // alert('三亚')
      // this.$store.dispatch('changeCity', '三亚')
      this.$store.commit('changeCity', '上海')
      this.$router.push('/')
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
