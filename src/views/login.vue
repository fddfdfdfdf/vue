<template>
    <div class="login" v-if="show">
        <div class="loginContain">
            <div>
                <ul>
                    <li class="loginHeader">后台管理系统</li>
                    <li>
                        <label for="userName">用户名 : </label>
                        <input type="text" id="userName">
                    </li>
                    <li>
                        <label for="pwd">密&nbsp;&nbsp;&nbsp;&nbsp;码 : </label>
                        <input type="text" id="pwd">
                    </li>
                    <li class="checkcode">
                        <label for="checkCode">验证码 : </label>
                        <input type="text" id="checkCode">
                        <img src="/public/logo-48.png" alt="">
                    </li>
                    <li>
                       <button @click="dd">登录</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return {
                show:false
            }
        },
        computed:{
        },
        beforeCreate(){

        },
        created(){

        },
        beforeMount(){

        },
        mounted(){
            document.title = '登录';
            this.show = true;
        },
        methods:{
            dd:function fun(e){
               e.stopPropagation();
               this.$router.push("moving")
            }
        }
    }
   </script>

<style rel="stylesheet/stylus" lang="stylus">
    @media all and (max-width: 768px){
       ul{
           width: 70% !important;
       }
    }
.checkcode
    position:relative;
    left:0;
    top:0;
    input
      width: 40% !important;
      padding-right: 30%;
    img
      position: absolute;
      right: 7%;
      top: 0px;
      width:30%;
      height:25px;
      border-radius:5px;
#canvasBg
   background:#2d2d2d !important;
   z-index:1 !important;
   opacity:1 !important;
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
      &>ul
        display:inline-block;
        background: #000;
        padding: 20px;
        width: 20%;
        border-radius: 10px;
        color: #999;
        opacity: .7;
        box-shadow: 0px 0px 1rem .3rem #1b8800;
        .loginHeader
          font-size:26px;
          font-weight:600;
        li
          margin:10px 0;
          font-size:16px;
          text-align:center;
          input
            border:none;
            outline:none;
            width: 70%;
            border-radius:5px;
            text-indent:10px;
          .checkcode
            width:40%;
          button
            background: #1b8800;
            width: 60%;
            border: none;
            font-size: 18px;
            outline: none;
            border-radius: 5px;
            margin-top: 20px;
            color: #fff;
            opacity: .8;
</style>