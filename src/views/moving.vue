<template>
  <div class="main">
    main
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

</style>
