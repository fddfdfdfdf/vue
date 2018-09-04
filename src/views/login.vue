<template>
    <div class="login">
        <div class="script" v-html="dds"></div>
        <div class="loginContain">
            <div>
                <div @click="dd">
                    login
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return {
                dds:'<script src="http://cdn.atool.org/res/ribbon.min.js" type="text/javascript"><\/script><script color="255,255,255" opacity="1" count="99" src="https://cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.js" type="text/javascript" charset="utf-8"><\/script>'
            }
        },
        beforeCreate(){

        },
        mounted(){
            document.title = '登录'
        },
        methods:{
            dd:function fun(e){
              e.stopPropagation();
              console.log("click")
            }
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus">
#c_n2
   background:#2d2d2d !important;
   z-index:1 !important;
canvas
   z-index:2 !important;
.login
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    z-index: 3;
.loginContain
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    display:table;
    z-index:2;
    &>div
      display:table-cell;
      width:100%;
      height:100%;
      vertical-align:middle;
      text-align:center;
      &>div
        display:inline-block;
        background: #11381d;
        padding: 20px;
        opacity: 0.6;
        border-radius: 10px;
        color: #fff;
        box-shadow: 0px 0px 1rem .3rem #1b8800;
</style>