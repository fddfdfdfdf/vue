<template>
  <div class="moving">
    <div>
      main
    </div>
  </div>
</template>

<script>
  import moviesTag from '../components/moviesTag.vue'
  export default {
    data () {
      return {
        /**
         * 城市列表
         */
        citys: [
          {
            name: '北京'
          },
          {
            name: '上海'

          },
          {
            name: '广州'
          },
          {
            name: '深圳'
          },
          {
            name: '杭州'
          }
        ]
      }
    },
    mounted () {
      document.title = '正在热映'
      this.$store.dispatch('getMoving')
    },
    methods: {
      /**
       * function 切换城市
       * @param command
       */
      changeCity (command) {
          console.log(this.$dispatch)
        this.$store.commit('MOVING_LOADING', {loading: true})
        this.$store.commit('MOVIE_CITY', {city: command})
        this.$store.dispatch('getMoving')
      }
    },
    components: {
      'MoviesTag': moviesTag
    },
    computed: {
      /**
       * function 电影列表函数
       * @returns {computed.movingList|state.movingList|{subjects}|getters.movingList|*}
       */
      movingList () {
        return this.$store.getters.movingList
      },
      /**
       * function 获取当前城市
       * @returns {*|computed.city|string|getters.city}
       */
      city () {
        return this.$store.getters.city
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/stylus" lang="stylus">
  .moving
    margin-bottom: 20px;
    p
      color: red;
    .tit
      width: 950px;
      margin: 0 auto;
      margin-top: 20px;
      h1
        display: inline-block;
        width: 126px;
        font-size: 20px;
        color: #000;
      .locat
        position: relative;
        display: inline-block;

      .hd
        border: none;

  .tab-hd
    vertical-align: bottom;
    li
      margin: 0 5px;
      float: left;

    .on
      background-color: #69c;
      color: #fff;
      padding: 0 10px;
      -webkit-border-radius: 2px;
      -moz-border-radius: 2px;
      border-radius: 2px;

  .hd
    padding: 10px 0;
    border-bottom: 1px dashed #ccc;
    h2, .tab-hd
      display: inline-block;


</style>
