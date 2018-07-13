<template>
  <div class="container">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide>
          <img class="gallary-img" src="http://img1.qunarzz.com/piao/fusion/1802/e3/62ce7362ca051d02.jpg_640x200_6db551b7.jpg"/>
        </swiper-slide>
        <swiper-slide>
          <img class="gallary-img" src="http://img1.qunarzz.com/piao/fusion/1802/e3/62ce7362ca051d02.jpg_640x200_6db551b7.jpg"/>
        </swiper-slide>
        <swiper-slide>
          <img class="gallary-img" src="http://img1.qunarzz.com/piao/fusion/1802/e3/62ce7362ca051d02.jpg_640x200_6db551b7.jpg"/>
        </swiper-slide>
    <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        paginationType: 'fraction'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    righ: 0
    bottom: 0
    top: 0
    background: #000
    .wrapper
      width: 100%
      height: 0
      padding-bottom: 100%
</style>
