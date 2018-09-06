<template>
  <div id="app">
    <el-container>
      <el-header>
        <v-header v-if="$route.path != '/login'">header</v-header>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <transition name="fade" mode="out-in">
            <!--<keep-alive>-->
              <!--<router-view class="view"></router-view>-->
            <!--</keep-alive>-->
          </transition>
          <v-footer v-if="$route.path != '/login'"></v-footer>
        </el-main>
      </el-container>
    </el-container>
    <canvas-show v-if="$route.path == '/login'"></canvas-show>
  </div>
</template>
<script>
  import canvasDiv from "./views/canvas.vue"
  import footer from "./components/footer.vue"
  import mainLeft from "./components/mainLeft.vue"
  import header from "./components/header.vue"

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
        'canvas-show': canvasDiv,
        'v-header': header,
        'v-footer' : footer,
        'v-left' : mainLeft
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../node_modules/element-ui/lib/theme-chalk/index.css'
  @import './style/base.css'
</style>
