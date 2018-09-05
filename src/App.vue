<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view class="view"></router-view>
      </keep-alive>
    </transition>
    <canvas-show v-if="$route.path == '/login'"></canvas-show>
  </div>
</template>
<script>
  import canvasDiv from "./views/canvas.vue"
  export default {
    data () {
      return {
        msg: 'hello vue'
      }
    },
      beforeCreate(){

      },
      created(){
      },
      beforeMount(){

      },
      mounted(){
          console.log(this.$route.path)
      },
    components: {
        'canvas-show':canvasDiv
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../node_modules/element-ui/lib/theme-default/index.css'
  @import './style/base.css'
</style>
