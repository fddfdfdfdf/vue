<template>
  <div id="app">
    <el-container>
      <v-header v-if="$route.path != '/login'"></v-header>
      <!--<el-row>-->
         <!--<v-left></v-left>-->
         <!--<el-col :xs="24" :span="21" style="overflow-y: scroll">-->
            <!--<transition name="fade" mode="out-in">-->
              <!--<keep-alive>-->
                <!--<router-view class="view"></router-view>-->
              <!--</keep-alive>-->
            <!--</transition>-->
            <!--<v-footer v-if="$route.path != '/login'"></v-footer>-->
          <!--</el-col>-->
      <!--</el-row>-->
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
  .el-row
     height: 100%;
     .leftAslide
         height:100%;
         position:relative;
         left:0;
         top:0;
         background:rgb(84, 92, 100);
         .el-menu-vertical-demo
             padding-bottom:56px;
         .el-menu
            border:none !important;
  .el-main
    left: -10px;
    background: #f5f5f5;
  .mainLeft
     width: initial !important;
     background: rgb(84, 92, 100);
     .el-menu
        border:none !important;
     li
         span
            padding-right:40%;
  .el-main
     width:100%;
     height:100%;
</style>
