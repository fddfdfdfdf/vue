<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <keep-alive exclude="moviesDetail">
        <router-view class="view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../node_modules/element-ui/lib/theme-default/index.css'
</style>
