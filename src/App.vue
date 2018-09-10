<template>
  <div id="app">
      <v-header v-if="$route.path != '/login'"></v-header>
      <div class="content">
         <v-left></v-left>
        <div class="contentRight">
          <transition name="fade" mode="out-in">
            <keep-alive>
              <router-view class="view"></router-view>
            </keep-alive>
          </transition>
          <v-footer v-if="$route.path != '/login'"></v-footer>
        </div>
      </div>
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
  /*@import '../node_modules/element-ui/lib/theme-chalk/index.css'*/
  @import './style/base.css'
  .content
     width:91.66667%;
     margin:0 auto;
     &>div
       display:inline-block;
       vertical-align:top;
     .contentLeft
       width:40%;
     .contentRight
       width:60%;

  @media only screen and (max-width: 768px){
    .content{
      width:100%;
    }
    .content .contentLeft{
       display: none;
    }
    .content .contentRight{
       width:100%;
    }
  }
</style>
