<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <keep-alive exclude="login">
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
      beforeCreate(){
          console.log("fds-1")
      },
      created(){
          console.log("fds-2")
      },
      beforeMount(){
          console.log("fds-3")
      },
      mounted(){
          console.log("fds-4")
      },
    components: {

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../node_modules/element-ui/lib/theme-default/index.css'
  @import './style/base.css'
</style>
