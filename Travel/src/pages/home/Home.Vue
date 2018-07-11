<template>
    <div>
      <home-header class="header"></home-header>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style>
  .header {
    margin-top: -64px
  }
</style>
