<template>
  <div>
    <home-header :city = "city"></home-header>
    <home-swiper :list = "swiperList"></home-swiper>
    <home-icons :list = "iconList"></home-icons>
    <home-comment :list = "recommentList"></home-comment>
    <home-weekend :list = "weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeComment from './components/Recomment'
import HomeWeekend from './components/Weekend'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeComment,
    HomeWeekend
  },
  data() {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommentList: [],
      weekendList: [],
    }
  },
  methods: {
    getHomeInfo: function(){
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc: function(res){
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.swiperIcons
        this.recommentList = data.recommentList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted() {  //钩子函数，在页面渲染吼执行，发送ajax请求
    this.getHomeInfo()
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
